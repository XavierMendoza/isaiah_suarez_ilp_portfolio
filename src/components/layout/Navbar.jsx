import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
 const [open, setOpen] = useState(false);
 return <header className="site-header"><div className="container nav-inner"><Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Isaiah Suarez home"><span className="monogram">is<span>·</span></span><span>Isaiah Suarez<span className="brand-sub">COMPUTER SCIENCE · CSUMB</span></span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button><nav id="main-nav" className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation" onKeyDown={e => { if(e.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle').focus(); } }}>{[['/','Home'],['/about','About'],['/courses','Courses']].map(([url,label]) => <NavLink end={url === '/'} key={url} to={url} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav><span className="nav-note"><i /> A learning journey</span></div></header>;
}
