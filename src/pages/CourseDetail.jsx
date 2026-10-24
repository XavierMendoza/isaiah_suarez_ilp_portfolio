import { Link, useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import EvidenceSection from '../components/courses/EvidenceSection';
import NotFound from './NotFound';
export default function CourseDetail() {
 const {slug}=useParams();const index=courses.findIndex(c=>c.slug===slug);const course=courses[index];
 if(!course) return <NotFound />;
 const previous=courses[index-1], next=courses[index+1];
 return <><section className="detail-header"><div className="container"><Link className="back-link" to="/courses">← Back to All Courses</Link><div className="detail-meta"><span>{course.code}</span><span>{course.units} {course.units===1?'unit':'units'}</span><span>{course.category}</span></div><h1>{course.title}</h1></div></section><div className="container detail-layout"><div><section className="description-section"><span className="eyebrow">THE COURSE AT A GLANCE</span><h2>Course Description</h2><p className="catalog-description">{course.description}</p><p className="section-note">Supplied CSUMB catalog description.</p></section><EvidenceSection course={course}/></div><aside className="topics-panel"><span className="eyebrow">LEARNING AREAS</span><h2>Topics Covered</h2><div className="topic-tags">{course.topics.map(t=><span key={t}>{t}</span>)}</div><p>Topics reflect the catalog description. Personal coursework evidence will be added separately.</p>{course.isCapstone && <p>Capstone evidence may remain pending until Week 16 under the instructor’s requirements.</p>}</aside></div><nav className="container course-pagination" aria-label="Course navigation">{previous ? <Link to={`/courses/${previous.slug}`}><span>← Previous Course</span><b>{previous.code}</b><small>{previous.title}</small></Link> : <div/>}{next ? <Link to={`/courses/${next.slug}`}><span>Next Course →</span><b>{next.code}</b><small>{next.title}</small></Link> : <div/>}</nav></>;
}
