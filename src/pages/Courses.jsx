import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';
export default function Courses() {
 return <><section className="directory-header"><div className="container"><span className="eyebrow">THE CURRICULUM / THE POSSIBILITIES</span><h1>Every course.<br /><span>A new perspective.</span></h1><div className="directory-intro"><p>Explore the ideas and disciplines that shape my Computer Science education at CSUMB.</p><span className="course-count"><b>14</b> REQUIRED COURSES</span></div></div></section><section className="section container"><div className="directory-toolbar"><h2>Course directory</h2><span>14 courses · Learning reflections</span></div><div className="course-grid">{courses.map((c,i)=><CourseCard key={c.slug} course={c} index={i}/>)}</div><p className="section-note">Explore learning reflections for the non-capstone courses. Capstone work and supporting materials will be showcased as the project progresses.</p></section></>;
}
