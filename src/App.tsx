import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'

type Theme = 'dark' | 'light'

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-1.04-.02-1.9-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.29 9.29 0 0 1 12 6.83c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.04 2.74-1.04.56 1.4.21 2.44.11 2.7.64.71 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

const PROFILE = {
  name: 'Marco Díaz',
  role: 'Full-Stack Developer',
  location: 'Mexico & Ireland',
  email: 'marco98diaz56@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marco-d%C3%ADaz-420562205/',
  github: 'https://github.com/YOUR-GITHUB-USERNAME',
  cvPath: '/Marco_Diaz_Fullstack_CV (IR).pdf',
  ImgProfile: '/imageProfile.jpeg',
  IconLogoDark: '/LogotipoMDModoOscuro.png',
  IconLogoLight: '/LogotipoMDModoClaro.png',
}

const STACK = [
  {
    title: 'Backend Development',
    subtitle: 'Business logic & APIs',
    icon: '01',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core'],
  },
  {
    title: 'Frontend Development',
    subtitle: 'User interfaces',
    icon: '02',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Database',
    subtitle: 'Data modeling & queries',
    icon: '03',
    technologies: ['Microsoft SQL Server', 'T-SQL', 'Relational Design'],
  },
  {
    title: 'Development Tools',
    subtitle: 'Build & delivery',
    icon: '04',
    technologies: ['Visual Studio Community', 'VS Code', 'Git', 'GitHub'],
  },
]

const projects = [
  {
    number: '01',
    category: 'Healthcare · Professional experience',
    title: 'Healthcare Management Applications',
    description:
      'Medical applications supporting clinical workflows, appointments, prescriptions, treatment tracking, notifications and medical records.',
    contribution:
      'Contributed to application development, integrations and migration of existing functionality to OutSystems.',
    tags: ['C#', '.NET', 'SQL Server', 'OutSystems', 'REST / SOAP'],
  },
  {
    number: '02',
    category: 'Logistics · Professional experience',
    title: 'Fleet Tracking & Billing',
    description:
      'Business software for a transport company, including vehicle geolocation functionality and billing workflows.',
    contribution:
      'Contributed to features supporting fleet visibility and administrative operations.',
    tags: ['C#', 'SQL Server', 'Web Applications'],
  },
  {
    number: '03',
    category: 'Independent project · In development',
    title: 'Small Business Management System',
    description:
      'A planned full-stack application for managing customers, services, quotations, invoices and operational reports.',
    contribution:
      'Planned architecture: ASP.NET Core Web API, React frontend and Microsoft SQL Server database. Implementation and demo are pending.',
    tags: ['ASP.NET Core', 'React', 'SQL Server'],
  },
]

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'BEPP',
    period: 'Mar 2024 – Aug 2026',
    details:
      'Worked on healthcare applications, integrations and migration of application functionality to OutSystems.',
  },
  {
    role: 'Developer',
    company: 'Fletes y Transportes Ruiz',
    period: 'Jun 2023 – Mar 2024',
    details:
      'Worked on software related to vehicle geolocation and billing workflows.',
  },
]

const navLinks = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Stack', '#stack'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'light'
        ? 'light'
        : 'dark'
    } catch {
      return 'dark'
    }
  })

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme])

  function openMenu() {
  setMenuClosing(false)
  setMenuOpen(true)
}

function closeMenu() {
  if (!menuOpen || menuClosing) return

  setMenuClosing(true)
}

 return (
  <div className="min-h-screen overflow-x-hidden">

    {/* DESKTOP SIDEBAR */}
    <aside className="sidebar-glass sidebar-enter hidden md:flex">
      <a
        href="#home"
        onClick={closeMenu}
        className="sidebar-brand"
      >
        <img
          src={theme === 'dark'
            ? PROFILE.IconLogoDark
            : PROFILE.IconLogoLight}
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover"
        />

        <span>{PROFILE.name}</span>
      </a>

      <div className="sidebar-divider" />

      <p className="sidebar-label">MENU</p>

      <nav className="sidebar-nav">
        {navLinks.map(([label, href], index) => (
          <a
            key={href}
            href={href}
            className="sidebar-link"
            style={{
              animationDelay: `${350 + index * 120}ms`,
            }}
          >
            <span className="sidebar-link-indicator" />
            {label}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-divider" />

        <p className="sidebar-label">APPEARANCE</p>

        <button
          type="button"
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
          className="sidebar-theme-button"
          aria-label="Change theme"
        >
          {theme === 'dark'
            ? <Sun size={17} />
            : <Moon size={17} />}

          <span>
            {theme === 'dark' ? 'Bone Metallic' : 'Bone Night'}
          </span>
        </button>

        <p className="sidebar-footer-text">
          © {new Date().getFullYear()} {PROFILE.name} V2.1.0
        </p>
      </div>
    </aside>


    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      className="mobile-menu-button md:hidden"
      onClick={() => {
        if (menuOpen && !menuClosing) {
          closeMenu()
        } else {
          openMenu()
        }
      }}
      aria-label={menuOpen && !menuClosing ? 'Close navigation' : 'Open navigation'}
      aria-expanded={menuOpen && !menuClosing}
    >
      {menuOpen && !menuClosing ? <X size={20} /> : <Menu size={20} />}
    </button>


    {/* MOBILE SIDEBAR */}
    {menuOpen && (
  <div
    className={`mobile-sidebar-overlay md:hidden ${menuClosing ? 'mobile-menu-closing' : ''}`}
    onAnimationEnd={(event) => {
      if (
        menuClosing &&
        event.target === event.currentTarget
      ) {
        setMenuOpen(false)
        setMenuClosing(false)
      }
    }}> 

        <button
          className="mobile-sidebar-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
        />

        <aside className={`sidebar-glass ${menuClosing ? 'mobile-sidebar-exit' : 'mobile-sidebar-enter'}`}>
          <a
            href="#home"
            onClick={closeMenu}
            className="sidebar-brand"
          >
            <img
              src={theme === 'dark'
                ? PROFILE.IconLogoDark
                : PROFILE.IconLogoLight}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />

            <span>{PROFILE.name}</span>
          </a>

          <div className="sidebar-divider" />

          <p className="sidebar-label">MENU</p>

          <nav className="sidebar-nav">
            {navLinks.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="sidebar-link"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="sidebar-link-indicator" />
                {label}
              </a>
            ))}
          </nav>

          <div className="sidebar-bottom">
            <div className="sidebar-divider" />

            <p className="sidebar-label">APPEARANCE</p>

            <button
              type="button"
              onClick={() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }
              className="sidebar-theme-button"
            >
              {theme === 'dark'
                ? <Sun size={17} />
                : <Moon size={17} />}

              <span>
                {theme === 'dark' ? 'Bone Metallic' : 'Bone Night'}
              </span>
            </button>
          </div>

        </aside>
      </div>
    )}

    {/* MAIN CONTENT */}
    <main className="md:ml-[270px]">
        <section id="home" className="relative" style={ { marginTop: '-4rem !important' } }>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 70% 25%, var(--hero-glow), transparent 55%)',
            }}
          />

          <div className="container relative grid items-center gap-12 py-24 md:grid-cols-[1.3fr_0.7fr] md:py-32" style={{ paddingTop: '25px !important' }}>
            <div>
              <p className="eyebrow mb-6 flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
                Full-Stack Developer · {PROFILE.location}
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Building software that{' '}
                <span style={{ color: 'var(--accent)' }}>
                  solves problems.
                </span>
              </h1>

              <p className="section-copy mt-7 text-base md:text-lg">
                I'm {PROFILE.name}, a developer with 3+ years of experience
                working across web applications, healthcare software, business
                systems and integrations. I focus on building maintainable
                applications with C#, ASP.NET Core, React and SQL Server.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a className="primary-button" href="#projects">
                  Explore my work <ArrowRight size={18} />
                </a>
                <a className="secondary-button" href={PROFILE.cvPath} download>
                  Download CV <ArrowDownToLine size={18} />
                </a>
              </div>

              <div
                className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm"
                style={{ color: 'var(--muted)' }}
              >
                <span className="flex items-center gap-2">
                  <Code2 size={17} style={{ color: 'var(--accent)' }} />
                  C# / ASP.NET Core
                </span>
                <span className="flex items-center gap-2">
                  <Code2 size={17} style={{ color: 'var(--accent)' }} />
                  React
                </span>
                <span className="flex items-center gap-2">
                  <BriefcaseBusiness
                    size={17}
                    style={{ color: 'var(--accent)' }}
                  />
                  SQL Server
                </span>
              </div>
            </div>

            <div className="surface relative mx-auto w-full max-w-sm p-6 md:p-8">
              <div
                className="mb-7 grid aspect-square place-items-center rounded-2xl"
                style={{
                  backgroundImage: `url(${PROFILE.ImgProfile})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border)',
                }}
              >
              </div>

              <p className="text-lg font-bold">My development stack</p>
              <p className="mt-2 text-sm leading-6" style={{ color: 'var(--muted)' }}>
                C# and ASP.NET Core for backend services, React for the frontend,
                and SQL Server for data persistence.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['ASP.NET Core', 'React', 'SQL Server', 'OutSystems'].map((tech) => (
                  <span key={tech} className="skill-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">01 / About me</p>
              <h2 className="section-title">
                Engineering practical solutions.
              </h2>
            </div>

            <div>
              <p className="section-copy mt-0">
                My experience spans full-stack development, healthcare
                applications, logistics and internal business systems. I've
                worked with C#/.NET, SQL Server, React and OutSystems,
                contributing to application features and integrations.
              </p>
              <p className="section-copy">
                My current portfolio direction focuses on building applications
                with ASP.NET Core Web API, React and Microsoft SQL Server,
                using Visual Studio Community as my main .NET development IDE.
              </p>
              <a
                className="accent-link mt-3 inline-flex items-center gap-2"
                href="#experience"
              >
                Explore my experience <ArrowDown size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section"
          style={{ background: 'var(--surface)' }}
        >
          <div className="container">
            <p className="eyebrow">02 / Selected work</p>
            <h2 className="section-title">Projects & experience</h2>
            <p className="section-copy mb-9">
              Professional experience and a planned independent project
              showcasing my target development stack.
            </p>

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="surface flex flex-col p-6"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {project.number}
                    </span>
                    <Code2 size={23} style={{ color: 'var(--muted)' }} />
                  </div>

                  <p
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--muted)' }}
                  >
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-snug">
                    {project.title}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-7"
                    style={{ color: 'var(--muted)' }}
                  >
                    {project.description}
                  </p>

                  <p className="mt-4 text-sm leading-6">
                    {project.contribution}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-chip">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6" style={{ color: 'var(--muted)' }}>
              Professional projects may contain confidential information.
              This portfolio describes my work without exposing proprietary
              source code, customer data or internal screenshots.
            </p>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="container">
            <p className="eyebrow">03 / Technical toolkit</p>
            <h2 className="section-title">My technology stack</h2>
            <p className="section-copy mb-9">
              The technologies and tools behind my development workflow.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {STACK.map((group) => (
                <article key={group.title} className="surface p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{group.title}</h3>
                      <p
                        className="mt-2 text-sm"
                        style={{ color: 'var(--muted)' }}
                      >
                        {group.subtitle}
                      </p>
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {group.icon}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.technologies.map((tech) => (
                      <span key={tech} className="skill-chip">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section"
          style={{ background: 'var(--surface)' }}
        >
          <div className="container">
            <p className="eyebrow">04 / Career</p>
            <h2 className="section-title">Professional experience</h2>

            <div className="mt-8 max-w-3xl">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className="relative border-l pb-10 pl-7 last:pb-0"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span
                    className="absolute -left-[6px] top-1 size-3 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />

                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {job.period}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
                  <p
                    className="mt-1 font-semibold"
                    style={{ color: 'var(--muted)' }}
                  >
                    {job.company}
                  </p>
                  <p className="section-copy mt-3">{job.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="surface px-6 py-12 text-center md:px-12 md:py-16">
              <p className="eyebrow">05 / Get in touch</p>
              <h2 className="section-title mx-auto max-w-2xl">
                Let's build something useful.
              </h2>
              <p className="section-copy mx-auto">
                I'm interested in connecting with teams building reliable
                software and solving real business problems.
              </p>

              <a className="primary-button mt-6" href={`mailto:${PROFILE.email}`}>
                <Mail size={18} /> Let's talk
              </a>

              <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
                <a
                  className="accent-link inline-flex items-center gap-2"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ExternalLink size={14} />
                </a>
                <a
                  className="accent-link inline-flex items-center gap-2"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon size={17} /> GitHub <ExternalLink size={14} />
                </a>
                <a
                  className="accent-link inline-flex items-center gap-2"
                  href={`mailto:${PROFILE.email}`}
                >
                  <Mail size={17} /> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="border-t py-6 md:ml-[270px]"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="container flex flex-col justify-between gap-3 text-sm sm:flex-row">
          
          <a className="accent-link" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
