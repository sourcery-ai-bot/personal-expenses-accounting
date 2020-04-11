import React, { Component } from 'react';
import pcIcon from '../../../public/images/app_development_SVG.svg';
import Main from '../App.scss';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

class LoginFormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		await fetch("/login", {
			method: "POST",
			redirect: "follow",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(this.state),
		}).then((response) => {
			if (response.status == 200) {
				// redirect to dashboard
				this.props.history.push("/dashboard");
			}
		});
	};

	render() {
		return (
			<div className={Main.flexWrapper}>
				<div className={Main.imageBlock}>
					<img src={pcIcon} alt="" />
				</div>
				<div className={Main.formCard}>
					<Welcome />
					<LoginForm
						handleInputChange={this.handleInputChange}
						handleSubmit={this.handleSubmit}
						email={this.state.email}
						password={this.state.password}
					/>
				</div>
			</div>
		);
	}
}

export default LoginFormContainer;