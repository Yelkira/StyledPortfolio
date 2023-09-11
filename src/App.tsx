import './App.css';
import {ToastContainer} from "react-toastify";
import {GoTopButton} from "./components/goTopButton/goTopButton";
import {Particle} from "./components/particle/Particle";
import {Footer} from "./layout/footer/Footer";
import {Header} from "./layout/header/Header";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Works} from "./layout/sections/works/Works";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
            <GoTopButton/>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
