/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Context } from 'helpers';
import { GlobalStyle } from 'helpers/GlobalStyle';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Context>
			<BrowserRouter basename='/'>
				<App />
				<Toaster
					position='top-right'
					reverseOrder={false}
					gutter={8}
					toastOptions={{
						duration: 5000,
						style: {
							background: '#fdfbea',
							color: '#000000',
						},
					}}
				/>
				<GlobalStyle />
			</BrowserRouter>
		</Context>
	</React.StrictMode>
);
