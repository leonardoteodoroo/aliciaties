import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./app/router";

function App() {
  const [router] = useState(() => createAppRouter());

  useEffect(() => () => router.dispose(), [router]);

  return <RouterProvider router={router} />;
}

export default App;
