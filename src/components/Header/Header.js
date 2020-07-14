import React, { useState } from 'react';
import './Header.css';

function Header() {
	const [isToggled, setToggled] = useState(false);

	let menuClick = () => setToggled(!isToggled);

	return (
		<nav>
			<div className='logo'>
				<h4>Critical Role</h4>
			</div>
			<ul className='nav-links'>
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
			<div className='burger' onClick={menuClick} open={isToggled}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
}

export default Header;
