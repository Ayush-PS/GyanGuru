import './App.css';
import Header from './Components/HeaderFooter/Header';
import Footer from './Components/HeaderFooter/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/helpers/AnimatedRoutes";
function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
