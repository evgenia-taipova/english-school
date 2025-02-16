import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWithKey from "./components/RoutesWithKey";
import { ScrollProvider } from "./components/ScrollContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieBanner from "./components/CookieBanner";
import { useState } from "react";

function App() {
  const [cookieConsent, setCookieConsent] = useState(
    localStorage.getItem("cookieConsent")
  );

  return (
    <ScrollProvider>
      <Router>
        <Header />
        <RoutesWithKey setCookieConsent={setCookieConsent}/>
        <Footer />
        <ScrollToTopButton />
        {!cookieConsent && <CookieBanner setCookieConsent={setCookieConsent} />}
      </Router>
    </ScrollProvider>
  );
}

export default App;
