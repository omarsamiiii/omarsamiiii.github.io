import React from 'react';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        } else {
          entry.target.classList.remove('reveal--visible');
        }
      });
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <main className="container">
        <Section id="about" kicker="About" title="Performance-minded engineering for EDA workflows" delay={1}>
          <Card>
            I build fast, reliable infrastructure for chip verification: optimizing functional coverage databases (memory & latency)
            and orchestrating large-scale regression jobs across compute grids. I enjoy C++ performance work, pragmatic Python tooling,
            and clean automation.
            <div style={{ marginTop: 10 }}>
              {["C++", "Python", "Linux", "Profiling", "EDA", "CI/CD"].map((p) => (
                <span className="pill" key={p}>{p}</span>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="experience" kicker="Experience" title="Recent roles" delay={2}>
          <div className="grid reveal">
            <Card>
              <div className="job-title">Senior Software Development Engineer</div>
              <div>Siemens Digital Industries Software — Cairo, Egypt (May 2025 — Present)</div>
              <ul>
                <li>Improved coverage DB runtime & memory on multi-GB datasets.</li>
                <li>Built a regression jobs launcher with dependency handling & retries.</li>
              </ul>
            </Card>
            <Card>
              <div className="job-title">Software Development Engineer</div>
              <div>Siemens Digital Industries Software — Cairo, Egypt (Mar 2022 — May 2025)</div>
              <ul>
                <li>Caching, indexing, on-demand processing → from ~100GB → &lt;10GB.</li>
                <li>Python/OOP tooling for setup migration between verification tools.</li>
              </ul>
            </Card>
            <Card>
              <div className="job-title">Software Testing Engineer (Automation)</div>
              <div>Siemens Digital Industries Software — Cairo, Egypt (Jun 2020 — Feb 2022)</div>
              <ul>
                <li>Automated regression suites; integrated with Jenkins/Git for fast feedback.</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="projects" kicker="Projects" title="Selected work" delay={3}>
          <div className="grid reveal">
            <Card><div className="card-title">Coverage DB Optimizer</div><p>Compaction & index redesign; faster queries, lower peak memory.</p></Card>
            <Card><div className="card-title">Grid Regression Launcher</div><p>DAG orchestration, retry/backoff, metrics, resource caps.</p></Card>
            <Card><div className="card-title">Top Verilog File Creator</div><p>GUI (C++/Qt) generates configurable top files across block configs.</p></Card>
          </div>
        </Section>

        <Section id="contact" kicker="Contact" title="Get in touch" delay={1}>
          <div className="contact-grid">
            <div className="contact-item">
              <MailIcon />
              <a href="mailto:osamyelmasry@gmail.com">osamyelmasry@gmail.com</a>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <span>+20 120 597 8882</span>
            </div>
            <div className="contact-item">
              <LocationIcon />
              <span>Cairo, Egypt</span>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

/* ---------- UI pieces ---------- */
function Header() {
  return (
    <header className="container hero reveal">
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQFLaFtfbFrn0Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723449862949?e=1761177600&v=beta&t=55tHtWOnwdP0s1zYGGsiTTc2YJWhej6zZiDEMjOwZjU" alt="Omar Samy" className="profile-pic" />
      <div className="name">Omar Samy Abdel-Salam Hafez El-Masry</div>
      <div className="tagline">
        Senior Software Developer — EDA performance, coverage DB optimization, and distributed regression automation
      </div>
      <div className="links" aria-label="social links">
        <Chip className="mail" href="mailto:osamyelmasry@gmail.com" icon={MailIcon} tooltip="osamyelmasry@gmail.com" />
        <Chip className="linkedin" href="https://www.linkedin.com/in/omar-el-masry-375083158" icon={LinkedInIcon} tooltip="LinkedIn" />
        <Chip className="github" href="https://github.com/omarsamiiii" icon={GitHubIcon} tooltip="GitHub" />
      </div>
    </header>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Section({ id, kicker, title, children, delay = 0 }) {
  return (
    <section id={id} className={`reveal ${delay ? `delay-${delay}` : ""}`.trim()}>
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Chip({ href, icon: Icon, className = "", tooltip }) {
  const target = href.startsWith("http") ? "_blank" : undefined;
  return (
    <a className={`chip ${className}`} href={href} target={target} rel="noreferrer" data-tooltip={tooltip}>
      <Icon />
    </a>
  );
}

/* ---------- Footer & Icons (inline, no deps) ---------- */
function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Omar El-Masry • Built with ♥ • <a className="accent" href="https://github.com/omarsamiiii">GitHub</a>
    </footer>
  );
}
function MailIcon(){return(<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.51l-10 6.25L2 6.51V6Zm0 2.24V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.24l-9.45 5.9a2 2 0 0 1-2.1 0L2 8.24Z"/></svg>);}
function LinkedInIcon(){return(<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.2V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z"/></svg>);}
function GitHubIcon(){return(<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.8 1.05a9.34 9.34 0 0 1 5.1 0c1.96-1.33 2.8-1.05 2.8-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>);}
function GlobeIcon(){return(<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-3.38c-.22-1.5-.63-2.86-1.16-3.9A8.03 8.03 0 0 1 18.93 8ZM12 4.07c.7 1.05 1.24 2.73 1.52 3.93H10.5c.28-1.2.82-2.88 1.5-3.93ZM4.44 16a7.97 7.97 0 0 1 0-8h3.54c-.18.95-.28 1.96-.28 3s.1 2.05.28 3H4.44Zm.63 2h3.38c.22 1.5.63 2.86 1.16 3.9A8.03 8.03 0 0 1 5.07 18ZM8.45 8H4.93a8.03 8.03 0 0 1 4.54-3.9C9.08 5.14 8.67 6.5 8.45 8ZM12 19.93c-.7-1.05-1.24-2.73-1.52-3.93h3.02c-.28 1.2-.82 2.88-1.5 3.93Zm1.48-5.93H10.5c-.18-.95-.28-1.96-.28-3s.1-2.05.28-3h2.98c.18.95.28 1.96.28 3s-.1 2.05-.28 3Zm1 .93h3.54a7.97 7.97 0 0 1 0 2h-3.54c.18-.95.28-1.96.28-3s-.1-2.05-.28-3ZM14.57 22c.53-1.04.94-2.4 1.16-3.9h3.38A8.03 8.03 0 0 1 14.57 22Z"/></svg>);}
function PhoneIcon(){return(<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>);}
function LocationIcon(){return(<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>);}