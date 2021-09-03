import { createContext, useState } from 'react';

export const BubbleContext = createContext(null);

export const BubbleContextProvider = ({ children }) => {
	const [bubble, setBubble] = useState({
		left: 50,
		top: 50,
		size: 200,
		opacity: 0.5,
	});
	return (
		<BubbleContext.Provider value={[bubble, setBubble]}>
			{children}
		</BubbleContext.Provider>
	);
};
