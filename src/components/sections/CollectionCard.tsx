import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { CollectionCard as CollectionCardType } from "../../types/site";

interface CollectionCardProps {
  item: CollectionCardType;
}

export function CollectionCard({ item }: CollectionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const commonClassName =
    "group relative block overflow-hidden rounded-[calc(var(--radius)*2.5)] bg-[var(--color-surface)] min-h-[460px] shadow-[0_24px_80px_rgba(74,64,54,0.12)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(74,64,54,0.18)] cursor-default";

  const renderInnerContent = () => (
    <>
      {/* Imagem de Fundo com zoom suave no hover */}
      <img
        alt={item.imageAlt}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
          isExpanded ? "scale-110 blur-[2px]" : "group-hover:scale-105"
        }`}
        loading="lazy"
        src={item.image}
      />

      {/* Camada de Gradiente Base */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? "bg-black/60" : "bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"}`}
      />

      {/* Conteúdo Principal (Título e Botão Inicial) */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end p-8 transition-all duration-500 ${isExpanded ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}
      >
        <h3 className="font-[var(--font-heading)] text-3xl italic text-white md:text-4xl leading-tight">
          {item.title}
        </h3>
        <button
          onClick={toggleExpand}
          className="mt-6 flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black border border-white/20"
        >
          {item.ctaLabel || "Ver detalhes"}
          <Plus className="size-3.5" />
        </button>
      </div>

      {/* Camada Detalhada (Revelada no Clique) */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-in-out ${isExpanded ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-8 invisible"}`}
      >
        <h3 className="font-[var(--font-heading)] text-2xl italic text-white mb-4">
          {item.title}
        </h3>
        <p className="max-w-[28ch] text-sm leading-relaxed text-white/90 md:text-base mb-8">
          {item.description}
        </p>

        <div className="flex flex-col gap-3 w-full max-w-[200px]">
          {item.ctaMode === "route" ? (
            <Link
              to={item.href}
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Clique para acessar
              <ArrowUpRight className="size-4" />
            </Link>
          ) : (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Clique para acessar
              <ArrowUpRight className="size-4" />
            </a>
          )}

          <button
            onClick={toggleExpand}
            className="text-[10px] uppercase tracking-[0.1em] text-white/60 hover:text-white transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    </>
  );

  return <div className={commonClassName}>{renderInnerContent()}</div>;
}
