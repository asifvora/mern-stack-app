import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav className="navbar navbar-inverse navbar-top">
		<div className="container-fluid">
			<div className="navbar-header">				
				<Link className="navbar-brand" to="/">Book Shop</Link>
			</div>
		</div>
	</nav>
);

export default Nav;
