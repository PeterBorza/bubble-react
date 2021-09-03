import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BubbleContextProvider } from './components/context/bubbleContext';

ReactDOM.render(
	<React.StrictMode>
		<BubbleContextProvider>
			<App />
		</BubbleContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
