import { useEffect, useState, type ReactNode } from "react";
import my_photo from "./images/my_photo.jpeg";

type IconName =
  | "arrow"
  | "code"
  | "database"
  | "download"
  | "external"
  | "github"
  | "layers"
  | "linkedin"
  | "mail"
  | "menu"
  | "moon"
  | "pipeline"
  | "shield"
  | "sun"
  | "x";


function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </>
    ),
    external: (
      <>
        <path d="M15 3h6v6M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
    download: (
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </>
),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    pipeline: (
      <>
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
        <path d="M7 12h3M14 12h3" />
      </>
    ),
    shield: (
      <>
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const navItems = ["About", "Skills", "Experience", "Projects"];

const skillGroups = [
  {
    number: "01",
    title: "Languages & Querying",
    skills: ["SQL", "Python", "Java", "Bash"],
  },
  {
    number: "02",
    title: "Data Engineering Fundamentals",
    skills: [
      "Apache Spark",
      "Apache Airflow",
      "ETL Pipelines",
      "PySpark",
      "DataBricks",
      "Data Modeling",
      "Data Warehousing",
      "Kafka",
    ],
  },
  {
    number: "03",
    title: "Databases & Storage",
    skills: ["MySQL", "MongoDB", "Amazon S3"],
  },
  {
    number: "04",
    title: "Cloud and Infrastructure",
    skills: [
      "AWS (EC2, S3, Glue, IAM, Lambda)",
      "Docker",
      "Git & GitHub",
      "Linux",
      "CI/CD",
    ],
  },
];

const projects = [
  {
    index: "01",
    title: "Financial Fraud Detection Pipeline",
    description:
      "End-to-end banking fraud pipeline processing 250K+ transactions with PySpark, Databricks, Delta Lake, and AWS S3 — Bronze/Silver/Gold medallion architecture delivering star-schema analytics.",
    tech: ["Python", "SQL", "PySpark", "Databricks", "AWS S3","Medallion Architecture","Git & GitHub"],
    href: "https://github.com/Atharvwavare/indian-financial-fraud-pipeline",
    cta: "View Code",
    icon: "layers" as IconName,
    tone: "green",
  },
  {
    index: "02",
    title: "2015 US flights Delay Analytics Pipeline",
    description:
      "Built an end-to-end ETL pipeline analyzing 5.33M U.S. flight records using PySpark and Delta Lake on Databricks, following a medallion architecture with a Databricks SQL dashboard.",
    tech: ["PySpark", "AWS S3", "DataBricks", "SQL dashboard","ETL pipeline"],
    href: "https://github.com/Atharvwavare/flight-delay-analytics-pipeline",
    cta: "View code",
    icon: "shield" as IconName,
    tone: "blue",
  },
  {
    index: "03",
    title: "PECM - Personal Expense Control Manager",
    description:
      "A platform for managing personal expenses, built using Spring Boot, Java and React.js. It allows users to track their expenses, categorize them, and visualize spending patterns through interactive charts.",
    tech: ["Spring Boot", "MYSQL", "TypeScript","REST API"],
    href: "https://pecm-frontend.vercel.app/",
    cta: "Live Demo",
    icon: "code" as IconName,
    tone: "violet",
  },
];

export default function App() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Atharv Wavare, home">
          AW<span>.</span>
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a className="nav-contact" href="mailto:atharvwavare7@gmail.com">
            Let's talk
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="portrait-wrap" aria-label="Portrait of Atharv Wavare">
  <img src={my_photo} alt="Atharv Wavare" />
</div>

          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Open to Opportunities
            </p>
            <h1>
              Turning raw data into <em>reliable pipelines</em> and clean,
              queryable systems.
            </h1>
            <p className="hero-intro">
              Hi, I'm <strong>Atharv Wavare</strong> — an aspiring Data Engineer
              focused on building ETL pipelines, modeling data for analytics,
              and working with SQL, PySpark, and cloud data services.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View my work <Icon name="arrow" />
              </a>
               {/* ↓ NEW: Resume download button */}
  <a
    className="secondary-button"
    href="/Atharv_Resume.pdf"
    download="Atharv-Resume.pdf"
    aria-label="Download Atharv resume"
  >
    <Icon name="download" size={18} />
    Resume
  </a>
              <a className="text-link" href="mailto:atharvwavare7@gmail.com">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-foot">
            <span>Based in India</span>
            <div className="hero-socials">
              <a
                href="https://github.com/Atharvwavare"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/atharvwavare/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
              <a href="mailto:atharvwavare7@gmail.com" aria-label="Email">
                <Icon name="mail" />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label">
            <span>01</span> About me
          </div>
          <div className="about-grid">
            <h2>
              I build data systems that are{" "}
              <em>dependable, documented, and easy to reason about.</em>
            </h2>
            <div className="about-copy">
              <p>
                I'm an Information Technology student moving into Data
                Engineering. I spend my time on Python, SQL,PySpark, data
                modeling, and pipeline design — turning messy sources into
                clean, queryable tables that analysts and applications can
                trust.
              </p>
              <p>
                My approach is grounded in fundamentals: understand the data,
                design the schema, build the pipeline, and validate the output
                at every step.
              </p>
              <a className="underlined-link" href="#experience">
                More about my journey <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted-section">
          <div className="section-heading">
            <div className="section-label">
              <span>02</span> Expertise
            </div>
            <h2>The data stack I work with.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <span className="card-number">{group.number}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading split-heading">
            <div>
              <div className="section-label">
                <span>03</span> Experience
              </div>
              <h2>Building the fundamentals.</h2>
            </div>
            <p>
              Hands-on work with real codebases, data flows, and production web
              systems.
            </p>
          </div>
          <article className="experience-row">
            <div className="experience-date">Jan — April 2026</div>
            <div className="experience-role">
              <span>Office</span>
              <h3>Software Developer Intern</h3>
              <h4>Optenix Tech Solutions</h4>
            </div>
            <ul>
              <li>
                Worked with MySQL databases for data storage, querying, and
                day-to-day application-level data management.
              </li>
              <li>
                Collaborated within Agile Scrum teams using Git for version
                control, debugging, testing, and feature delivery.
              </li>
            </ul>
          </article>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading split-heading">
            <div>
              <div className="section-label">
                <span>04</span> Selected work
              </div>
              <h2>Projects from where I learned the concepts.</h2>
            </div>
            <a
              className="underlined-link"
              href="https://github.com/Atharvwavare"
              target="_blank"
              rel="noreferrer"
            >
              See all on GitHub <Icon name="external" size={17} />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <a
                className={`project-card ${project.tone}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <div className="project-visual">
                  <span className="project-index">{project.index}</span>
                  <div className="project-icon">
                    <Icon name={project.icon} size={42} />
                  </div>
                  <Icon name="external" size={18} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-cta">
                    {project.cta} <Icon name="arrow" size={18} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow">Open to worth with you</p>
          <h2>
            Let's build reliable <em>data systems.</em>
          </h2>
          <a href="mailto:atharvwavare7@gmail.com">
            atharvwavare7@gmail.com <Icon name="arrow" />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          AW<span>.</span>
        </a>
        <p>Designed and built by Atharv Wavare.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Atharvwavare"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/atharvwavare/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
