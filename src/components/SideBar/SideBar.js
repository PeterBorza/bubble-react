import { container } from './SideBar.module.scss';

import classNames from 'classnames';

const SideBar = ({ children, outerClass }) => {
	const classes = classNames(container, outerClass);
	return <div className={classes}>{children}</div>;
};

export default SideBar;
