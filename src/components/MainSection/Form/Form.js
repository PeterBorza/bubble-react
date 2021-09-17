import { Link } from 'react-router-dom';

import { msg } from '../../context';

import { form, button_margin } from './Form.module.scss';

import { Button, Loader } from '../../utils';

const Form = ({ onSubmit, isLoading, children }) => {
	return (
		<form className={form} onSubmit={onSubmit}>
			{children}

			<Link to='/bubbles'>{msg.linkToBubbles}</Link>
			<Button type='submit' btnClassName={button_margin}>
				{isLoading ? <Loader /> : msg.createButton}
			</Button>
		</form>
	);
};

export default Form;
