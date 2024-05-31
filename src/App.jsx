import Contactform from "./components/Contact-form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import Service from "./components/Service";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Contactform />
          <Map />
          <Service />
          <Footer />
        </>
      ),
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
