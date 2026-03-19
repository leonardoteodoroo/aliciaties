import { Link } from "react-router-dom";
import { scrollToHomeSection } from "../../lib/homeSections";
import type { HomeHeroContent } from "../../types/site";
import { WhatsappButton } from "../ui/WhatsappButton";
import heroMainImg from "../../assets/images/hero-main.webp";

interface HomeEditorialHeroProps {
  content: HomeHeroContent;
  primaryMessage?: string;
}

export function HomeEditorialHero({
  content,
  primaryMessage,
}: HomeEditorialHeroProps) {
  // Agrupa os segmentos do título por linhas (row) para renderização controlada
  const titleRows: Record<number, typeof content.titleSegments> = {};
  content.titleSegments.forEach((segment) => {
    const r = segment.row || 1;
    if (!titleRows[r]) titleRows[r] = [];
    titleRows[r].push(segment);
  });

  // Gera a marcação do título, tratando separadamente palavras enfatizadas (itálico/cor)
  const titleMarkup = Object.entries(titleRows).map(([row, segments]) => (
    <span key={row} className={`hero-title-row hero-title-row-${row}`}>
      {segments.map((segment, index) => {
        if (segment.emphasized) {
          return (
            <em
              key={`${segment.text}-${index}`}
              className={`hero-title-emphasis ${
                segment.tone === "warm" ? "hero-title-emphasis-warm" : ""
              }`}
            >
              {segment.text}
            </em>
          );
        }

        return <span key={`${segment.text}-${index}`}>{segment.text}</span>;
      })}
    </span>
  ));

  return (
    <section
      className="hero-surface-warm relative isolate overflow-hidden"
      data-home-hero="true"
      data-testid="hero-section"
    >
      <div className="hero-split-shell relative grid grid-cols-1 lg:grid-cols-2">
        {/* 
            👇👇 TEXTO SUBINDO NA FOTO NO MOBILE 👇👇
            Sabe esse '-mt-[82%]'? É o que faz o texto 'subir' na imagem. 
            Aumente o número pra subir mais, diminua pra descer.
        */}
        <div
          className="hero-copy-panel hero-copy-panel-mobile-ivory-fade-halo order-2 lg:order-1 relative z-20 -mt-[82%] lg:mt-0"
          data-testid="hero-copy-panel"
        >
          <div className="hero-copy-inner hero-copy-inner-mobile-ivory-fade-halo">
            <h1
              aria-label={content.titleSegments
                .map((segment) => segment.text)
                .join("")}
              className="home-hero-title home-hero-title-mobile-ivory-fade-halo lg:max-w-[20ch]"
            >
              {titleMarkup}
            </h1>
            <p className="hero-copy mt-7 max-w-[80ch] mx-auto text-center">
              {content.description}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsappButton
                className="w-full justify-center sm:w-auto"
                message={primaryMessage}
              >
                {content.primaryCta}
              </WhatsappButton>
              <Link
                className="btn-secondary w-full justify-center sm:w-auto"
                to="/colecoes"
              >
                {content.secondaryCta}
              </Link>
            </div>
            <div
              aria-label="Selos do atelier"
              className="hero-feature-strip hero-feature-strip-three-up mt-10"
              data-testid="hero-feature-strip"
              role="list"
            >
              {content.featureCards.map((card) => (
                <article
                  key={card.label}
                  className="hero-feature-card"
                  data-testid="hero-feature-card"
                  role="listitem"
                >
                  <p className="hero-feature-label">{card.label}</p>
                  <p className="hero-feature-value">{card.value}</p>
                </article>
              ))}
            </div>
            <button
              className="hero-scroll-cue mt-10 hidden lg:inline-flex"
              onClick={() => scrollToHomeSection("colecoes")}
              type="button"
            >
              <span aria-hidden="true" className="hero-scroll-line" />
              <span>{content.scrollCueLabel}</span>
            </button>
          </div>
        </div>

        {/* Painel de Mídia / Azul (Direito) */}
        <div
          className="hero-media-panel order-1 lg:order-2 bg-[var(--color-surface)] relative flex items-center justify-center overflow-hidden aspect-[9/16] lg:aspect-auto"
          data-testid="hero-media-panel"
        >
          {/* Imagem de Fundo (Convertida para WebP) */}
          <img
            src={heroMainImg}
            alt="Editorial Hero"
            className="absolute inset-0 h-full w-full object-cover object-top filter sepia-[0.08] contrast-[0.95]"
          />

          {/* 
              Overlay de gradiente: Responsável por suavizar a transição entre a imagem e o texto no mobile.
              A lógica de cores e intensidade está no src/styles/index.css sob a classe .hero-media-mobile-overlay
          */}
          <div className="hero-media-mobile-overlay" />

          {/* Régua de medição (Oculta para look editorial final, pode ser reativada mudando hidden para block) */}
          <div className="absolute inset-y-0 h-full hidden flex-col justify-between items-center pointer-events-none z-10">
            {Array.from({ length: 51 }).map((_, i) => {
              const value = 100 - i * 2;
              const isMajor = value % 10 === 0;
              const isMid = value % 5 === 0 && !isMajor;

              return (
                <div key={i} className="flex items-center w-48 justify-center">
                  <div className="flex-1 flex justify-end items-center gap-4">
                    {isMajor && (
                      <span className="w-8 text-right font-mono text-[13px] font-bold tracking-tighter text-[rgba(74,64,54,0.28)]">
                        {value}
                      </span>
                    )}
                    <div
                      className={`h-[1.5px] rounded-full bg-[rgba(74,64,54,0.24)] transition-opacity duration-500 ${
                        isMajor
                          ? "w-10 opacity-90"
                          : isMid
                            ? "w-6 opacity-60"
                            : "w-3 opacity-30"
                      }`}
                    />
                  </div>
                  <div className="mx-1 h-full w-[1px] bg-[rgba(74,64,54,0.08)]" />
                  <div className="flex-1 flex justify-start items-center gap-4">
                    <div
                      className={`h-[1.5px] rounded-full bg-[rgba(74,64,54,0.24)] transition-opacity duration-500 ${
                        isMajor
                          ? "w-10 opacity-90"
                          : isMid
                            ? "w-6 opacity-60"
                            : "w-3 opacity-30"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
