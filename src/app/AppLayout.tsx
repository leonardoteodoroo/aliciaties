import { Outlet } from "react-router-dom";
import { SectionScrollManager } from "./SectionScrollManager";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <SectionScrollManager />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
