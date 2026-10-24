import { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { courses } from '../../data/courses';
export default function Layout() {
 const { pathname } = useLocation(); const main = useRef(null); const previous = useRef(pathname);
 useEffect(() => { const course = courses.find(c => pathname === `/courses/${c.slug}`); const title = course ? `${course.code} — ${course.title}` : pathname === '/' ? '' : pathname === '/about' ? 'About' : pathname === '/courses' ? 'Courses' : 'Page not found'; document.title = `${title ? title + ' | ' : ''}Isaiah Suarez | ILP Portfolio`; window.scrollTo(0, 0); if(previous.current !== pathname) main.current?.focus({ preventScroll: true }); previous.current = pathname; }, [pathname]);
 return <><a className="skip-link" href="#main">Skip to content</a><Navbar key={pathname} /><main id="main" tabIndex="-1" ref={main}><Outlet /></main><footer><div className="container footer-inner"><Link to="/" className="footer-name">Isaiah Suarez<span>CSUMB Computer Science</span></Link><p>Curiosity. Practice. Progress.</p><span>© {new Date().getFullYear()} · ILP Portfolio</span></div></footer></>;
}
