"use client";

import { useEffect, useRef, useState } from "react";

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
    const destinies = [
      "Intentaste explicar el WiFi. Te acusaron de brujería.",
      "Corregiste al obispo en público. Grave error.",
      "Sabías demasiado para una época que prefería no preguntar.",
    ];

    const destiny =
      destinies[Math.floor(Math.random() * destinies.length)];

    return {
      profession: "📜 Escriba Real",
      survivalTime: "2 años y 4 meses",
      survivalDays: 852,
      destiny,
    };
  }

  if (knowledge >= 5 && adaptation >= 4) {
    const destinies = [
      "La tercera explosión fue la que finalmente causó problemas.",
      "Intentaste crear oro. Creaste una emergencia.",
      "La frase '¿qué podría salir mal?' fue tu último error.",
    ];

    const destiny =
      destinies[Math.floor(Math.random() * destinies.length)];

    return {
      profession: "⚗️ Alquimista",
      survivalTime: "1 año y 8 meses",
      survivalDays: 608,
      destiny,
    };
  }

  if (survival >= 7) {
    const destinies = [
      "Te cayó un yunque encima durante una siesta perfectamente calculada.",
      "Probaste si la espada estaba afilada. Lo estaba.",
      "Descubriste que los caballos también pueden ganar discusiones.",
    ];

    const destiny =
      destinies[Math.floor(Math.random() * destinies.length)];

    return {
      profession: "⚒️ Herrero",
      survivalTime: "11 años",
      survivalDays: 4015,
      destiny,
    };
  }

  if (adaptation >= 5) {
    const destinies = [
      "Escuchaste demasiados secretos y repetiste uno por accidente.",
      "Aceptaste una apuesta claramente peligrosa.",
      "Sabías demasiado sobre demasiadas personas.",
    ];

    const destiny =
      destinies[Math.floor(Math.random() * destinies.length)];

    return {
      profession: "🍺 Tabernero",
      survivalTime: "8 años",
      survivalDays: 2920,
      destiny,
    };
  }

  if (
    knowledge >= 3 &&
    survival >= 3 &&
    adaptation >= 3
  ) {
    const destinies = [
      "Viviste tanto que empezaron a sospechar que eras inmortal.",
      "Falleciste en paz rodeado de manuscritos sin terminar.",
      "Pasaste décadas copiando libros y evitando problemas.",
    ];

    const destiny =
      destinies[Math.floor(Math.random() * destinies.length)];

    return {
      profession: "🙏 Monje",
      survivalTime: "14 años",
      survivalDays: 5110,
      destiny,
    };
  }

  const destinies = [
    "Sobreviviste a la peste. Eso resultó ser la parte fácil.",
    "Una cabra decidió cambiar tu destino.",
    "Subestimaste a un ganso con demasiado tiempo libre.",
  ];

  const destiny =
    destinies[Math.floor(Math.random() * destinies.length)];

  return {
    profession: "🌾 Campesino",
    survivalTime: "6 meses",
    survivalDays: 180,
    destiny,
  };
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [analysisText, setAnalysisText] = useState(
    "Analizando tu destino..."
  );

  const [stats, setStats] = useState<Stats>({
    knowledge: 0,
    survival: 0,
    adaptation: 0,
  });

  const [result, setResult] = useState<ResultData | null>(null);
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
      const finalResult = getResult(stats);

      setResult(finalResult);
      setPercentile(null);
      setScreen("result");
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [screen, stats]);

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

const handleShare = async () => {
  if (!shareCardRef.current || !result) return;

  try {
    const { toPng } = await import("html-to-image");

    const node = shareCardRef.current;

    const dataUrl = await toPng(node, {
      pixelRatio: 2,
      backgroundColor: "#0d0d0d",
      style: {
        margin: "0",
        transform: "none",
      },
    });

    const response = await fetch(dataUrl);
    const blob = await response.blob();

    const file = new File(
      [blob],
      "cuanto-durarias-en-la-edad-media.png",
      {
        type: "image/png",
      }
    );

    const shareText =
      `🏰 Yo duré ${result.survivalTime} como ${result.profession}.\n\n` +
      `¿Cuánto durarías vos?\n` +
      `${window.location.href}`;

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {
      await navigator.share({
        files: [file],
        text: shareText,
        title: "¿Cuánto durarías en la Edad Media?",
      });

      return;
    }

    const link = document.createElement("a");
    link.download = "cuanto-durarias-en-la-edad-media.png";
    link.href = dataUrl;
    link.click();

    const whatsappUrl =
      `https://wa.me/?text=${encodeURIComponent(shareText)}`;

    window.open(whatsappUrl, "_blank");

  } catch (error) {
    console.error("Error al compartir:", error);
  }
};

  const restart = () => {
    setStats({
      knowledge: 0,
      survival: 0,
      adaptation: 0,
    });

    setCurrentQuestion(0);
    setResult(null);
    setPercentile(null);
    setScreen("home");
  };

  useEffect(() => {
    if (screen !== "result" || !result) return;

    let cancelled = false;

    fetch("/api/resultado", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profession: result.profession,
        survivalDays: result.survivalDays,
      }),
    })
      .then(
        (res) =>
          res.json() as Promise<{ percentile: number }>
      )
      .then((data) => {
        if (!cancelled) {
          setPercentile(data.percentile);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [screen, result]);

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

  if (!result) {
    return null;
  }

  return (
    <main className="container">
      <div className="card">
        <div className="shareCard" ref={shareCardRef}>
  <p className="shareCard-eyebrow">
    🏰 ¿Cuánto durarías en la Edad Media?
  </p>

  <div className="shareCard-section">
    <span className="shareCard-label">PROFESIÓN</span>

    <p className="shareCard-profession">
      {result.profession}
    </p>
  </div>

  <div className="shareCard-section">
    <span className="shareCard-label">⏳ SOBREVIVISTE</span>

    <p className="shareCard-time">
      {result.survivalTime}
    </p>
  </div>

  <div className="shareCard-section shareCard-destiny">
    <span className="shareCard-label">⚰️ DESENLACE</span>

    <p className="shareCard-achievement">
      {result.destiny}
    </p>
  </div>

  {percentile !== null && (
    <p className="shareCard-percentile">
      📈 Durarías más que el {Math.max(1, percentile)}% del reino
    </p>
  )}

  <p className="shareCard-footer">
    <strong>Nerdearla 2026</strong> · Probalo vos también
  </p>
</div>
        <p className="shareHint">
          📸 Capturá esta tarjeta y compartila
        </p>

        <div className="buttonRow">
          <button
  className="shareButton"
  onClick={handleShare}
>
  📤 Compartir
</button>

          <button
            className="restartButton"
            onClick={restart}
          >
            🔄 Intentar nuevamente
          </button>
        </div>
      </div>
    </main>
  );
}