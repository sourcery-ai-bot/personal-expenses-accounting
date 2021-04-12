import React, { useState } from 'react';
import { useHistory } from 'react-router';
import buttonStyle from '../ui-elements/button.module.scss';
import inputStyle from '../ui-elements/input.module.scss';

function RegistrationForm() {
	const history = useHistory();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [error, setError] = useState('');

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleRepeatPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setRepeatPassword(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = { name, email, password, repeatPassword };
		console.log(data);

		await fetch(`${process.env.REACT_APP_SERVER}/register`, {
			method: 'POST',
			redirect: 'follow',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
			body: JSON.stringify(data),
		}).then((response) =>
			response
				.json()
				.then((data) => ({ status: response.status, body: data.status }))
				.then((res) => {
					if (res.status == 200) {
						history.push('/dashboard');
						return;
					}
					setError(res.body);
				})
		);
	};

	return (
		<form method="POST" onSubmit={submitForm}>
			<div className={inputStyle.inputContainer}>
				<input
					type="text"
					id="name"
					name="name"
					required
					className={inputStyle.input}
					value={name}
					onChange={handleNameChange}
				/>
				<label htmlFor="name"> Name</label>
				<div className={inputStyle.bar}></div>
			</div>
			<div className={inputStyle.inputContainer}>
				<input
					type="text"
					id="email"
					name="email"
					required
					className={inputStyle.input}
					value={email}
					onChange={handleEmailChange}
				/>
				<label htmlFor="email">Email</label>
				<div className={inputStyle.bar}></div>
			</div>
			<div className={inputStyle.inputContainer}>
				<input
					type="password"
					id="password"
					name="password"
					required
					className={inputStyle.input}
					value={password}
					onChange={handlePasswordChange}
				/>
				<label htmlFor="password">Password</label>
				<div className={inputStyle.bar}></div>
			</div>
			<div className={inputStyle.inputContainer}>
				<input
					type="password"
					id="repeat-password"
					name="repeatPassword"
					required
					className={inputStyle.input}
					value={repeatPassword}
					onChange={handleRepeatPasswordChange}
				/>
				<label htmlFor="repeat-password">Repeat Password</label>
				<div className={inputStyle.bar}></div>
			</div>
			<button className={buttonStyle.button}>Create Account</button>
		</form>
	);
}

export default RegistrationForm;
