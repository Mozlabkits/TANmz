import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { SubjectsView } from './components/SubjectsView';
import { ExercisesView } from './components/ExercisesView';
import { ProgressView } from './components/ProgressView';
import { ProfileView } from './components/ProfileView';
import { LessonView } from './components/LessonView';
import { QuizTestView } from './components/QuizTestView';
import { SearchModal } from './components/SearchModal';
import { AITutorModal } from './components/AITutorModal';
import { WelcomeOnboardingModal } from './components/WelcomeOnboardingModal';
import { AndroidInstallBanner } from './components/AndroidInstallBanner';

import { ClassLevel, Subject, StudentProfile, Lesson, QuizTest } from './types';
import { CURRICULUM_UNITS } from './data/curriculumData';
import { getLessonForTopic } from './data/lessonsData';
import {
  getStoredProfile,
  saveProfile,
  isFirstTimeUser,
  markFirstTimeCompleted,
  recordLessonCompletion,
  recordExerciseAnswer,
  recordQuizResult,
  updateStudentClass,
  recordLastAccessedContent,
} from './utils/storage';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(getStoredProfile());
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [activeSubject, setActiveSubject] = useState<Subject>('Biologia');

  // Active Lesson state (when student is reading an individual topic)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedUnitTitle, setSelectedUnitTitle] = useState<string>('');

  // Active Quiz Test state (when student is taking a timed test)
  const [activeQuiz, setActiveQuiz] = useState<QuizTest | null>(null);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [tutorContextTopic, setTutorContextTopic] = useState<string | undefined>(undefined);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  // Check first time user on mount
  useEffect(() => {
    if (isFirstTimeUser()) {
      setIsOnboardingOpen(true);
    }
  }, []);

  const handleSelectClass = (newClass: ClassLevel) => {
    const updated = updateStudentClass(newClass);
    setProfile({ ...updated });
  };

  const handleOnboardingSelectClass = (chosenClass: ClassLevel) => {
    markFirstTimeCompleted();
    setIsOnboardingOpen(false);
    handleSelectClass(chosenClass);
  };

  const handleOpenLesson = (
    unitId: string,
    topicTitle: string,
    unitTitle: string,
    overrideClass?: ClassLevel,
    overrideSubject?: Subject
  ) => {
    const classToUse = overrideClass || profile.selectedClass;
    const subjectToUse = overrideSubject || activeSubject;

    const unit = CURRICULUM_UNITS.find((u) => u.id === unitId);
    const unitNumber = unit ? unit.unitNumber : 1;
    const topicIndex = unit ? unit.lessonTopics.indexOf(topicTitle) : 0;
    const lessonNum = topicIndex >= 0 ? topicIndex + 1 : 1;

    const lessonData = getLessonForTopic(
      unitId,
      topicTitle,
      classToUse,
      subjectToUse,
      unitTitle
    );

    const updatedProfile = recordLastAccessedContent({
      unitId,
      topicTitle,
      unitTitle,
      classLevel: classToUse,
      subject: subjectToUse,
      accessDate: new Date().toISOString(),
    });
    setProfile({ ...updatedProfile });

    setSelectedLesson(lessonData);
    setSelectedUnitTitle(unitTitle);
    setActiveQuiz(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteLesson = (lessonId: string) => {
    const updated = recordLessonCompletion(lessonId);
    setProfile({ ...updated });
  };

  const handleStartQuiz = (quiz: QuizTest) => {
    setActiveQuiz(quiz);
    setSelectedLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (
    quizId: string,
    quizTitle: string,
    correctCount: number,
    totalCount: number
  ) => {
    const updated = recordQuizResult(quizId, quizTitle, correctCount, totalCount);
    setProfile({ ...updated });
  };

  const handleRecordExerciseAnswer = (isCorrect: boolean) => {
    const updated = recordExerciseAnswer(isCorrect);
    setProfile({ ...updated });
  };

  const handleContinueStudy = () => {
    // If student has a last accessed content, resume that directly
    if (profile.lastAccessedContent) {
      const { unitId, topicTitle, unitTitle, classLevel, subject } = profile.lastAccessedContent;
      handleOpenLesson(unitId, topicTitle, unitTitle, classLevel, subject);
      return;
    }

    // Otherwise find first unit of current class
    const units = CURRICULUM_UNITS.filter((u) => u.classLevel === profile.selectedClass);
    if (units.length > 0) {
      const firstUnit = units[0];
      const firstTopic = firstUnit.lessonTopics[0];
      handleOpenLesson(firstUnit.id, firstTopic, firstUnit.title, firstUnit.classLevel, firstUnit.subject);
    }
  };

  const handleResetProgress = () => {
    localStorage.removeItem('tanmz_student_profile_v1');
    localStorage.removeItem('tanmz_first_time_user');
    window.location.reload();
  };

  // Font size scale based on accessibility preferences
  const fontSizeClasses = {
    normal: 'text-sm',
    large: 'text-base font-medium',
    xlarge: 'text-lg font-medium',
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col font-sans ${fontSizeClasses[profile.fontSize] || 'text-sm'}`}>
      {/* Android PWA Install Banner (appears when opened on mobile browser) */}
      <AndroidInstallBanner />

      {/* App Header */}
      <Header
        selectedClass={profile.selectedClass}
        onSelectClass={handleSelectClass}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTutor={() => {
          setTutorContextTopic(undefined);
          setIsTutorOpen(true);
        }}
        points={profile.points}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If taking a quiz test */}
        {activeQuiz ? (
          <QuizTestView
            quiz={activeQuiz}
            onBack={() => setActiveQuiz(null)}
            onFinishQuiz={handleFinishQuiz}
          />
        ) : selectedLesson ? (
          /* If reading an individual lesson */
          <LessonView
            lesson={selectedLesson}
            unitTitle={selectedUnitTitle}
            onBack={() => setSelectedLesson(null)}
            onCompleteLesson={handleCompleteLesson}
            isCompleted={profile.completedLessonIds.includes(selectedLesson.id)}
            onOpenTutorForLesson={(topic) => {
              setTutorContextTopic(topic);
              setIsTutorOpen(true);
            }}
          />
        ) : (
          /* Main Tab Views */
          <>
            {currentTab === 'home' && (
              <HomeView
                profile={profile}
                onSelectSubjectTab={(sub) => {
                  setActiveSubject(sub);
                  setCurrentTab('subjects');
                }}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenProgress={() => setCurrentTab('progress')}
                onOpenTutor={() => {
                  setTutorContextTopic(undefined);
                  setIsTutorOpen(true);
                }}
                onContinueStudy={handleContinueStudy}
                onChangeClass={() => setIsOnboardingOpen(true)}
              />
            )}

            {currentTab === 'subjects' && (
              <SubjectsView
                currentClass={profile.selectedClass}
                onChangeClass={handleSelectClass}
                activeSubject={activeSubject}
                onChangeSubject={setActiveSubject}
                onOpenLesson={(unitId, topicTitle, unitTitle) =>
                  handleOpenLesson(unitId, topicTitle, unitTitle)
                }
                completedLessonIds={profile.completedLessonIds}
              />
            )}

            {currentTab === 'exercises' && (
              <ExercisesView
                currentClass={profile.selectedClass}
                onStartQuiz={handleStartQuiz}
                onRecordExerciseAnswer={handleRecordExerciseAnswer}
              />
            )}

            {currentTab === 'progress' && (
              <ProgressView
                profile={profile}
                onNavigateToStudy={() => setCurrentTab('exercises')}
              />
            )}

            {currentTab === 'profile' && (
              <ProfileView
                profile={profile}
                onUpdateProfile={(updated) => {
                  saveProfile(updated);
                  setProfile(updated);
                }}
                onResetProgress={handleResetProgress}
              />
            )}
          </>
        )}
      </main>

      {/* Material 3 Bottom Navigation Bar */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setSelectedLesson(null);
          setActiveQuiz(null);
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={(unitId, topicTitle, classLevel, subject, unitTitle) => {
          handleOpenLesson(unitId, topicTitle, unitTitle, classLevel, subject);
        }}
      />

      {/* Ask AI Tutor Modal */}
      <AITutorModal
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        currentClass={profile.selectedClass}
        currentSubject={activeSubject}
        lessonContextTopic={tutorContextTopic}
      />

      {/* First Time Welcome / Class Selection Onboarding */}
      <WelcomeOnboardingModal
        isOpen={isOnboardingOpen}
        onSelectClass={handleOnboardingSelectClass}
      />
    </div>
  );
}
