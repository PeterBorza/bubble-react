import { useState, useEffect } from 'react';

const useFetch = (url, fetchTime) => {
	const [bubbleData, setBubbleData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const getBubbles = async () => {
			try {
				const response = await fetch(url);
				if (response.status !== 200) {
					throw new Error('try "yarn run serve"');
				}
				const data = await response.json();
				setBubbleData(data);
				return data;
			} catch (error) {
				console.log(error.message, 'no fetch');
			} finally {
				setIsLoading(false);
			}
		};
		setTimeout(() => getBubbles(), fetchTime);
		// getBubbles();
	}, [url, fetchTime]);
	return [bubbleData, setBubbleData, isLoading];
};

export default useFetch;
