import { leftRange, range, inputWrapper } from './Input.module.scss';

const Input = ({ name, min, max, step, onChange, span, value }) => {
	return (
		<div className={inputWrapper}>
			<label htmlFor={name}>{name}</label>
			<span className={leftRange}>
				{value}
				{span}
			</span>
			<input
				className={range}
				type='range'
				name={name}
				min={min}
				max={max}
				value={value}
				onChange={onChange}
				step={step}
			/>
		</div>
	);
};

export default Input;
