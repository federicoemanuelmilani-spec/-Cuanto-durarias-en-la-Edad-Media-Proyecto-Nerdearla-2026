"use client";

import { useEffect, useState } from "react";

type Screen = "home" | "question" | "analysis" | "result";

type Stats = {
  knowledge: number;
  survival: number;
  adaptation: number;
};

type Answer = {
  text: string;
  stats: Stats;
};

type Question = {
  question: string;
  answers: Answer[];
};

type ResultData = {
  profession: string;
  survivalTime: string;
  survivalDays: number;
  achievement: string;
  description: string;
  destiny: string;
};

const questions: Question[] = [
  {
    question: "¿Qué tomás más seguido?",
    answers: [
      {
        text: "Agua",
        stats: { knowledge: 0, survival: 2, adaptation: 0 },
      },
      {
        text: "Café",
        stats: { knowledge: 1, survival: 1, adaptation: 0 },
      },
      {
        text: "Mate",
        stats: { knowledge: 0, survival: 1, adaptation: 2 },
      },
      {
        text: "Gaseosa",
        stats: { knowledge: 0, survival: 0, adaptation: 1 },
      },
      {
        text: "Energizante",
        stats: { knowledge: 0, survival: -1, adaptation: 2 },
      },
    ],
  },

  {
    question: "Te despertás con fiebre. ¿Qué hacés?",
    answers: [
      {
        text: "Voy al médico",
        stats: { knowledge: 1, survival: 2, adaptation: 0 },
      },
      {
        text: "Busco en Google",
        stats: { knowledge: 2, survival: 0, adaptation: 1 },
      },
      {
        text: "Espero que pase",
        stats: { knowledge: 0, survival: -1, adaptation: 1 },
      },
      {
        text: "Tomo algo y sigo",
        stats: { knowledge: 0, survival: -2, adaptation: 2 },
      },
    ],
  },

  {
    question: "¿Qué habilidad tenés?",
    answers: [
      {
        text: "Cocinar",
        stats: { knowledge: 0, survival: 1, adaptation: 2 },
      },
      {
        text: "Reparar cosas",
        stats: { knowledge: 0, survival: 3, adaptation: 0 },
      },
      {
        text: "Programar",
        stats: { knowledge: 3, survival: 0, adaptation: 0 },
      },
      {
        text: "Cultivar plantas",
        stats: { knowledge: 1, survival: 2, adaptation: 0 },
      },
      {
        text: "Ninguna",
        stats: { knowledge: 0, survival: 0, adaptation: 0 },
      },
    ],
  },

  {
    question: "¿Cuánto sobrevivís sin internet?",
    answers: [
      {
        text: "Una hora",
        stats: { knowledge: 0, survival: 0, adaptation: -1 },
      },
      {
        text: "Un día",
        stats: { knowledge: 0, survival: 0, adaptation: 0 },
      },
      {
        text: "Una semana",
        stats: { knowledge: 0, survival: 1, adaptation: 1 },
      },
      {
        text: "No me importa",
        stats: { knowledge: 0, survival: 2, adaptation: 2 },
      },
    ],
  },

  {
    question: "Te acusan de brujería. ¿Qué hacés?",
    answers: [
      {
        text: "Escapo",
        stats: { knowledge: 0, survival: 3, adaptation: 1 },
      },
      {
        text: "Me defiendo",
        stats: { knowledge: 1, survival: 2, adaptation: 0 },
      },
      {
        text: "Intento explicar la ciencia",
        stats: { knowledge: 3, survival: -2, adaptation: 0 },
      },
      {
        text: "Rezo",
        stats: { knowledge: 0, survival: 1, adaptation: 1 },
      },
      {
        text: "Acepto mi destino",
        stats: { knowledge: 0, survival: -2, adaptation: 0 },
      },
    ],
  },
];

function getResult(stats: Stats): ResultData {
  const { knowledge, survival, adaptation } = stats;

  if (knowledge >= 6 && survival <= 3) {
    return {
      profession: "📜 Escriba Real",
      survivalTime: "2 años y 4 meses",
      survivalDays: 852,
      achievement: "Sospechoso profesional de brujería",
      description:
        "Tus conocimientos te volvieron valioso para la nobleza. El problema apareció cuando intentaste explicar conceptos demasiado avanzados para la época.",
      destiny:
        "Tus conocimientos te consiguieron trabajo en la corte.\n\nEl problema comenzó cuando intentaste explicar cómo funcionaría Internet.",
    };
  }

  if (knowledge >= 5 && adaptation >= 4) {
    return {
      profession: "⚗️ Alquimista",
      survivalTime: "1 año y 8 meses",
      survivalDays: 608,
      achievement: "Mezcló tres cosas y preocupó al reino",
      description:
        "Tu curiosidad llamó la atención de todos. Algunos te consideraban un genio. Otros, una amenaza.",
      destiny:
        "Tus experimentos impresionaron a varios nobles.\n\nEl incidente con la sopa explosiva no ayudó a tu reputación.",
    };
  }

  if (survival >= 7) {
    return {
      profession: "⚒️ Herrero",
      survivalTime: "11 años",
      survivalDays: 4015,
      achievement: "Más difícil de romper que sus herramientas",
      description:
        "Tu capacidad para resolver problemas prácticos te permitió sobrevivir donde otros no pudieron.",
      destiny:
        "Tu habilidad para arreglar cosas te volvió indispensable.\n\nNadie recordaba tu nombre, pero todos conocían tu taller.",
    };
  }

  if (adaptation >= 5) {
    return {
      profession: "🍺 Tabernero",
      survivalTime: "8 años",
      survivalDays: 2920,
      achievement: "Conocía todos los secretos del reino",
      description:
        "Siempre supiste cómo adaptarte a las circunstancias y sacar ventaja de cualquier situación.",
      destiny:
        "Escuchaste todos los secretos del reino.\n\nProbablemente sabías demasiado para tu propio bien.",
    };
  }

  if (
    knowledge >= 3 &&
    survival >= 3 &&
    adaptation >= 3
  ) {
    return {
      profession: "🙏 Monje",
      survivalTime: "14 años",
      survivalDays: 5110,
      achievement: "Copió manuscritos durante décadas",
      description:
        "Llevaste una vida tranquila, disciplinada y bastante más larga que el promedio medieval.",
      destiny:
        "Encontraste una vida tranquila entre libros y manuscritos.\n\nSorprendentemente, fue una de las decisiones más seguras de la época.",
    };
  }

return {
  profession: "🌾 Campesino",
  survivalTime: "6 meses",
  survivalDays: 180,
  achievement: "Mala suerte estadísticamente improbable",
  description:
    "No hiciste nada especialmente mal. Tampoco especialmente bien. La Edad Media simplemente no colaboró.",
  destiny:
    "Trabajaste duro y evitaste llamar la atención.\n\nLa Edad Media encontró igualmente la forma de complicarte la existencia.",
  };
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [analysisText, setAnalysisText] = useState(
    "Analizando tu destino..."
  );

  const [stats, setStats] = useState<Stats>({
    knowledge: 0,
    survival: 0,
    adaptation: 0,
  });
  const [percentile, setPercentile] = useState<number | null>(null);
  
  useEffect(() => {
    if (screen !== "analysis") return;

    const messages = [
      "Analizando tu destino...",
      "Consultando a los sabios del reino...",
      "Sobornando al verdugo...",
      "Calculando riesgo de peste...",
    ];

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setAnalysisText(messages[index]);
    }, 900);

    const timeout = setTimeout(() => {
      setScreen("result");
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [screen]);

  const answerQuestion = (answer: Answer) => {
    setStats((prev) => ({
      knowledge: prev.knowledge + answer.stats.knowledge,
      survival: prev.survival + answer.stats.survival,
      adaptation: prev.adaptation + answer.stats.adaptation,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    setScreen("analysis");
  };

  const restart = () => {
    setStats({
      knowledge: 0,
      survival: 0,
      adaptation: 0,
    });

    setCurrentQuestion(0);
    setScreen("home");
  };

  const result = getResult(stats);
  useEffect(() => {
  if (screen !== "result") return;

  let cancelled = false;

  fetch("/api/resultado", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      profession: result.profession,
      survivalDays: result.survivalDays,
    }),
  })
    .then((res) => res.json() as Promise<{ percentile: number }>)
    .then((data) => {
      if (!cancelled) setPercentile(data.percentile);
    })
    .catch(() => {});

  return () => {
    cancelled = true;
  };
}, [screen]);

const knowledgeDisplay = Math.min(10, Math.max(0, stats.knowledge));
const survivalDisplay = Math.min(10, Math.max(0, stats.survival));
const adaptationDisplay = Math.min(10, Math.max(0, stats.adaptation));

  if (screen === "home") {
    return (
      <main className="container">
        <div className="card">
          <h1>🏰 ¿Cuánto durarías en la Edad Media?</h1>

          <p className="subtitle">
            Descubrí cuánto sobrevivirías si despertaras en la Edad Media.
          </p>

          <p className="description">
            ¿Serías un noble respetado, un humilde campesino o una víctima temprana de la peste?
          </p>

          <button onClick={() => setScreen("question")}>
            ⚔️ Comenzar la prueba
          </button>
        </div>
      </main>
    );
  }

  if (screen === "question") {
    const question = questions[currentQuestion];

    return (
      <main className="container">
        <div className="card">
          <div className="progress">
            Pregunta {currentQuestion + 1} de {questions.length}
          </div>

          <h2>{question.question}</h2>

          <div className="answers">
            {question.answers.map((answer) => (
              <button
                key={answer.text}
                className="answerButton"
                onClick={() => answerQuestion(answer)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (screen === "analysis") {
    return (
      <main className="container">
        <div className="card">
          <h2>🔮 Consultando al consejo del reino...</h2>
          <p className="analysisText">{analysisText}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card">
        <p className="resultLabel">
          ⚔️ El consejo del reino ha decidido
        </p>

        <h1>{result.profession}</h1>

        <h2>Sobreviviste {result.survivalTime}</h2>

        <p className="description">
          {result.description}
        </p>

<div className="destiny">
  <span>📜 Destino</span>

  <p>{result.destiny}</p>
</div>
<div className="shareCard">
  <p className="shareCard-eyebrow">🏰 ¿Cuánto durarías en la Edad Media?</p>
  <p className="shareCard-profession">{result.profession}</p>
  <p className="shareCard-time">⏳ {result.survivalTime}</p>
  <p className="shareCard-achievement">🏆 {result.achievement}</p>
  {percentile !== null && (
  <p className="shareCard-percentile">
    📈 Durarías más que el {Math.max(1, percentile)}% del reino
  </p>
)}
  <p className="shareCard-footer">Nerdearla 2026 · Probalo vos también</p>
</div>

<p className="shareHint">📸 Capturá esta tarjeta y compartila</p>

<button className="restartButton" onClick={restart}>
          🔄 Intentar nuevamente
        </button>
      </div>
    </main>
  );
}