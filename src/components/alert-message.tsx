import type { ReturnInviteMail } from '@/_types';
import { CircleCheckBig, CircleX } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AlertMessage() {
		return (
			<ToastContainer
				position='top-right'
				autoClose={10000}
				limit={3}
				style={{
					fontFamily: 'var(--font-chackra-petch)',
					fontWeight: 'bold',
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
