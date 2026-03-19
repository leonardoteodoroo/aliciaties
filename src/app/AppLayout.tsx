import { Outlet } from "react-router-dom";
import { SectionScrollManager } from "./SectionScrollManager";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideNav, hideFooter }: AppLayoutProps) {
  return (
    <div className="min-h-screen">
      <SectionScrollManager />
      {!hideNav && <SiteHeader />}
      <main>{children || <Outlet />}</main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
}
