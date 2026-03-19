import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(187,175,165,0.18)] bg-[rgba(249,242,240,0.6)]">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:py-16">
        <div className="space-y-5">
          <p className="brand-mark text-xl">Alicia&apos;s Ties</p>
          <p className="max-w-md text-sm leading-7 text-[rgba(74,64,54,0.78)] md:text-base">
            Acessórios artesanais para bebês e noivas, feitos com delicadeza,
            curadoria visual e atendimento próximo.
          </p>
        </div>
        <div className="space-y-3 text-sm uppercase tracking-[0.14em]">
          <a
            className="footer-link inline-flex items-center gap-2"
            href={siteConfig.instagramUrl}
            rel="noreferrer"
            target="_blank"
          >
            Instagram
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          <Link className="footer-link block" to="/termos">
            Termos
          </Link>
          <Link className="footer-link block" to="/privacidade">
            Privacidade
          </Link>
        </div>
        <div className="space-y-4 text-sm leading-7 text-[rgba(74,64,54,0.72)]">
          <p>
            Atendimento consultivo pelo WhatsApp para escolher, ajustar ou criar
            a peça certa para a ocasião.
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            © 2026 Alicia&apos;s Ties
          </p>
        </div>
      </div>
    </footer>
  );
}
