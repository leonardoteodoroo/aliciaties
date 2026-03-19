import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, siteConfig } from "../../config/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { NavAction } from "./NavAction";

interface MobileNavDrawerProps {
  onClose: () => void;
  open: boolean;
}

export function MobileNavDrawer({ onClose, open }: MobileNavDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        aria-label="Fechar menu"
        className="absolute inset-0 bg-[rgba(74,64,54,0.22)]"
        onClick={onClose}
        type="button"
      />
      <div
        aria-label="Menu principal"
        className="absolute right-0 top-0 flex h-full w-[88vw] max-w-[360px] flex-col bg-[rgba(253,251,247,0.96)] px-6 pb-8 pt-6 backdrop-blur-xl"
        role="dialog"
      >
        <div className="flex items-center justify-between">
          <Link className="brand-mark" onClick={onClose} to="/">
            Alicia&apos;s Ties
          </Link>
          <button
            aria-label="Fechar menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[rgba(187,175,165,0.34)]"
            onClick={onClose}
            type="button"
          >
            <X className="size-4" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-3">
          {navItems.map((item) => (
            <NavAction
              key={item.label}
              className={({ isActive }) =>
                `rounded-[var(--radius)] px-4 py-3 text-sm uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                    : "text-[var(--color-text)] hover:bg-[rgba(212,175,55,0.08)]"
                }`
              }
              item={item}
              onNavigate={onClose}
            />
          ))}
        </nav>
        <a
          className="btn-primary mt-auto"
          href={buildWhatsAppUrl({
            phone: siteConfig.whatsapp.phone,
            message: siteConfig.whatsapp.defaultMessage,
          })}
          rel="noreferrer"
          target="_blank"
        >
          Pedir orientação
        </a>
      </div>
    </div>
  );
}
