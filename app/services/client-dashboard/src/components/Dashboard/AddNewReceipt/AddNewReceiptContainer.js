import React, { Component } from 'react';
import Toast from "../ui-components/Toast";
import AddNewReceipt from './AddNewReceipt';

class AddNewReceiptContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toastText: ''
		};
		this.inputFileRef = React.createRef();
		this.notificationRef = React.createRef();
	}

	// Trigger click input file when click is made on link
	uploadInputHandler = (e) => {
		e.preventDefault();
		this.inputFileRef.current.click();
	};

	onImageHandler = (e) => {
		e.preventDefault();
		let file = e.target.files[0];
		this.notificationRef.current.showToast();
		this.setState({ toastText: "Receipt is being recognized."});
		this.readFile(file).then(function(base64string) {
			const img = base64string.split(",")[1];
			fetch(`${process.env.REACT_APP_RECOGNITION_API}/recognize`, {
				method: 'POST',
				body: JSON.stringify({ image: img, id: localStorage.getItem('id') }),
			})
				.then((response) => {
					if (response.status == 200) {
						console.log(response.status);
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		});
	};


	readFile = (file) => {
		return new Promise(function(resolve, reject) {
			let myReader = new FileReader();
			myReader.onloadend = function(e) {
				resolve(myReader.result);
			};
			myReader.readAsDataURL(file);
		});
	}

	handleFormUpload = () => {
		// To Do: fix image
		const image = '';
		 this.readFile(image).then(function(base64string) {
			const img = base64string.split(",")[1];
			this.setState({ image: img });
			fetch(`${process.env.REACT_APP_RECOGNITION_API}/recognize`, {
				method: 'POST',
				body: JSON.stringify(this.state),
			})
				.then((response) => response.json())
				.catch(function (error) {
					console.log(error);
				});
		});
	};

	render() {
		return (
			<div>
				<AddNewReceipt
					inputFileRef={this.inputFileRef}
					uploadInputHandler={this.uploadInputHandler}
					onImageHandler={this.onImageHandler}
					showModal={this.props.showModal}
				/>
				<Toast text={this.state.toastText} ref={this.notificationRef} />
			</div>
		);
	}
}

export default AddNewReceiptContainer;