import { Link } from 'react-router-dom'

function Contato(){
    return(
        <div>
            <h1>Pagina Contato</h1>
            <span>Contato da empresa (dd) xxxxx-xxxx</span><br/><br/>

            <Link to="/">Pagina Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>

        </div>
    )
}

export default Contato;