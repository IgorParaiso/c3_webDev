import './Navbar.css'

export default function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#about"><p>Quem sou eu?</p></a>
                    </li>
                    <li>
                        <a href="#experience"><p>Experiências</p></a>
                    </li>
                    <li>
                        <a href="#education"><p>Formações</p></a>
                    </li>
                    <li>
                        <a href="#contact"><p>Contato</p></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}