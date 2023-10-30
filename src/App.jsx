import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import MeetTheTeam from "./components/MeetTheTeam";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/#about",
      element: <About />
    },
    {
      path: "/#services",
      element: <Services />
    },
    {
      path: "/#products",
      element: <Products />
    },
    {
      path: "/#projects",
      element: <Projects />
    },
    {
      path: "/#testimonials",
      element: <Testimonials />
    },
    {
      path: "/#team",
      element: <MeetTheTeam />
    },
    {
      path: "/#clients",
      element: <Clients />
    },
    {
      path: "/#contact",
      element: <Footer />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
