import { StudentProfile, ClassLevel, Subject, LastAccessedContent } from '../types';

const STORAGE_KEY = 'tanmz_student_profile_v1';
const FIRST_TIME_KEY = 'tanmz_first_time_user';

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Estudante TANmz',
  selectedClass: '8ª Classe',
  preferredSubject: 'Ambas',
  points: 120,
  exercisesCompletedCount: 4,
  quizzesCompletedCount: 1,
  studyStreakDays: 2,
  lastStudyDate: new Date().toISOString().split('T')[0],
  completedLessonIds: ['bio-8-u1-l1', 'qui-8-u2-l1'],
  quizScores: [
    {
      quizId: 'quiz-bio-8-general',
      quizTitle: 'Simulado de Revisão: 8ª Classe - Célula',
      scorePercent: 85,
      correctCount: 2,
      totalCount: 2,
      completedAt: new Date().toLocaleDateString('pt-MZ'),
    },
  ],
  fontSize: 'normal',
};

export function getStoredProfile(): StudentProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveProfile(DEFAULT_PROFILE);
      return DEFAULT_PROFILE;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Erro ao carregar perfil local:', e);
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.warn('Erro ao salvar perfil local:', e);
  }
}

export function isFirstTimeUser(): boolean {
  try {
    const seen = localStorage.getItem(FIRST_TIME_KEY);
    return seen !== 'completed';
  } catch (e) {
    return false;
  }
}

export function markFirstTimeCompleted(): void {
  try {
    localStorage.setItem(FIRST_TIME_KEY, 'completed');
  } catch (e) {
    // Ignore
  }
}

export function updateStudentClass(classLevel: ClassLevel): StudentProfile {
  const profile = getStoredProfile();
  profile.selectedClass = classLevel;
  saveProfile(profile);
  return profile;
}

export function recordLastAccessedContent(content: LastAccessedContent): StudentProfile {
  const profile = getStoredProfile();
  profile.lastAccessedContent = content;
  saveProfile(profile);
  return profile;
}

export function recordLessonCompletion(lessonId: string): StudentProfile {
  const profile = getStoredProfile();
  if (!profile.completedLessonIds.includes(lessonId)) {
    profile.completedLessonIds.push(lessonId);
    profile.points += 20; // 20 pontos por aula concluída
    updateStreak(profile);
    saveProfile(profile);
  }
  return profile;
}

export function recordExerciseAnswer(isCorrect: boolean, points: number = 10): StudentProfile {
  const profile = getStoredProfile();
  profile.exercisesCompletedCount += 1;
  if (isCorrect) {
    profile.points += points;
  }
  updateStreak(profile);
  saveProfile(profile);
  return profile;
}

export function recordQuizResult(
  quizId: string,
  quizTitle: string,
  correctCount: number,
  totalCount: number
): StudentProfile {
  const profile = getStoredProfile();
  profile.quizzesCompletedCount += 1;
  const scorePercent = Math.round((correctCount / Math.max(1, totalCount)) * 100);
  
  profile.points += correctCount * 15; // 15 pontos por acerto no teste
  
  profile.quizScores.unshift({
    quizId,
    quizTitle,
    scorePercent,
    correctCount,
    totalCount,
    completedAt: new Date().toLocaleDateString('pt-MZ'),
  });

  // Limit history to 20 tests
  if (profile.quizScores.length > 20) {
    profile.quizScores = profile.quizScores.slice(0, 20);
  }

  updateStreak(profile);
  saveProfile(profile);
  return profile;
}

function updateStreak(profile: StudentProfile) {
  const today = new Date().toISOString().split('T')[0];
  if (profile.lastStudyDate === today) {
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (profile.lastStudyDate === yesterdayStr) {
    profile.studyStreakDays += 1;
  } else {
    // Break streak or start afresh
    profile.studyStreakDays = 1;
  }
  profile.lastStudyDate = today;
}

export interface ScoreClassification {
  label: string;
  badgeColor: string;
  description: string;
}

export function getScoreClassification(percentage: number): ScoreClassification {
  if (percentage >= 90) {
    return {
      label: 'Excelente',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'Domínio excecional dos conceitos científicos! Parabéns pelo seu empenho.',
    };
  }
  if (percentage >= 75) {
    return {
      label: 'Muito bom',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      description: 'Excelente compreensão dos temas, continue a praticar para alcançar o topo!',
    };
  }
  if (percentage >= 60) {
    return {
      label: 'Bom',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      description: 'Bom rendimento. Revise os pontos com atenção para fixar ainda mais.',
    };
  }
  if (percentage >= 50) {
    return {
      label: 'Precisa melhorar',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      description: 'Conhecimentos básicos compreendidos. Releia os resumos da aula antes do próximo teste.',
    };
  }
  return {
    label: 'Precisa revisar',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    description: 'Não desanime! Releia a aula passo a passo e faça as perguntas rápidas com calma.',
  };
}
