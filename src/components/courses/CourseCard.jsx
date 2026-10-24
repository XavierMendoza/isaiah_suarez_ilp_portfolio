import { Link } from 'react-router-dom';
export default function CourseCard({ course, index = 0 }) {
 return <Link to={`/courses/${course.slug}`} className={`course-card accent-${index % 4}`}><div className="card-top"><span className="course-code">{course.code}</span><span className="card-arrow" aria-hidden="true">↗</span></div><h3>{course.title}</h3><div className="card-bottom"><span>{course.category}</span><span>{course.units} {course.units === 1 ? 'unit' : 'units'}</span></div></Link>;
}
