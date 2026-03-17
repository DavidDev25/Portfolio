import './Navbar.scss';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar__header">
                <a className="navbar__brand" href="#top" onClick={closeMenu}>
                    David&apos;s Portfolio
                </a>
            </div>

            <button
                className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar__links ${isOpen ? 'navbar__links--active' : ''}`}>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                <li><a href="https://github.com/daviddev25" target="_blank" rel="noopener noreferrer" className="navbar__link-icon"><img src="/GitHub_Invertocat_Black.png" alt="GitHub" /></a></li>
                <li><a href="https://www.linkedin.com/in/david-werner-01a88032a/" target="_blank" rel="noopener noreferrer" className="navbar__link-icon"><img src="/LI-In-Bug.png" alt="LinkedIn" /></a></li>
            </ul>
        </nav>
    );
}