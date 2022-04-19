import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Hum, parece que essa pagina nao existe</h1><br/>

            <span>Voce pode estar procurando por:</span> <br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contatos</Link>
        </div>
    );
}