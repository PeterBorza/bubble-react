import { leftRange, range } from './Input.module.scss';

const Input = ({ name, min, max, step, onChange, value }) => {
	return (
		<>
			<label htmlFor={name}>{name}</label>
			<span className={leftRange}>{value}</span>
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
		</>
	);
};

export default Input;
