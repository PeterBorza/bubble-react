import { Link } from 'react-router-dom';

import { msg } from '../../context';

import { form, button_margin } from './Form.module.scss';

import { Button, Loader } from '../../utils';

const Form = ({ onSubmit, isLoading, children }) => {
	return (
		<form className={form} onSubmit={onSubmit}>
			{children}

			<Button type='submit' btnClassName={button_margin}>
				{isLoading ? <Loader /> : msg.createButton}
			</Button>
			<Link to='/bubbles'>{msg.linkToBubbles}</Link>
		</form>
	);
};

export default Form;
