import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { AtelierPage } from "../pages/AtelierPage";
import { CollectionPetitPage } from "../pages/CollectionPetitPage";
import { CollectionsPage } from "../pages/CollectionsPage";
import { FaqPage } from "../pages/FaqPage";
import { HomePage } from "../pages/HomePage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { TermsPage } from "../pages/TermsPage";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "colecoes", element: <CollectionsPage /> },
      { path: "colecoes/petit", element: <CollectionPetitPage /> },
      { path: "atelier", element: <AtelierPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "termos", element: <TermsPage /> },
      { path: "privacidade", element: <PrivacyPage /> },
    ],
  },
];

export function createAppRouter() {
  return createBrowserRouter(appRoutes, {
    basename: import.meta.env.BASE_URL,
  });
}
