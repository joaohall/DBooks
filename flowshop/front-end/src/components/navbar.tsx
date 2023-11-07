import { motion, animationControls } from "framer-motion";
import './navbar.css';

const strings = ['','','',]

export default function Navbar() {
return (
<nav className="navbar">
    <div className="navbar-content">
        <div className="navbar-links">
            <a href="#">Sobre</a>
            <a href="#">Produtos</a>
            <a href="#">FAQ</a>
        </div>
        <div>
            <img src="" alt="Logo do site na barra de navegação" width={50} height={50} />
        </div>
    </div>
</nav>
)
}
