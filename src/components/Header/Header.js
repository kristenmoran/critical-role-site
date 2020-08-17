import React, { useState } from 'react';
import './Header.css';

function Header() {
	const [isToggled, setToggled] = useState(false);
	const navClassNames = isToggled ? 'nav-links nav-active' : 'nav-links';
	// navLinks.forEach((links, index) => {
	// 	if (links.style.animation) {
	// 		links.style.animation = ''
	// 	} else {
	// 		links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}`
	// 	}
	// })

	return (
		<nav>
			<div className='logo'>
				<h4>Critical Role</h4>
			</div>
			<ul className={navClassNames}>
				<li>
					<a href='#'>Videos</a>
				</li>
				<li>
					<a href='#'>Podcasts</a>
				</li>
				<li>
					<a href='#'>Schedule</a>
				</li>
				<li>
					<a href='#'>Blog</a>
				</li>
			</ul>
			<div
				className='burger'
				onClick={() => {
					setToggled(!isToggled);
				}}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
}

export default Header;
