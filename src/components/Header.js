import React from "react";
import * as styles from "./Header-styles.module.css";
import { Link } from "gatsby";

const Header = () => {
	return (
		<div className={styles.main}>
			<nav className={styles.navbar}>
				<ul>
					<li><a href="#problem">Why</a></li>
					<li><a href="#solution">How it works</a></li>
					<li><a href="#demo">Demo</a></li>
				</ul>
			</nav>
			<div className={styles.logo}>
				<img src={require("../images/logo.png").default} alt="" />
			</div>

			<div className={styles.getStartedButton}>
				<nav className={styles.navbar2}>
					<ul>
						<li><a href="#next">What's Next</a></li>
						<li><a href="#citations">Citations</a></li>
					</ul>
				</nav>
				<a href="#tutorial">Get Started</a>
			</div>
		</div>
	);
}

export default Header;