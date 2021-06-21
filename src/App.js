import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min"
import './App.css';
import "./responsive.css";
import NavBar from "./pages/NavBar";
import Header from "./pages/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Fotter from "./pages/Fotter";


function App() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Fotter/>
        </div>
    );
}

export default App;
