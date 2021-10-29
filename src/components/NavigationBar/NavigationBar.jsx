// import React, { useState } from 'react';

import { msg } from "../../context";

import { Neon } from "../utils";

import { flags } from "../../context/fetchTimes";

import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
	// const [isLoading, setIsLoading] = useState(false);
	// const btnHandler = () => {
	// 	setIsLoading(!isLoading);
	// 	document.title = msg.documentTitle;
	// };
	return (
		<nav className={styles.nav_bar}>
			<h1>{msg.headerTitle}</h1>
			{flags.NAV_FEATURE && (
				<Neon
					title={msg.loadButton}
					// handler={btnHandler}
				/>
			)}
		</nav>
	);
};

export default NavigationBar;
