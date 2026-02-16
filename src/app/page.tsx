import Image from "next/image";

type SocialLink = {
  label: string;
  href: string;
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

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="intro-heading">
        <div>
          <h1 id="intro-heading">Simar Kareer</h1>
          <p>
            I&apos;m a fourth year PhD student at Georgia Tech advised by Judy
            Hoffman and Danfei Xu. I also did my undergrad at GT
            (2018-2022). I interned at{" "}
            <a href="https://www.physicalintelligence.company/" target="_blank" rel="noopener noreferrer">
              Physical Intelligence
            </a>
            {" "}Feb-Oct 2025.
          </p>
          <p>
            My research focuses on computer vision and robotics. I aim to
            develop skillful robots that adapt to ever changing environments. I
            develop algorithms for generalization and adaptation which leverage
            scalable data sources, most recently, egocentric human videos.
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
    </main>
  );
}
