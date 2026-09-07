import React, { useEffect, useState } from 'react';

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

import {
  ClassLevel,
  Subject,
  StudentProfile,
  Lesson,
  QuizTest,
} from './types';

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


/* =========================================================
   TANmz — APLICAÇÃO PRINCIPAL
   ========================================================= */

export default function App() {

  /* =======================================================
     PERFIL E NAVEGAÇÃO
     ======================================================= */

  const [profile, setProfile] = useState<StudentProfile>(
    getStoredProfile()
  );

  const [currentTab, setCurrentTab] = useState<TabType>('home');

  const [activeSubject, setActiveSubject] =
    useState<Subject>('Biologia');


  /* =======================================================
     AULA ATIVA
     ======================================================= */

  const [selectedLesson, setSelectedLesson] =
    useState<Lesson | null>(null);

  const [selectedUnitTitle, setSelectedUnitTitle] =
    useState<string>('');


  /* =======================================================
     QUIZ ATIVO
     ======================================================= */

  const [activeQuiz, setActiveQuiz] =
    useState<QuizTest | null>(null);


  /* =======================================================
     MODAIS
     ======================================================= */

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [isTutorOpen, setIsTutorOpen] =
    useState(false);

  const [tutorContextTopic, setTutorContextTopic] =
    useState<string | undefined>(undefined);

  const [isOnboardingOpen, setIsOnboardingOpen] =
    useState(false);


  /* =======================================================
     PRIMEIRA UTILIZAÇÃO
     ======================================================= */

  useEffect(() => {

    if (isFirstTimeUser()) {
      setIsOnboardingOpen(true);
    }

  }, []);


  /* =======================================================
     ALTERAR CLASSE DO ESTUDANTE
     ======================================================= */

  const handleSelectClass = (
    newClass: ClassLevel
  ) => {

    const updated = updateStudentClass(newClass);

    setProfile({
      ...updated,
    });
  };


  /* =======================================================
     FINALIZAR CONFIGURAÇÃO INICIAL
     ======================================================= */

  const handleOnboardingSelectClass = (
    chosenClass: ClassLevel
  ) => {

    markFirstTimeCompleted();

    setIsOnboardingOpen(false);

    handleSelectClass(chosenClass);
  };


  /* =======================================================
     ABRIR UMA AULA
     ======================================================= */

  const handleOpenLesson = (
    unitId: string,
    topicTitle: string,
    unitTitle: string,
    overrideClass?: ClassLevel,
    overrideSubject?: Subject
  ) => {

    const classToUse =
      overrideClass || profile.selectedClass;

    const subjectToUse =
      overrideSubject || activeSubject;


    /* -----------------------------------------------------
       Encontrar unidade curricular
       ----------------------------------------------------- */

    const unit = CURRICULUM_UNITS.find(
      (item) => item.id === unitId
    );


    /* -----------------------------------------------------
       Determinar número da aula
       ----------------------------------------------------- */

    const topicIndex =
      unit
        ? unit.lessonTopics.indexOf(topicTitle)
        : 0;

    const lessonNum =
      topicIndex >= 0
        ? topicIndex + 1
        : 1;


    /*
     * Mantemos estas variáveis para preservar a lógica
     * curricular e facilitar futuras expansões.
     */

    void lessonNum;


    /* -----------------------------------------------------
       Obter conteúdo desenvolvido
       ----------------------------------------------------- */

    const lessonData = getLessonForTopic(
      unitId,
      topicTitle,
      classToUse,
      subjectToUse,
      unitTitle
    );


    /* -----------------------------------------------------
       Registar último conteúdo visitado
       ----------------------------------------------------- */

    const updatedProfile =
      recordLastAccessedContent({
        unitId,
        topicTitle,
        unitTitle,
        classLevel: classToUse,
        subject: subjectToUse,
        accessDate: new Date().toISOString(),
      });


    setProfile({
      ...updatedProfile,
    });


    /* -----------------------------------------------------
       Abrir aula
       ----------------------------------------------------- */

    setSelectedLesson(lessonData);

    setSelectedUnitTitle(unitTitle);

    setActiveQuiz(null);


    /* -----------------------------------------------------
       Voltar ao topo
       ----------------------------------------------------- */

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  /* =======================================================
     CONCLUIR AULA
     ======================================================= */

  const handleCompleteLesson = (
    lessonId: string
  ) => {

    const updated =
      recordLessonCompletion(lessonId);

    setProfile({
      ...updated,
    });
  };


  /* =======================================================
     INICIAR QUIZ
     ======================================================= */

  const handleStartQuiz = (
    quiz: QuizTest
  ) => {

    setActiveQuiz(quiz);

    setSelectedLesson(null);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  /* =======================================================
     FINALIZAR QUIZ
     ======================================================= */

  const handleFinishQuiz = (
    quizId: string,
    quizTitle: string,
    correctCount: number,
    totalCount: number
  ) => {

    const updated =
      recordQuizResult(
        quizId,
        quizTitle,
        correctCount,
        totalCount
      );

    setProfile({
      ...updated,
    });
  };


  /* =======================================================
     REGISTAR RESPOSTA DE EXERCÍCIO
     ======================================================= */

  const handleRecordExerciseAnswer = (
    isCorrect: boolean
  ) => {

    const updated =
      recordExerciseAnswer(isCorrect);

    setProfile({
      ...updated,
    });
  };


  /* =======================================================
     CONTINUAR ESTUDO
     ======================================================= */

  const handleContinueStudy = () => {

    /*
     * Se existe um conteúdo anteriormente visitado,
     * abrir diretamente esse conteúdo.
     */

    if (profile.lastAccessedContent) {

      const {
        unitId,
        topicTitle,
        unitTitle,
        classLevel,
        subject,
      } = profile.lastAccessedContent;

      handleOpenLesson(
        unitId,
        topicTitle,
        unitTitle,
        classLevel,
        subject
      );

      return;
    }


    /*
     * Caso seja um novo estudante,
     * abrir a primeira unidade da classe atual.
     */

    const units =
      CURRICULUM_UNITS.filter(
        (unit) =>
          unit.classLevel === profile.selectedClass
      );


    if (units.length === 0) {
      return;
    }


    const firstUnit = units[0];

    const firstTopic =
      firstUnit.lessonTopics[0];


    if (!firstTopic) {
      return;
    }


    handleOpenLesson(
      firstUnit.id,
      firstTopic,
      firstUnit.title,
      firstUnit.classLevel,
      firstUnit.subject
    );
  };


  /* =======================================================
     REPOR PROGRESSO
     ======================================================= */

  const handleResetProgress = () => {

    localStorage.removeItem(
      'tanmz_student_profile_v1'
    );

    localStorage.removeItem(
      'tanmz_first_time_user'
    );

    window.location.reload();
  };


  /* =======================================================
     TAMANHO DAS LETRAS
     ======================================================= */

  /*
   * Aumentamos o tamanho padrão.
   *
   * Antes:
   * normal = text-sm
   *
   * Agora:
   * normal = text-base
   *
   * Isto melhora bastante a leitura no Android.
   */

  const fontSizeClasses = {

    normal:
      'text-base',

    large:
      'text-lg font-medium',

    xlarge:
      'text-xl font-medium',

  };


  /* =======================================================
     INTERFACE
     ======================================================= */

  return (

    <div
      className={`
        min-h-screen
        flex
        flex-col
        font-sans
        bg-slate-50
        text-slate-800
        ${fontSizeClasses[profile.fontSize] || 'text-base'}
      `}
    >

      {/* =================================================
          BANNER DE INSTALAÇÃO ANDROID
          ================================================= */}

      <AndroidInstallBanner />


      {/* =================================================
          CABEÇALHO
          ================================================= */}

      <Header

        selectedClass={
          profile.selectedClass
        }

        onSelectClass={
          handleSelectClass
        }

        onOpenSearch={() =>
          setIsSearchOpen(true)
        }

        onOpenTutor={() => {

          setTutorContextTopic(
            undefined
          );

          setIsTutorOpen(true);
        }}

        points={
          profile.points
        }
      />


      {/* =================================================
          CONTEÚDO PRINCIPAL
          ================================================= */}

      <main
        className="
          flex-1
          w-full
          overflow-x-hidden
          pb-20
        "
      >

        {/* =================================================
            QUIZ
            ================================================= */}

        {activeQuiz ? (

          <QuizTestView

            quiz={
              activeQuiz
            }

            onBack={() =>
              setActiveQuiz(null)
            }

            onFinishQuiz={
              handleFinishQuiz
            }

          />

        ) : selectedLesson ? (

          /* ===============================================
             AULA
             =============================================== */

          <LessonView

            lesson={
              selectedLesson
            }

            unitTitle={
              selectedUnitTitle
            }

            onBack={() =>
              setSelectedLesson(null)
            }

            onCompleteLesson={
              handleCompleteLesson
            }

            isCompleted={
              profile.completedLessonIds.includes(
                selectedLesson.id
              )
            }

            onOpenTutorForLesson={
              (topic) => {

                setTutorContextTopic(
                  topic
                );

                setIsTutorOpen(true);
              }
            }

          />

        ) : (

          /* ===============================================
             ÁREAS PRINCIPAIS DO APLICATIVO
             =============================================== */

          <>

            {/* =================================================
                HOME
                ================================================= */}

            {currentTab === 'home' && (

              <HomeView

                profile={
                  profile
                }

                onSelectSubjectTab={
                  (subject) => {

                    setActiveSubject(
                      subject
                    );

                    setCurrentTab(
                      'subjects'
                    );
                  }
                }

                onOpenSearch={() =>
                  setIsSearchOpen(true)
                }

                onOpenProgress={() =>
                  setCurrentTab(
                    'progress'
                  )
                }

                onOpenTutor={() => {

                  setTutorContextTopic(
                    undefined
                  );

                  setIsTutorOpen(true);
                }}

                onContinueStudy={
                  handleContinueStudy
                }

                onChangeClass={() =>
                  setIsOnboardingOpen(true)
                }

              />

            )}


            {/* =================================================
                DISCIPLINAS
                ================================================= */}

            {currentTab === 'subjects' && (

              <SubjectsView

                currentClass={
                  profile.selectedClass
                }

                onChangeClass={
                  handleSelectClass
                }

                activeSubject={
                  activeSubject
                }

                onChangeSubject={
                  setActiveSubject
                }

                onOpenLesson={
                  (
                    unitId,
                    topicTitle,
                    unitTitle
                  ) =>
                    handleOpenLesson(
                      unitId,
                      topicTitle,
                      unitTitle
                    )
                }

                completedLessonIds={
                  profile.completedLessonIds
                }

              />

            )}


            {/* =================================================
                EXERCÍCIOS
                ================================================= */}

            {currentTab === 'exercises' && (

              <ExercisesView

                currentClass={
                  profile.selectedClass
                }

                onStartQuiz={
                  handleStartQuiz
                }

                onRecordExerciseAnswer={
                  handleRecordExerciseAnswer
                }

              />

            )}


            {/* =================================================
                PROGRESSO
                ================================================= */}

            {currentTab === 'progress' && (

              <ProgressView

                profile={
                  profile
                }

                onNavigateToStudy={() =>
                  setCurrentTab(
                    'exercises'
                  )
                }

              />

            )}


            {/* =================================================
                PERFIL
                ================================================= */}

            {currentTab === 'profile' && (

              <ProfileView

                profile={
                  profile
                }

                onUpdateProfile={
                  (updated) => {

                    saveProfile(
                      updated
                    );

                    setProfile(
                      updated
                    );
                  }
                }

                onResetProgress={
                  handleResetProgress
                }

              />

            )}

          </>

        )}

      </main>


      {/* =====================================================
          NAVEGAÇÃO INFERIOR
          ===================================================== */}

      <BottomNav

        currentTab={
          currentTab
        }

        onSelectTab={
          (tab) => {

            setSelectedLesson(
              null
            );

            setActiveQuiz(
              null
            );

            setCurrentTab(
              tab
            );

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });

          }
        }

      />


      {/* =====================================================
          PESQUISA
          ===================================================== */}

      <SearchModal

        isOpen={
          isSearchOpen
        }

        onClose={() =>
          setIsSearchOpen(false)
        }

        onSelectLesson={
          (
            unitId,
            topicTitle,
            classLevel,
            subject,
            unitTitle
          ) =>
            handleOpenLesson(
              unitId,
              topicTitle,
              unitTitle,
              classLevel,
              subject
            )
        }

      />


      {/* =====================================================
          TUTOR DE IA
          ===================================================== */}

      <AITutorModal

        isOpen={
          isTutorOpen
        }

        onClose={() =>
          setIsTutorOpen(false)
        }

        currentClass={
          profile.selectedClass
        }

        currentSubject={
          activeSubject
        }

        lessonContextTopic={
          tutorContextTopic
        }

      />


      {/* =====================================================
          CONFIGURAÇÃO INICIAL
          ===================================================== */}

      <WelcomeOnboardingModal

        isOpen={
          isOnboardingOpen
        }

        onSelectClass={
          handleOnboardingSelectClass
        }

      />

    </div>
  );
}
