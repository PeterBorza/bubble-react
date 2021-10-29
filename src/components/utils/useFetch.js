import { useEffect, useState } from "react";

const useFetch = url => {
	const [bubbleData, setBubbleData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getBubbles = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(url);
				if (response.status !== 200) {
					throw new Error('try "yarn run serve"');
				}
				const data = await response.json();
				setBubbleData(data);
				return data;
			} catch {
				console.log("no fetch");
			} finally {
				setIsLoading(false);
			}
		};
		getBubbles();
	}, [url]);

	return { bubbleData, setBubbleData, isLoading };
};

export default useFetch;
