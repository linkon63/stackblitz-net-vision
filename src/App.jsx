import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { pageRoutes } from "../src/components/route/Router";

function App() {
  const router = createBrowserRouter(pageRoutes);
  return <RouterProvider router={router} />;
}

export default App;
