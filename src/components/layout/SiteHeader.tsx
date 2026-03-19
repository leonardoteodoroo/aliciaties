import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems, siteConfig } from "../../config/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { NavAction } from "./NavAction";

function shouldShowHeaderMenu(isHome: boolean) {
  if (!isHome || typeof window === "undefined") {
    return true;
  }

  const hero = document.querySelector<HTMLElement>('[data-home-hero="true"]');
  const threshold = hero
    ? Math.max(hero.offsetHeight - 80, 320)
    : Math.max(window.innerHeight, 480);

  return window.scrollY > threshold;
}

export function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeaderMenu, setShowHeaderMenu] = useState(() =>
    shouldShowHeaderMenu(isHome),
  );

  useEffect(() => {
    const syncHeaderState = () => {
      setShowHeaderMenu(shouldShowHeaderMenu(isHome));
    };

    syncHeaderState();

    if (!isHome) {
      return;
    }

    window.addEventListener("scroll", syncHeaderState, { passive: true });
    window.addEventListener("resize", syncHeaderState);

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      window.removeEventListener("resize", syncHeaderState);
    };
  }, [isHome]);

  if (isHome && !showHeaderMenu) {
    return (
      <>
        <header
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-40"
        />
        <MobileNavDrawer
          onClose={() => setMobileOpen(false)}
          open={mobileOpen}
        />
      </>
    );
  }

  return (
    <>
      <header
        className={`z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          isHome
            ? "fixed inset-x-0 top-0 border-b border-[rgba(187,175,165,0.18)] bg-[rgba(253,251,247,0.82)] backdrop-blur-xl"
            : "sticky top-0 border-b border-[rgba(187,175,165,0.18)] bg-[rgba(253,251,247,0.82)] backdrop-blur-xl"
        }`}
      >
        <div className="page-shell flex h-20 items-center justify-between gap-6">
          <Link className="brand-mark" to="/">
            Alicia&apos;s Ties
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavAction
                key={item.label}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
                item={item}
              />
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="btn-primary hidden md:inline-flex"
              href={buildWhatsAppUrl({
                phone: siteConfig.whatsapp.phone,
                message: siteConfig.whatsapp.defaultMessage,
              })}
              rel="noreferrer"
              target="_blank"
            >
              Pedir orientação
            </a>
            <button
              aria-expanded={mobileOpen}
              aria-label="Abrir menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-[rgba(187,175,165,0.34)] md:hidden"
              onClick={() => setMobileOpen(true)}
              type="button"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>
      <MobileNavDrawer onClose={() => setMobileOpen(false)} open={mobileOpen} />
    </>
  );
}
