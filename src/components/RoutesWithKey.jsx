import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "../pages/Home";
import EnglishForITPage from "../pages/EnglishForITPage";
import EnglishForMediaPage from "../pages/EnglishForMediaPage";
import EnglishForBusinessPage from "../pages/EnglishForBusinessPage";
import EnglishForLawPage from "../pages/EnglishForLawPage";
import EnglishForNgosPage from "../pages/EnglishForNgosPage";
import EnglishGrammarA2Page from "../pages/EnglishGrammarA2Page";
import EnglishGrammarB1Page from "../pages/EnglishGrammarB1Page";
import EnglishSpeakingITPage from "../pages/EnglishSpeakingITPage";
import EnglishSpeakingA2Page from "../pages/EnglishSpeakingA2Page";
import EnglishSpeakingB1Page from "../pages/EnglishSpeakingB1Page";
import EnglishSpeakingB1BusinessPage from "../pages/EnglishSpeakingB1Business";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ScrollToTop from "./ScrollToTop";

function RoutesWithKey() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/course/english-for-it" element={<EnglishForITPage />} />
        <Route
          path="/course/english-for-media"
          element={<EnglishForMediaPage />}
        />
        <Route
          path="/course/english-for-business"
          element={<EnglishForBusinessPage />}
        />
        <Route path="/course/english-for-law" element={<EnglishForLawPage />} />
        <Route
          path="/course/english-for-ngos"
          element={<EnglishForNgosPage />}
        />
        <Route path="/course/grammar-a2" element={<EnglishGrammarA2Page />} />
        <Route path="/course/grammar-b1" element={<EnglishGrammarB1Page />} />
        <Route path="/course/speaking-it" element={<EnglishSpeakingITPage />} />
        <Route path="/course/speaking-a2" element={<EnglishSpeakingA2Page />} />
        <Route path="/course/speaking-b1" element={<EnglishSpeakingB1Page />} />
        <Route
          path="/course/speaking-business"
          element={<EnglishSpeakingB1BusinessPage />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default RoutesWithKey;
