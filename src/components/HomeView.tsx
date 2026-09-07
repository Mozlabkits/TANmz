import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Search,
  Flame,
  Award,
  ChevronRight,
  Atom,
  Dna,
  Zap,
  GraduationCap,
  Target,
} from 'lucide-react';

import {
  ClassLevel,
  Subject,
  StudentProfile,
} from '../types';

import {
  CURRICULUM_UNITS,
} from '../data/curriculumData';


/* =========================================================
   PROPRIEDADES DA HOME
   ========================================================= */

interface HomeViewProps {
  profile: StudentProfile;

  onSelectSubjectTab:
    (subject: Subject) => void;

  onOpenSearch:
    () => void;

  onOpenProgress:
    () => void;

  onOpenTutor:
    () => void;

  onContinueStudy:
    () => void;

  onChangeClass:
    () => void;
}


/* =========================================================
   HOME TANmz
   ========================================================= */

export const HomeView: React.FC<HomeViewProps> = ({
  profile,
  onSelectSubjectTab,
  onOpenSearch,
  onOpenProgress,
  onOpenTutor,
  onContinueStudy,
  onChangeClass,
}) => {

  /* =======================================================
     DADOS DA CLASSE ATUAL
     ======================================================= */

  const classUnits =
    CURRICULUM_UNITS.filter(
      (unit) =>
        unit.classLevel === profile.selectedClass
    );

  const bioUnits =
    classUnits.filter(
      (unit) =>
        unit.subject === 'Biologia'
    );

  const quiUnits =
    classUnits.filter(
      (unit) =>
        unit.subject === 'Química'
    );


  /* =======================================================
     CÁLCULO DO PROGRESSO
     ======================================================= */

  const totalTopicsInClass =
    classUnits.reduce(
      (total, unit) =>
        total + unit.lessonTopics.length,
      0
    );

  const completedInClass =
    profile.completedLessonIds.length;

  const progressPercent =
    Math.min(
      100,
      Math.round(
        (
          completedInClass /
          Math.max(
            1,
            totalTopicsInClass
          )
        ) * 100
      )
    );


  /* =======================================================
     TEXTO DA SEQUÊNCIA
     ======================================================= */

  const streakText =
    profile.studyStreakDays === 1
      ? 'dia'
      : 'dias';


  /* =======================================================
     INTERFACE
     ======================================================= */

  return (

    <div
      className="
        w-full
        max-w-5xl
        mx-auto
        px-4
        sm:px-6
        pt-4
        pb-28
        space-y-6
        animate-in
        fade-in-50
      "
    >


      {/* =====================================================
          1. HERO PRINCIPAL
          ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-br
          from-emerald-800
          via-emerald-700
          to-teal-800
          text-white
          shadow-xl
          shadow-emerald-900/15
        "
      >

        {/* Elementos decorativos */}

        <div
          className="
            absolute
            -right-10
            -top-16
            w-48
            h-48
            rounded-full
            bg-white/10
            blur-2xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -right-12
            -bottom-20
            w-56
            h-56
            rounded-full
            bg-emerald-300/10
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            right-4
            bottom-2
            opacity-[0.08]
            pointer-events-none
          "
        >
          <Atom
            size={210}
            strokeWidth={1}
          />
        </div>


        {/* Conteúdo */}

        <div
          className="
            relative
            z-10
            p-6
            sm:p-8
          "
        >

          {/* Identidade */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
              mb-4
            "
          >

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-white/10
                border
                border-white/20
                px-3
                py-1.5
                text-xs
                font-bold
                tracking-wide
              "
            >
              <GraduationCap
                size={14}
              />

              TANmz
            </span>

            <span
              className="
                rounded-full
                bg-emerald-500/20
                px-3
                py-1.5
                text-xs
                font-semibold
                text-emerald-100
              "
            >
              {profile.selectedClass}
            </span>

          </div>


          {/* Saudação */}

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-black
              tracking-tight
              mb-3
            "
          >
            Olá, {profile.name}! 👋
          </h1>


          <p
            className="
              max-w-2xl
              text-base
              sm:text-lg
              text-emerald-50
              leading-relaxed
              mb-7
            "
          >
            Aprenda Biologia e Química,
            pratique os seus conhecimentos
            e avance no seu próprio ritmo.
          </p>


          {/* Botões principais */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-2.5
            "
          >

            {/* Estudar */}

            <button
              onClick={() =>
                onSelectSubjectTab('Biologia')
              }
              className="
                min-h-[48px]
                px-4
                py-3
                rounded-2xl
                bg-white
                text-emerald-800
                font-bold
                text-sm
                shadow-md
                hover:bg-emerald-50
                active:scale-[0.98]
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <BookOpen
                size={18}
              />

              Começar a estudar
            </button>


            {/* Continuar */}

            <button
              onClick={
                onContinueStudy
              }
              className="
                min-h-[48px]
                px-4
                py-3
                rounded-2xl
                bg-emerald-500
                text-white
                font-bold
                text-sm
                border
                border-emerald-400
                hover:bg-emerald-400
                active:scale-[0.98]
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Zap
                size={18}
              />

              Continuar estudo
            </button>


            {/* Pesquisar */}

            <button
              onClick={
                onOpenSearch
              }
              className="
                min-h-[48px]
                px-4
                py-3
                rounded-2xl
                bg-white/10
                text-white
                font-semibold
                text-sm
                border
                border-white/20
                hover:bg-white/20
                active:scale-[0.98]
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Search
                size={18}
              />

              Pesquisar
            </button>


            {/* Progresso */}

            <button
              onClick={
                onOpenProgress
              }
              className="
                min-h-[48px]
                px-4
                py-3
                rounded-2xl
                bg-white/10
                text-white
                font-semibold
                text-sm
                border
                border-white/20
                hover:bg-white/20
                active:scale-[0.98]
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <TrendingUp
                size={18}
              />

              Meu progresso
            </button>

          </div>

        </div>

      </section>



      {/* =====================================================
          2. RESUMO DO ESTUDANTE
          ===================================================== */}

      <section>

        <div
          className="
            flex
            items-center
            justify-between
            mb-3
          "
        >

          <div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-emerald-700
                mb-1
              "
            >
              O seu percurso
            </p>

            <h2
              className="
                text-xl
                sm:text-2xl
                font-black
                text-slate-900
              "
            >
              O seu progresso
            </h2>

          </div>

          <Target
            size={24}
            className="
              text-emerald-600
            "
          />

        </div>


        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-3
          "
        >

          {/* Classe */}

          <div
            className="
              rounded-2xl
              bg-white
              border
              border-slate-200
              p-4
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-emerald-100
                text-emerald-700
                flex
                items-center
                justify-center
                mb-3
              "
            >
              <GraduationCap
                size={19}
              />
            </div>

            <p
              className="
                text-xs
                font-semibold
                text-slate-500
                mb-1
              "
            >
              Minha classe
            </p>

            <div
              className="
                flex
                items-center
                justify-between
                gap-2
              "
            >

              <span
                className="
                  text-lg
                  font-black
                  text-slate-900
                "
              >
                {profile.selectedClass}
              </span>

              <button
                onClick={
                  onChangeClass
                }
                className="
                  text-xs
                  font-bold
                  text-emerald-700
                  hover:text-emerald-800
                "
              >
                Mudar
              </button>

            </div>

            <p
              className="
                text-xs
                text-slate-500
                mt-1
              "
            >
              {totalTopicsInClass} temas
            </p>

          </div>


          {/* Progresso */}

          <div
            className="
              rounded-2xl
              bg-white
              border
              border-slate-200
              p-4
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                mb-3
              "
            >
              <TrendingUp
                size={19}
              />
            </div>

            <p
              className="
                text-xs
                font-semibold
                text-slate-500
                mb-1
              "
            >
              Progresso
            </p>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              <span
                className="
                  text-xl
                  font-black
                  text-emerald-700
                "
              >
                {progressPercent}%
              </span>

            </div>

            <div
              className="
                mt-2
                h-2
                w-full
                overflow-hidden
                rounded-full
                bg-slate-100
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-600
                  to-emerald-400
                  transition-all
                  duration-500
                "
                style={{
                  width:
                    `${progressPercent}%`,
                }}
              />

            </div>

            <p
              className="
                text-xs
                text-slate-500
                mt-2
              "
            >
              {completedInClass} conteúdos concluídos
            </p>

          </div>


          {/* Pontos */}

          <div
            className="
              rounded-2xl
              bg-white
              border
              border-slate-200
              p-4
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-amber-100
                text-amber-600
                flex
                items-center
                justify-center
                mb-3
              "
            >
              <Award
                size={19}
              />
            </div>

            <p
              className="
                text-xs
                font-semibold
                text-slate-500
                mb-1
              "
            >
              Pontos
            </p>

            <div
              className="
                flex
                items-baseline
                gap-1
              "
            >

              <span
                className="
                  text-xl
                  font-black
                  text-slate-900
                "
              >
                {profile.points}
              </span>

              <span
                className="
                  text-xs
                  font-semibold
                  text-slate-500
                "
              >
                pts
              </span>

            </div>

            <p
              className="
                text-xs
                text-slate-500
                mt-1
              "
            >
              Exercícios e testes
            </p>

          </div>


          {/* Sequência */}

          <div
            className="
              rounded-2xl
              bg-white
              border
              border-slate-200
              p-4
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-orange-100
                text-orange-600
                flex
                items-center
                justify-center
                mb-3
              "
            >
              <Flame
                size={19}
                className="
                  fill-orange-500
                "
              />
            </div>

            <p
              className="
                text-xs
                font-semibold
                text-slate-500
                mb-1
              "
            >
              Sequência
            </p>

            <div
              className="
                flex
                items-baseline
                gap-1
              "
            >

              <span
                className="
                  text-xl
                  font-black
                  text-slate-900
                "
              >
                {profile.studyStreakDays}
              </span>

              <span
                className="
                  text-xs
                  font-semibold
                  text-slate-500
                "
              >
                {streakText}
              </span>

            </div>

            <p
              className="
                text-xs
                text-slate-500
                mt-1
              "
            >
              Continue a estudar!
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          3. DISCIPLINAS
          ===================================================== */}

      <section>

        <div
          className="
            flex
            items-end
            justify-between
            gap-3
            mb-4
          "
        >

          <div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-emerald-700
                mb-1
              "
            >
              Aprendizagem
            </p>

            <h2
              className="
                text-xl
                sm:text-2xl
                font-black
                text-slate-900
              "
            >
              Escolha uma disciplina
            </h2>

          </div>

          <span
            className="
              hidden
              sm:inline-flex
              rounded-full
              bg-slate-100
              px-3
              py-1.5
              text-xs
              font-bold
              text-slate-600
            "
          >
            {profile.selectedClass}
          </span>

        </div>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >

          {/* =================================================
              BIOLOGIA
              ================================================= */}

          <button
            onClick={() =>
              onSelectSubjectTab(
                'Biologia'
              )
            }
            className="
              group
              text-left
              rounded-[26px]
              bg-white
              border
              border-emerald-200
              p-5
              sm:p-6
              shadow-sm
              hover:shadow-lg
              hover:border-emerald-400
              transition-all
              active:scale-[0.99]
            "
          >

            <div
              className="
                flex
                items-start
                justify-between
                gap-3
                mb-5
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-600
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-emerald-600/20
                  group-hover:scale-105
                  transition-transform
                "
              >
                <Dna
                  size={29}
                />
              </div>

              <span
                className="
                  rounded-full
                  bg-emerald-100
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-emerald-800
                "
              >
                {bioUnits.length} unidades
              </span>

            </div>


            <h3
              className="
                text-2xl
                font-black
                text-slate-900
                mb-2
                group-hover:text-emerald-800
                transition-colors
              "
            >
              Biologia
            </h3>


            <p
              className="
                text-sm
                sm:text-base
                leading-relaxed
                text-slate-600
                mb-5
              "
            >
              Explore os seres vivos,
              células, genética, ecologia,
              evolução e o funcionamento
              do corpo humano.
            </p>


            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-emerald-100
                pt-4
                text-sm
                font-bold
                text-emerald-700
              "
            >

              <span>
                Explorar Biologia
              </span>

              <span
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                <ChevronRight
                  size={18}
                />
              </span>

            </div>

          </button>



          {/* =================================================
              QUÍMICA
              ================================================= */}

          <button
            onClick={() =>
              onSelectSubjectTab(
                'Química'
              )
            }
            className="
              group
              text-left
              rounded-[26px]
              bg-white
              border
              border-sky-200
              p-5
              sm:p-6
              shadow-sm
              hover:shadow-lg
              hover:border-sky-400
              transition-all
              active:scale-[0.99]
            "
          >

            <div
              className="
                flex
                items-start
                justify-between
                gap-3
                mb-5
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-sky-600
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-sky-600/20
                  group-hover:scale-105
                  transition-transform
                "
              >
                <Atom
                  size={29}
                />
              </div>

              <span
                className="
                  rounded-full
                  bg-sky-100
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-sky-800
                "
              >
                {quiUnits.length} unidades
              </span>

            </div>


            <h3
              className="
                text-2xl
                font-black
                text-slate-900
                mb-2
                group-hover:text-sky-800
                transition-colors
              "
            >
              Química
            </h3>


            <p
              className="
                text-sm
                sm:text-base
                leading-relaxed
                text-slate-600
                mb-5
              "
            >
              Descubra a matéria,
              átomos, tabela periódica,
              ligações, reações químicas
              e soluções.
            </p>


            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-sky-100
                pt-4
                text-sm
                font-bold
                text-sky-700
              "
            >

              <span>
                Explorar Química
              </span>

              <span
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-sky-100
                  flex
                  items-center
                  justify-center
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                <ChevronRight
                  size={18}
                />
              </span>

            </div>

          </button>

        </div>

      </section>



      {/* =====================================================
          4. TUTOR DE IA
          ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[26px]
          bg-gradient-to-br
          from-slate-900
          via-emerald-950
          to-emerald-900
          text-white
          shadow-lg
        "
      >

        <div
          className="
            absolute
            -right-10
            -bottom-16
            w-48
            h-48
            rounded-full
            bg-emerald-400/10
            blur-3xl
            pointer-events-none
          "
        />


        <div
          className="
            relative
            z-10
            p-5
            sm:p-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-5
          "
        >

          <div
            className="
              flex
              items-start
              gap-4
            "
          >

            <div
              className="
                w-12
                h-12
                shrink-0
                rounded-2xl
                bg-emerald-400/15
                border
                border-emerald-300/20
                text-emerald-300
                flex
                items-center
                justify-center
              "
            >
              <Sparkles
                size={24}
              />
            </div>


            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-emerald-300
                  mb-1
                "
              >
                Apoio à aprendizagem
              </p>

              <h3
                className="
                  text-lg
                  sm:text-xl
                  font-black
                  mb-1
                "
              >
                Precisa de ajuda?
              </h3>

              <p
                className="
                  text-sm
                  text-emerald-50/80
                  leading-relaxed
                  max-w-xl
                "
              >
                Pergunte ao Tutor de IA TANmz
                e receba explicações simples,
                científicas e adequadas à sua
                classe.
              </p>

            </div>

          </div>


          <button
            onClick={
              onOpenTutor
            }
            className="
              w-full
              sm:w-auto
              shrink-0
              min-h-[48px]
              px-5
              py-3
              rounded-2xl
              bg-emerald-500
              hover:bg-emerald-400
              text-white
              font-bold
              text-sm
              shadow-md
              transition-all
              active:scale-[0.98]
            "
          >
            Perguntar ao Tutor
          </button>

        </div>

      </section>


    </div>
  );
};
