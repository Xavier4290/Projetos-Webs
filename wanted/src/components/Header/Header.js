import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <ul>
                    <li><a>Login</a></li>
                    <li><a>Lista de Procurados</a></li>
                    <li><a>Cadastrar Procurado</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header

