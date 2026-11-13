
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const NOUNS = [
  "web apps",
  "AI systems",
  "cloud platforms",
  "mobile products",
];

function useCycle(length, interval = 3200) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [length, interval]);

  return index;
}

const delay = (seconds) => ({
  animationDelay: `${seconds}s`,
});

const animation = {
  reveal:
    "[transform:translateY(110%)] animate-hv-up motion-reduce:animate-none motion-reduce:[transform:none]",

  underline:
    "relative after:absolute after:bottom-[0.02em] after:left-0 after:h-[0.05em] after:w-full after:origin-left after:bg-[#3b82f6] after:content-[''] after:[transform:scaleX(0)] after:animate-hv-bar motion-reduce:after:animate-none motion-reduce:after:[transform:none]",

  bar: "origin-[50%_100%] [transform-box:fill-box] [transform:scaleY(0)] group-data-[on=true]:animate-hv-grow",

  flow: "[stroke-dasharray:14_100] [stroke-dashoffset:114] group-data-[on=true]:animate-hv-flow",

  node: "origin-center [transform-box:fill-box] group-data-[on=true]:animate-hv-pulse",

  led: "group-data-[on=true]:animate-hv-blink",

  dot: "group-data-[on=true]:animate-hv-rise",

  row: "[transform:translateX(-30px)] opacity-0 group-data-[on=true]:animate-hv-slide",

  chip: "origin-center [transform-box:fill-box] group-data-[on=true]:animate-hv-pop",
};

function Scene({ on, children }) {
  return (
    <g
      data-on={on}
      className={`group transition-opacity duration-700 ${
        on ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </g>
  );
}

/* Scene 01: Web application dashboard */

const BARS = [
  [88, 150, 50, "#1e3a6e"],
  [116, 120, 80, "#1e3a6e"],
  [144, 140, 60, "#1e3a6e"],
  [172, 100, 100, "#3b82f6"],
  [200, 126, 74, "#1e3a6e"],
];

function WebScene({ on }) {
  return (
    <Scene on={on}>
      <rect
        x="24"
        y="36"
        width="212"
        height="180"
        rx="12"
        fill="#0d1322"
        stroke="#26304a"
      />

      {[40, 52, 64].map((cx) => (
        <circle key={cx} cx={cx} cy="50" r="3" fill="#2a3347" />
      ))}

      <line
        x1="24"
        y1="64"
        x2="236"
        y2="64"
        stroke="#26304a"
      />

      <rect
        x="34"
        y="74"
        width="38"
        height="132"
        rx="6"
        fill="#121a2e"
      />

      <rect
        x="84"
        y="74"
        width="140"
        height="16"
        rx="5"
        fill="#121a2e"
      />

      {BARS.map(([x, y, height, fill], index) => (
        <rect
          key={x}
          className={animation.bar}
          style={delay(index * 0.1)}
          x={x}
          y={y}
          width="20"
          height={height}
          rx="3"
          fill={fill}
        />
      ))}
    </Scene>
  );
}

/* Scene 02: AI neural network */

const X = [50, 110, 170, 222];

const LAYERS = [
  [80, 130, 180],
  [60, 105, 150, 195],
  [90, 130, 170],
  [130],
];

const FLOWS = [
  [0, 0, 1],
  [0, 2, 2],
  [1, 1, 0],
  [1, 3, 1],
  [2, 0, 0],
  [2, 2, 0],
];

function AiScene({ on }) {
  const connections = [];

  for (let layer = 0; layer < 3; layer++) {
    LAYERS[layer].forEach((startY) => {
      LAYERS[layer + 1].forEach((endY) => {
        connections.push(
          <line
            key={`${layer}-${startY}-${endY}`}
            x1={X[layer]}
            y1={startY}
            x2={X[layer + 1]}
            y2={endY}
            stroke="rgba(255,255,255,.1)"
          />
        );
      });
    });
  }

  return (
    <Scene on={on}>
      {connections}

      {FLOWS.map(([layer, start, end], index) => (
        <line
          key={index}
          className={animation.flow}
          style={delay(index * 0.3)}
          x1={X[layer]}
          y1={LAYERS[layer][start]}
          x2={X[layer + 1]}
          y2={LAYERS[layer + 1][end]}
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {LAYERS.flatMap((positions, layer) =>
        positions.map((y, index) => (
          <circle
            key={`${layer}-${index}`}
            className={animation.node}
            style={delay(((layer + index) % 6) * 0.15)}
            cx={X[layer]}
            cy={y}
            r="8"
            fill="#0d1322"
            stroke="#3b82f6"
            strokeWidth="1.5"
          />
        ))
      )}
    </Scene>
  );
}

/* Scene 03: Cloud infrastructure */

const RACKS = [122, 164, 206];

function CloudScene({ on }) {
  return (
    <Scene on={on}>
      <circle cx="104" cy="62" r="18" fill="#16213b" />
      <circle cx="130" cy="50" r="24" fill="#16213b" />
      <circle cx="158" cy="62" r="20" fill="#16213b" />

      <rect
        x="104"
        y="62"
        width="54"
        height="18"
        rx="9"
        fill="#16213b"
      />

      {[100, 130, 160].map((cx, index) => (
        <circle
          key={cx}
          className={animation.dot}
          style={delay(index * 0.5)}
          cx={cx}
          cy="112"
          r="3"
          fill={index === 1 ? "#7db0ff" : "#3b82f6"}
        />
      ))}

      {RACKS.map((y, index) => (
        <g key={y}>
          <rect
            x="44"
            y={y}
            width="172"
            height="34"
            rx="8"
            fill="#0d1322"
            stroke="#26304a"
          />

          <circle
            className={animation.led}
            style={delay(index * 0.4)}
            cx="62"
            cy={y + 17}
            r="4"
            fill="#4ade80"
          />

          <circle
            className={animation.led}
            style={delay(index * 0.4 + 0.2)}
            cx="76"
            cy={y + 17}
            r="4"
            fill="#3b82f6"
          />

          <rect
            x="140"
            y={y + 13}
            width={[60, 44, 52][index]}
            height="8"
            rx="4"
            fill="#1e3a6e"
          />
        </g>
      ))}
    </Scene>
  );
}

/* Scene 04: Mobile application */

const ROWS = [52, 90, 128, 166];

function MobileScene({ on }) {
  return (
    <Scene on={on}>
      <rect
        x="80"
        y="20"
        width="100"
        height="220"
        rx="18"
        fill="#0d1322"
        stroke="#2a3347"
        strokeWidth="2"
      />

      <rect
        x="118"
        y="29"
        width="24"
        height="5"
        rx="2.5"
        fill="#2a3347"
      />

      {ROWS.map((y, index) => (
        <g
          key={y}
          className={animation.row}
          style={delay(index * 0.12)}
        >
          <rect
            x="92"
            y={y}
            width="76"
            height="30"
            rx="7"
            fill="#121a2e"
            stroke={index === 1 ? "#3b82f6" : "none"}
          />

          <circle
            cx="106"
            cy={y + 15}
            r="7"
            fill={index === 1 ? "#3b82f6" : "#1e3a6e"}
          />

          <rect
            x="118"
            y={y + 8}
            width="40"
            height="5"
            rx="2"
            fill="#2a3a5c"
          />

          <rect
            x="118"
            y={y + 18}
            width="28"
            height="5"
            rx="2"
            fill="#2a3347"
          />
        </g>
      ))}

      <rect
        x="104"
        y="222"
        width="52"
        height="4"
        rx="2"
        fill="#2a3347"
      />

      <g className={animation.chip}>
        <rect
          x="18"
          y="38"
          width="92"
          height="26"
          rx="13"
          fill="#3b82f6"
        />

        <text
          x="64"
          y="55"
          textAnchor="middle"
          fontSize="11"
          fill="#fff"
          fontFamily="sans-serif"
        >
          New order
        </text>
      </g>
    </Scene>
  );
}

/* Animated illustration */

function HeroVisual({ active }) {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[65px]" />

      <svg
        viewBox="0 0 260 260"
        className="relative block h-auto w-full"
        role="img"
        aria-label={`Illustration of ${NOUNS[active]}`}
      >
        <WebScene on={active === 0} />
        <AiScene on={active === 1} />
        <CloudScene on={active === 2} />
        <MobileScene on={active === 3} />
      </svg>

      <div className="mt-1 flex justify-center gap-2" aria-hidden="true">
        {NOUNS.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === active
                ? "w-6 bg-[#3b82f6]"
                : "w-1.5 bg-[#2a3347]"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#68758c]">
          Digital systems / 0{active + 1}
        </span>

        <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#8f99ad]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          Live concept
        </span>
      </div>
    </div>
  );
}

/* Home page */

export default function Home() {
  const active = useCycle(NOUNS.length);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a14] text-[#eef1f7]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section
        id="home"
        className="relative flex min-h-[calc(100svh-96px)] flex-col justify-between gap-8 pb-8 pt-20 sm:pb-14 sm:pt-28"
      >
        <div className="mx-auto grid w-[min(1080px,90vw)] flex-1 items-center gap-8 py-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-10 md:py-12 lg:gap-14">
          {/* Animated visual */}
          <div className="order-2 md:order-1">
            <HeroVisual active={active} />
          </div>

          {/* Main content */}
          <div className="order-1 md:order-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#3b82f6]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8f99ad]">
                Ventrix Technologies · Hyderabad, India
              </p>
            </div>

            <h1
              className="mb-5 text-[clamp(38px,5vw,68px)] font-semibold leading-[1.1] tracking-[-0.055em]"
              aria-label={`We build ${NOUNS[active]}`}
            >
              <span className="block overflow-hidden pb-[0.2em]">
                <span
                  className={`block ${animation.reveal}`}
                  style={delay(0.05)}
                >
                  We build
                </span>
              </span>

              <span
                className="block overflow-hidden pb-[0.2em]"
                aria-hidden="true"
              >
                <span
                  key={active}
                  className={`inline-block ${animation.reveal} ${animation.underline}`}
                  style={delay(0.05)}
                >
                  {NOUNS[active]}.
                </span>
              </span>
            </h1>

            <p className="mb-7 max-w-[440px] text-sm leading-7 text-[#8f99ad] sm:text-base">
              We partner with ambitious startups and growing businesses
              to transform ideas into impactful digital products. From
              web and mobile applications to AI-powered solutions, we
              bring design, engineering and innovation together to build
              technology that makes a difference.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3b82f6] px-6 py-3 text-xs font-medium text-white shadow-[0_8px_25px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#2f74ea] hover:shadow-[0_12px_30px_rgba(59,130,246,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:text-sm"
              >
                Start a project

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-xs text-[#d1d5df] transition hover:border-blue-400 hover:text-blue-400 sm:text-sm"
              >
                Explore services

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="relative mx-auto mt-0 w-[min(1080px,90vw)] border-t border-white/10 pt-4 sm:pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#7185a5]">
              Our approach
            </p>

            <p className="text-xl font-semibold tracking-tight text-[#eef1f7] sm:text-2xl">
              Ideas. Engineering.{" "}
              <span className="text-[#3b82f6]">Impact.</span>
            </p>

            <p className="text-xs leading-5 text-[#8f99ad] sm:max-w-[280px] sm:text-right">
              Turning ambitious ideas into meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mx-auto mt-1 w-[min(1080px,90vw)] border-t border-white/10" />
      </section>
    </main>
  );
}
