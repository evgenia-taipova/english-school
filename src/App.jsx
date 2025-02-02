import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWithKey from "./components/RoutesWithKey";

function App() {
  return (
    <Router>
      <Header />
      <RoutesWithKey />
      <Footer />
    </Router>
  );
}

export default App;
