import { papersNewestFirst } from "@/data/papers";

function renderAuthor(author: string) {
  if (author === "Simar Kareer") {
    return <strong className="author-self">{author}</strong>;
  }

  return author;
}

export default function PapersPage() {
  return (
    <main className="page-shell papers-page-shell">
      <section aria-labelledby="all-papers-heading" className="paper-section">
        <div className="section-header">
          <h1 id="all-papers-heading">All Papers</h1>
        </div>

        <ol className="paper-list" aria-label="All papers">
          {papersNewestFirst.map((paper) => (
            <li key={paper.id} className="paper-item">
              <p className="paper-meta">
                {paper.month} {paper.year} · {paper.venue}
                {paper.award ? (
                  <>
                    {" "}· <span className="paper-award-tag">{paper.award}</span>
                  </>
                ) : null}
              </p>
              <h2>{paper.title}</h2>
              <p className="paper-authors">
                {paper.authors.map((author, index) => (
                  <span key={`${paper.id}-${author}`}>
                    {index > 0 ? ", " : ""}
                    {renderAuthor(author)}
                  </span>
                ))}
              </p>

              <p className="paper-actions">
                {[
                  { label: "Paper", href: paper.paperUrl },
                  ...(paper.blogUrl ? [{ label: "Blog post", href: paper.blogUrl }] : []),
                  ...(paper.tweetUrl ? [{ label: "Tweet", href: paper.tweetUrl }] : []),
                  ...(paper.newsLinks ?? []),
                ].map((link, index) => (
                  <span key={`${paper.id}-${link.href}`}>
                    {index > 0 ? <span aria-hidden="true"> · </span> : null}
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
