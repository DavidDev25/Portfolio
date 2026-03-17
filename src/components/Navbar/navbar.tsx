import './Navbar.scss';

export function Navbar() {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar__header">
                <a className="navbar__brand" href="#top">
                    David&apos;s Portfolio
                </a>
            </div>

            <ul className="navbar__links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/daviddev25" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/david-werner-01a88032a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </nav>
    );
}