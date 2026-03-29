import { useEffect } from 'react'
import profileImg from './dai-profile.jpg'
import iscasImg from './iscas.jpg'
import ipfaImg from './ipfa.jpg'
import icmlImg from './icml.jpg'
import tmlrImg from './tmlr.jpg'
import iscasPaper from './ISCAS2026_ICNet_for_Mutimodal_PCB_Image_Analysis.pdf'
import icmlPaper from './12977.pdf'
import tmlrPaper from './6809.pdf'

// SVG icons for email, scholar, and LinkedIn
const EmailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 8, verticalAlign: 'middle', flexShrink: 0 }}
  >
    <rect width="22" height="22" rx="4" fill="#17608A" />
    <path
      d="M5.5 7.5h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm0 0l5.5 4.5L16.5 7.5"
      stroke="#fff"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 8, verticalAlign: 'middle', flexShrink: 0 }}
  >
    <rect width="22" height="22" rx="4" fill="#0077B5" />
    <path
      d="M7.1 16V9.7H5V16h2.1zm-1-7.1c.7 0 1.1-.5 1.1-1.1 0-.7-.4-1.1-1.1-1.1-.7 0-1.1.4-1.1 1.1 0 .6.4 1.1 1.1 1.1zm2.6 7.1h2.1v-3.3c0-.2 0-.4.1-.5.2-.4.6-.8 1.2-.8.8 0 1.1.6 1.1 1.5V16h2.1v-3.6c0-2-1.1-2.9-2.5-2.9-1.2 0-1.7.7-2 1.2v-1h-2.1c.1.7 0 6.3 0 6.3z"
      fill="#fff"
    />
  </svg>
)

const ScholarIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 8, verticalAlign: 'middle', flexShrink: 0 }}
  >
    <rect width="22" height="22" rx="4" fill="#14496B" />
    <path
      d="M11 6l6 3.5-6 3.5-6-3.5L11 6zm0 7.5c2.5 0 4.5.7 4.5 1.5V16H6.5v-1c0-.8 2-1.5 4.5-1.5z"
      fill="#fff"
    />
  </svg>
)

type NewsItem = {
  date: string
  text: string
}

type Publication = {
  title: string
  authors: string
  venue: string
  year: string
  image: string
  links: Array<{ label: string; href: string }>
}

type Pendings = {
  title: string
  authors: string
  venue: string
  year: string
  image: string
  links: Array<{ label: string; href: string }>
}

type Content = {
  siteTitle: string
  nav: {
    bio: string
    news: string
    publications: string
    pendings: string
    education: string
    contact: string
  }
  bioSection: {
    name: string
    title: string
    subtitle: string
    affiliation: string
    mentor: string
    bio: string[]
  }
  news: NewsItem[]
  publications: {
    helper: string
    items: Publication[]
  }
  pendings: {
    helper: string
    items: Pendings[]
  }
  education: Array<{ period: string; title: string; description: string }>
  contact: {
    description: string
    links: Array<{ label: string; href: string }>
    email: string
    linkedin: string
    scholarLabel: string
    scholarHref: string
}
}

const content: Content = {
  siteTitle: '',
  nav: {
    bio: '',
    news: 'News',
    publications: 'Publications',
    pendings: 'Pendings',
    education: 'Education',
    contact: 'Contact',
  },
  bioSection: {
    name: 'Dai, Jingyang 戴婧扬',
    title: 'Project Officer (Project Spyder, DSO National Laboratories)',
    subtitle: '',
    affiliation: 'SIGNAL Group, School of Electrical and Electronic Engineering, NTU',
    mentor: '',
    bio: [
      'Hi there,',
      'I am currently a Project Officer in <a href="https://scholar.google.com/citations?user=BkCI7rEAAAAJ&hl=en" target="_blank" rel="noreferrer">Professor Tay Wee Peng</a>’s SIGNAL Group at EEE, NTU, where I am co-supervised by <a href="https://scholar.google.com/citations?user=EA0VBD8AAAAJ&hl=en" target="_blank" rel="noreferrer">Dr. Ji Feng</a>.',
      'My current project focuses on wireless network topology design and detecting incomplete information using Graph Neural Networks (GNNs) or graph reconstruction models.',
      'Beyond my current research, I am also deeply interested in Flow Matching, agent-based systems, and AI for Science, especially in finance. I am excited about the possibility of pursuing a PhD where I can further explore these areas.',
    ],
  },
  news: [
    { date: '2026-01', text: 'Invited talk at Nanhua Futures & Davos Global Sharpers Community on "Three key elements of AI".' },
    { date: '2026-01', text: 'One paper (ICNet) was accepted to IEEE ISCAS 2026.' },
    { date: '2025-07', text: 'Joined NTU SIGNAL group as a Project Officer.' },
    { date: '2025-07', text: 'Graduated from NTU with B.Eng. (Hons Distinction), minor in Design and System Thinking.' },
    { date: '2024-07', text: 'One paper (PCB surface component detection with computer vision assisted label generation) was accepted to IEEE IPFA 2024.' },
  ],
  publications: {
  helper: '',
  items: [
    {
      title: 'ICNet: Cross-Modality Image Analysis for IC Localization in Printed Circuit Boards',
      authors:
        'Jingyang Dai, Deruo Cheng, Xinrui Wang, Feng Ji, Yiqiong Shi, and Bah-Hwee Gwee',
      venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)',
      year: '2026',
      image: iscasImg,
      links: [
        { label: 'Paper', href: iscasPaper },
      ],
    },
    {
      title: 'PCB surface component detection with computer vision assisted label generation',
      authors:
        'Deruo Cheng, Jingyang Dai, Yee-Yang Tee, Yiqiong Shi, Bah-Hwee Gwee',
      venue: 'IEEE International Symposium on the Physical and Failure Analysis of Integrated Circuits (IPFA)',
      year: '2024',
      image: ipfaImg,
      links: [
        { label: 'Paper', href: 'https://dr.ntu.edu.sg/server/api/core/bitstreams/ef21bd9b-81cb-4bb7-aee7-092b11a07b52/content' },
      ],
    },
  ],
},
  pendings: {
  helper: '',
  items: [
    {
      title: 'It is still at rebuttal stage, please click on attached paper for details',
      authors:
        'Yanan Zhao, Feng Ji, Jingyang Dai, Jiazhe Ma, and Wee Peng Tay',
      venue: ' International Conference on Machine Learning (ICML)',
      year: '2026',
      image: icmlImg,
      links: [
        { label: 'Paper', href: icmlPaper },
      ],
    },
    {
      title: 'It is still at rebuttal stage, please click on attached paper for details',
      authors:
        'MA XIAOYU, Feng Ji, Deruo Cheng, Yiqiong Shi, Jingyang Dai, Bah-Hwee Gwee ',
      venue: 'Transactions on Machine Learning Research (TMLR)',
      year: '2026',
      image: tmlrImg,
      links: [
        { label: 'Paper', href: tmlrPaper },
      ],
    },
  ],
},
  education: [
    {
      period: '2021-2025',
      title: 'B.E. in Electrical and Electronic Engineering with Honors (Distinction), Minor in Design and System Thinking, Nanyang Technological University',
      description: 'CGPA: 4.30/5.00',
    },
  ],
  contact: {
    description: 'For more details, please visit the links below.',
    links: [
        { label: 'SIGNAL Members Page', href: 'https://wptay.github.io/members.html' },
    ],
    email: 'daij0011@e.ntu.edu.sg / jingyang.dai@ntu.edu.sg',
    linkedin: 'https://www.linkedin.com/in/jingyangdai',
    scholarLabel: 'Google Scholar',
    scholarHref: 'https://scholar.google.com/citations?hl=en&user=WX_382IAAAAJ',
  },
}

function App() {
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.title = content.siteTitle
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <h1>{content.siteTitle}</h1>
        <div className="header-controls">
          <a href="#bio">{content.nav.bio}</a>
          <a href="#news">{content.nav.news}</a>
          <a href="#publications">{content.nav.publications}</a>
          <a href="#pendings">{content.nav.pendings}</a>
          <a href="#education">{content.nav.education}</a>
          <a href="#contact">{content.nav.contact}</a>
        </div>
      </header>

      <main className="main-layout">
        <section className="content-column">
          <section id="bio" className="section-block">
            <h3>{content.nav.bio}</h3>

            <div className="bio-layout">
              <div className="bio-text">
                <h2 style={{ marginTop: 0, marginBottom: 24 }}>{content.bioSection.name}</h2>

                <p
                  style={{
                    fontWeight: 600,
                    color: '#334a7a',
                    marginBottom: 0,
                    fontSize: '1.02rem',
                    lineHeight: 1.5,
                  }}
                >
                  {content.bioSection.title}
                  <br />
                  <span
                    style={{
                      fontWeight: 400,
                      color: '#253457',
                      fontSize: '0.98rem',
                    }}
                  >
                    {content.bioSection.subtitle}
                  </span>
                </p>

                <p style={{ marginBottom: 0, lineHeight: 1.7 }}>{content.bioSection.affiliation}</p>

                {content.bioSection.mentor && <p>{content.bioSection.mentor}</p>}

                <div style={{ marginTop: 20 }}>
                  {content.bioSection.bio.map((paragraph, idx) => (
                    <p
                      key={idx}
                      style={{ lineHeight: 1.8 }}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>

              <img src={profileImg} alt="Profile" className="bio-image" />
            </div>
          </section>

          <section id="news" className="section-block">
            <h3>{content.nav.news}</h3>
            <ul className="news-list">
              {content.news.map((item) => (
                <li key={item.date + item.text}>
                  <span>{item.date}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="publications" className="section-block">
            <h3>{content.nav.publications}</h3>

            {content.publications.helper && (
                <p className="section-helper">{content.publications.helper}</p>
            )}

            <div className="publication-list">
                {content.publications.items.map((item, itemIdx) => (
                <article
                    key={item.title}
                    className={`publication-card ${itemIdx !== content.publications.items.length - 1 ? 'publication-card-bordered' : ''}`}
                >
                    <div className="publication-image-wrap">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="publication-image"
                    />
                    </div>

                    <div className="publication-content">
                    <h4 className="publication-card-title">{item.title}</h4>
                    <p className="publication-authors">{item.authors}</p>
                    <p className="publication-meta">
                        {item.venue} <strong>({item.year})</strong>
                    </p>

                    <div className="publication-links">
                        {item.links.map((link, idx) => (
                        <span key={link.label + idx}>
                            <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                            </a>
                            {idx < item.links.length - 1 && (
                            <span className="link-separator"> | </span>
                            )}
                        </span>
                        ))}
                    </div>
                    </div>
                </article>
                ))}
            </div>
            </section>
          <section id="pendings" className="section-block">
            <h3>{content.nav.pendings}</h3>

            {content.pendings.helper && (
                <p className="section-helper">{content.pendings.helper}</p>
            )}

            <div className="publication-list">
                {content.pendings.items.map((item, itemIdx) => (
                <article
                    key={item.title}
                    className={`publication-card ${
                    itemIdx !== content.pendings.items.length - 1
                        ? 'publication-card-bordered'
                        : ''
                    }`}
                >
                    <div className="publication-image-wrap">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="publication-image"
                    />
                    </div>

                    <div className="publication-content">
                    <h4 className="publication-card-title">{item.title}</h4>
                    <p className="publication-authors">{item.authors}</p>
                    <p className="publication-meta">
                        {item.venue} <strong>({item.year})</strong>
                    </p>

                    <div className="publication-links">
                        {item.links.map((link, idx) => (
                        <span key={link.label + idx}>
                            <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                            </a>
                            {idx < item.links.length - 1 && (
                            <span className="link-separator"> | </span>
                            )}
                        </span>
                        ))}
                    </div>
                    </div>
                </article>
                ))}
            </div>
            </section>
          <section id="education" className="section-block">
            <h3>{content.nav.education}</h3>
            {content.education.map((item) => (
              <article key={item.period + item.title} className="education-item">
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </section>

          <section id="contact" className="section-block">
            <h3>{content.nav.contact}</h3>
            <p className="section-helper">{content.contact.description}</p>

            <div className="bio-links" style={{ marginBottom: 16 }}>
                <a href={`mailto:${content.contact.email}`} className="icon-link">
                <EmailIcon />
                {content.contact.email}
                </a>

                <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-link linkedin-link"
                >
                <LinkedInIcon />
                LinkedIn
                </a>

                <a
                href={content.contact.scholarHref}
                target="_blank"
                rel="noreferrer"
                className="icon-link scholar-link"
                >
                <ScholarIcon />
                {content.contact.scholarLabel}
                </a>
            </div>

            <div className="inline-links">
                {content.contact.links
                .filter((link) => link.label && link.href)
                .map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    </a>
                ))}
            </div>
            </section>
        </section>
      </main>
    </div>
  )
}

export default App