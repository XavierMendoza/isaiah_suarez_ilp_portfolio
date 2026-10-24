// Evidence: { id, type: 'pdf'|'image'|'source'|'link'|'reflection', title, url?, text?, alt? }
function validUrl(value) {
 return typeof value === 'string' && (/^https?:\/\//i.test(value) || /^\/(?!\/)/.test(value));
}
export default function EvidenceSection({ course }) {
 return (
  <section className="evidence-section" aria-labelledby="evidence-heading">
   <h2 id="evidence-heading">Coursework &amp; Evidence</h2>
   {course.isCapstone && course.evidence.length === 0 ? (
    <p>Capstone work and supporting materials will be showcased as the project progresses.</p>
   ) : (
    <div className="evidence-list">
     {course.evidence.map(item => (
      <article className="evidence-item" key={item.id}>
       <h3>{item.title}</h3>
       {item.type === 'image' && validUrl(item.url) && <img src={item.url} alt={item.alt || item.title} loading="lazy" />}
       {item.text && item.text.split(/\n\s*\n/).map((paragraph, index) => <p className="reflection" key={index}>{paragraph}</p>)}
       {item.type !== 'reflection' && validUrl(item.url) && (
        <a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">
         Open {item.title} <span aria-hidden="true">↗</span><span className="sr-only"> (new tab)</span>
        </a>
       )}
      </article>
     ))}
    </div>
   )}
  </section>
 );
}
