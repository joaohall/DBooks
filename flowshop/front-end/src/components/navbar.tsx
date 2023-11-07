import { motion, animationControls } from "framer-motion";
import './navbar.css';

const strings = ['','','',]

export default function Navbar() {
    return (
    <nav className="navbar">
      <div className="navbar-content">
        <div>
            <img src="" alt="Logo do site na barra de navegação" width={50} height={50}/>
        </div>
        <div>
            <a href="#">a</a>
            <a href="#">a</a>
            <a href="#">a</a>
        </div>
      </div>
    </nav>
  )
}
