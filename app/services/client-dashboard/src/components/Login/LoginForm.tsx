import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import buttonStyle from '../ui-elements/button.module.scss';
import inputStyle from '../ui-elements/input.module.scss';
import login from '../ui-elements/login.module.scss';

export function LoginForm() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setPassword(e.target.value);
	};

	const submitForm = async (e: any): Promise<void> => {
		e.preventDefault();
		await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		}).then((response) =>
			response
				.json()
				.then((data) => ({ status: response.status, body: data }))
				.then((res) => {
					if (res.status == 200) {
						//set users id to localstorage
						localStorage.setItem('id', res.body.id);
						history.push('/dashboard');
					}
					// this.setState({ errors: res.body.status });
				})
		);
	};

	return (
		<form method="POST" onSubmit={submitForm}>
			<div className={inputStyle.inputContainer}>
				<input
					type="text"
					id="email"
					className={inputStyle.input}
					name="email"
					required
					autoComplete="off"
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
					className={inputStyle.input}
					name="password"
					required
					autoComplete="off"
					value={password}
					onChange={handlePasswordChange}
				/>
				<label htmlFor="password">Password</label>
				<div className={inputStyle.bar}></div>
			</div>
			<div className={login.loginBlock}>
				<div className={login.rememberMeBlock}>
					<input type="checkbox" id="remember" name="remember" />
					<label htmlFor="remember">Remember me</label>
				</div>
				<a href="#">Forgot password?</a>
			</div>
			<button className={buttonStyle.button}>Login</button>
			<div className={login.loginFooter}>
				<p>
					Don’t have an account?
					<Link to="/register" className="nav-link">
						Click here
					</Link>
				</p>
			</div>
		</form>
	);
}