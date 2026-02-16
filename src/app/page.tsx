import Image from "next/image";
import { highlightedPapers } from "@/data/papers";

type SocialLink = {
  label: string;
  href: string;
};

type Talk = {
  dateLabel: string;
  text: string;
  href?: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=ItdEfc8AAAAJ&hl=en",
  },
  { label: "Twitter", href: "https://twitter.com/simar_kareer" },
  { label: "GitHub", href: "https://www.github.com/simarkareer" },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/18xzet6fQblILHRMPv7K0kk4jaBxfQA9J/view?usp=share_link",
  },
];

const hideHomeBlogPostFor = new Set(["egobridge", "emma"]);

const talks: Talk[] = [
  {
    dateLabel: "Jun 2025",
    text: "Invited talk at the EgoAct Workshop (RSS 2025)",
    href: "https://youtu.be/64yLApbBZ7I?si=Dj-cPG2Le3R5lDFx&t=5278",
  },
  {
    dateLabel: "Nov 2024",
    text: "Gave an invited talk for the Google DeepMind reading group",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero" aria-label="Intro">
        <div>
          <p>
            I&apos;m a PhD student at Georgia Tech advised by Judy
            Hoffman and Danfei Xu. Previously, I interned at{" "}
            <a
              href="https://www.physicalintelligence.company/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Physical Intelligence
            </a>. I completed undergrad at Georgia Tech where I worked with Dhruv Batra.
          </p>
          <p>
            To build intelligent robots, we must leverage vast real-world
            datasets. I build algorithms and systems to tap into such data,
            most recently attempting to teach robots from egocentric human
            experience.
          </p>

          <p className="contact">skareer[at]gatech[dot]edu</p>

          <nav aria-label="Social links">
            <ul className="links-list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <figure className="profile-frame">
          <Image
            src="/pfp2025.png"
            alt="Portrait of Simar Kareer"
            width={480}
            height={480}
            priority
          />
        </figure>
      </section>

      <section className="paper-section" aria-labelledby="highlighted-papers-heading">
        <div className="section-header">
          <h2 id="highlighted-papers-heading">Selected Works</h2>
        </div>

        <ul className="highlighted-paper-list" aria-label="Highlighted papers">
          {highlightedPapers.map((paper) => (
            <li key={paper.id} className="highlighted-paper-item">
              <span className="paper-meta">
                {paper.month} {paper.year}
              </span>
              <span className="highlighted-paper-title">{paper.title}</span>
              <span className="paper-actions highlighted-paper-actions">
                {!hideHomeBlogPostFor.has(paper.id) && paper.blogUrl ? (
                  <a href={paper.blogUrl} target="_blank" rel="noopener noreferrer">
                    {paper.id === "egomimic" ? "Meta AI Blog" : "Blog post"}
                  </a>
                ) : null}
                {!hideHomeBlogPostFor.has(paper.id) && paper.blogUrl && paper.tweetUrl ? (
                  <span aria-hidden="true">·</span>
                ) : null}
                {paper.tweetUrl ? (
                  <a href={paper.tweetUrl} target="_blank" rel="noopener noreferrer">
                    Tweet
                  </a>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="paper-section" aria-labelledby="talks-heading">
        <div className="section-header">
          <h2 id="talks-heading">Talks</h2>
        </div>

        <ul className="talk-list" aria-label="Talks">
          {talks.map((talk) => (
            <li key={`${talk.dateLabel}-${talk.text}`} className="talk-item">
              <span className="talk-date">{talk.dateLabel}</span>
              <span className="talk-text">{talk.text}</span>
              {talk.href ? (
                <a
                  className="talk-link"
                  href={talk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
