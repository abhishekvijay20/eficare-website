import {
  Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EficareHome from "./pages/EficareHome";
import { useEffect } from "react";
import JobSeeker from "./pages/JobSeeker";
import Employer from "./pages/Employer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
        <Route path="/" element={<EficareHome />} />
        <Route path="/job-seeker" element={<JobSeeker />} />
        <Route path="/employer" element={<Employer />} />
    </Routes>
  );
}
export default App;
