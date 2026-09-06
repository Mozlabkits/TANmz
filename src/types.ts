export type ClassLevel = '7ª Classe' | '8ª Classe' | '9ª Classe' | '10ª Classe' | '11ª Classe' | '12ª Classe';

export type Subject = 'Biologia' | 'Química';

export type DifficultyLevel = 'Fácil' | 'Médio' | 'Avançado';

export type QuestionType = 
  | 'multiple_choice' 
  | 'true_false' 
  | 'fill_blank' 
  | 'matching' 
  | 'calculation';

export interface Objective {
  id: string;
  text: string;
}

export interface QuickCheck {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ExerciseItem {
  id: string;
  statement: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | number; // index or text
  explanation: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  classLevel: ClassLevel;
  subject: Subject;
  theme: string;
  lessonNumber: number;
  title: string;
  objectives: string[];
  content: {
    definition: string;
    explanation: string[];
    diagramOrFormula?: string;
  };
  example: {
    title: string;
    description: string;
    solution?: string;
  };
  mozambiqueApplication: {
    title: string;
    description: string;
    contextArea: 'agricultura' | 'saúde' | 'biodiversidade' | 'recursos_naturais' | 'ambiente' | 'indústria' | 'energia';
  };
  attention: {
    commonError: string;
    correctUnderstanding: string;
  };
  summaryPoints: string[];
  quickChecks: QuickCheck[];
  exercises: ExerciseItem[];
}

export interface Unit {
  id: string;
  classLevel: ClassLevel;
  subject: Subject;
  unitNumber: number;
  title: string;
  description: string;
  lessonTopics: string[]; // List of topic titles in this unit
}

export interface Question {
  id: string;
  classLevel: ClassLevel;
  subject: Subject;
  unitId: string;
  theme: string;
  statement: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: DifficultyLevel;
}

export interface QuizTest {
  id: string;
  title: string;
  classLevel: ClassLevel;
  subject: Subject;
  unitId?: string;
  timeLimitMinutes: number;
  questions: Question[];
}

export interface LastAccessedContent {
  unitId: string;
  topicTitle: string;
  unitTitle: string;
  classLevel: ClassLevel;
  subject: Subject;
  accessDate: string;
}

export interface StudentProfile {
  name: string;
  selectedClass: ClassLevel;
  preferredSubject: Subject | 'Ambas';
  points: number;
  exercisesCompletedCount: number;
  quizzesCompletedCount: number;
  studyStreakDays: number;
  lastStudyDate: string;
  lastAccessedContent?: LastAccessedContent;
  completedLessonIds: string[];
  quizScores: {
    quizId: string;
    quizTitle: string;
    scorePercent: number;
    correctCount: number;
    totalCount: number;
    completedAt: string;
  }[];
  fontSize: 'normal' | 'large' | 'xlarge';
}

export interface SearchResult {
  id: string;
  title: string;
  classLevel: ClassLevel;
  subject: Subject;
  unitTitle: string;
  type: 'aula' | 'conceito' | 'exercício';
  snippet: string;
}

export interface ReferenceItem {
  id: string;
  category: 'curricular' | 'cientifica';
  title: string;
  institutionOrAuthor: string;
  year?: string;
  description: string;
}
