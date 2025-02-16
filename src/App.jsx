import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWithKey from "./components/RoutesWithKey";
import { ScrollProvider } from "./components/ScrollContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieBanner from "./components/CookieBanner";

function App() {



  
  return (
    <ScrollProvider>
      <Router>
        <Header />
        <RoutesWithKey />
        <Footer />
        <ScrollToTopButton />
        <CookieBanner />
      </Router>
    </ScrollProvider>
  );
}

export default App;
