import './hero.scss';

export function Hero() {
    return (
        <section className="hero" id="top" aria-label="Hero section">
            <div className="hero__content">
                <h1 className="hero__title">Hi, I&apos;m David</h1>
                <p className="hero__subtitle">A passionate software developer specializing in web applications.</p>
                <a href="#projects" className="hero__cta">View My Projects</a>
            </div>
        </section>
    )
}