import Image from "next/image";
import { highlightedPapers, isRecentDate } from "@/data/papers";

function isRecentDateLabel(label: string): boolean {
  const [month, yearStr] = label.split(" ");
  return isRecentDate(month, parseInt(yearStr, 10));
}

type SocialLink = {
  label: string;
  href: string;
  download?: boolean;
};

type NewsItem = {
  dateLabel: string;
  text: string;
  links?: { label: string; href: string }[];
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
    href: "/SimarKareerCV.pdf",
    download: true,
  },
];

const newsItems: NewsItem[] = [
  {
    dateLabel: "Nov 2026",
    text: "I defended my thesis!",
    links: [
      {
        label: "Video",
        href: "https://drive.google.com/file/d/16jFZh6NQvUlP7YIuWyINOzOnL2tzghz4/view?usp=sharing",
      },
    ],
  },
  {
    dateLabel: "Nov 2026",
    text: "I contributed to GR00T 2 and the corresponding Human1M dataset",
    links: [
      { label: "GR00T 2", href: "https://research.nvidia.com/labs/gear/gr00t-2/" },
      {
        label: "Human1M",
        href: "https://huggingface.co/spaces/nvidia/PhysicalAI-Human-1M-Explorer",
      },
    ],
  },
  {
    dateLabel: "Jul 2026",
    text: "Invited talk at the Data-Centric Robotics Workshop (RSS 2026)",
    links: [{ label: "Video", href: "https://youtu.be/J6TXewW22vs" }],
  },
  {
    dateLabel: "Apr 2026",
    text: "My work was featured in the Washington Post",
    links: [
      {
        label: "Article",
        href: "https://www.washingtonpost.com/technology/interactive/2026/robot-chores-video-data/",
      },
    ],
  },
  {
    dateLabel: "Jun 2025",
    text: "Invited talk at the EgoAct Workshop (RSS 2025)",
    links: [
      { label: "Video", href: "https://youtu.be/64yLApbBZ7I?si=Dj-cPG2Le3R5lDFx&t=5278" },
    ],
  },
  {
    dateLabel: "Nov 2024",
    text: "Gave an invited talk for the Google DeepMind reading group",
  },
];

const hideHomeBlogPostFor = new Set(["egobridge", "emma"]);

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
            </a>{" "}
            and Nvidia GEAR. I completed undergrad at Georgia Tech where I worked with Dhruv Batra.
          </p>
          <p>
            To build intelligent robots, we must leverage vast real-world
            datasets. I build algorithms and systems to tap into such data,
            most recently attempting to teach robots from egocentric human
            experience.
          </p>

          <p className="contact">simarkareer15[at]gmail[dot]com</p>

          <nav aria-label="Social links">
            <ul className="links-list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  {link.download ? (
                    <a href={link.href} download>
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  )}
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
                {isRecentDate(paper.month, paper.year) && <span className="new-badge">new</span>}
                {paper.month} {paper.year}
              </span>
              <span className="highlighted-paper-title">{paper.title}</span>
              <span className="paper-actions highlighted-paper-actions">
                {!hideHomeBlogPostFor.has(paper.id) && paper.blogUrl ? (
                  <a href={paper.blogUrl} target="_blank" rel="noopener noreferrer">
                    {paper.id === "egomimic" ? "Meta AI Blog" : paper.id === "egoverse" ? "Website" : "Blog post"}
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

      <section className="paper-section" aria-labelledby="news-heading">
        <div className="section-header">
          <h2 id="news-heading">News</h2>
        </div>

        <ul className="talk-list" aria-label="News">
          {newsItems.map((item) => (
            <li key={`${item.dateLabel}-${item.text}`} className="talk-item">
              <span className="talk-date">
                {isRecentDateLabel(item.dateLabel) && <span className="new-badge">new</span>}
                {item.dateLabel}
              </span>
              <span className="talk-text">{item.text}</span>
              {item.links?.map((link) => (
                <a
                  key={link.href}
                  className="talk-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
