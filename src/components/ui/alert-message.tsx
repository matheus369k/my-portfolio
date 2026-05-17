'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AlertMessage() {
	return (
		<ToastContainer
			position='top-right'
			autoClose={5000}
			limit={3}
			style={{
				fontFamily: 'var(--font-chackra-petch)',
				fontWeight: 'bold',
				zIndex: 50,
			}}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='dark'
		/>
	);
}
