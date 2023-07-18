import './App.css';
import {Header} from "./layout/header/Header";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Works} from "./layout/sections/works/Works";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
        </div>
    );
}

export default App;
