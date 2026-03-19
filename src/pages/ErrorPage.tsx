import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { AppLayout } from "../app/AppLayout";

export function ErrorPage() {
  const error = useRouteError();

  let errorMessage = "Algo deu errado";
  let errorDetail = "";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "Página não encontrada";
      errorDetail = "A delicadeza que você procura parece ter mudado de lugar.";
    } else {
      errorMessage = error.statusText;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <AppLayout hideNav hideFooter>
      <main className="flex min-h-[70svh] flex-col items-center justify-center p-6 text-center">
        <h1 className="page-title mb-6">{errorMessage}</h1>
        <p className="hero-copy mb-10 max-w-[40ch]">{errorDetail}</p>
        <Link className="btn-primary" to="/">
          Voltar para o início
        </Link>
      </main>
    </AppLayout>
  );
}
