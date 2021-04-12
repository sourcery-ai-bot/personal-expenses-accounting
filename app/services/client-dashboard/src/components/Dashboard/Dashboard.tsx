import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { MyContext } from '../globalContext';
import cards from './Cards/cards.module.scss';
import PieChart from './Charts/PieChart';
import YearChart from './Charts/YearChart';
import dashboard from './dashboard.module.scss';
import Header from './Header';
import ModalWindow from './ModalWindow';
import Nav from './Nav/Nav';
import nav from './Nav/side-nav.module.scss';

export default function Dashboard() {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		isLoading: true,
	// 		show: false,
	// 		data: {},
	// 		preview: false,
	// 		inputData: {},
	// 		usersReceipts: {}
	// 	};
	// 	this.modalRef = React.createRef();
	// 	this.receiptSectRef = React.createRef();
	// }

	const [userReceipts, setUserRceipts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const [inputData, setInputData] = useState({});
	const [preview, setPreview] = useState(false);
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		// this.setState({ show: false });
		// this.setState({ inputData: {} });
		// this.modalRef.current.resetInputFields();
		// this.receiptSectRef.current.setCurrentReceiptState();
		// this.modalRef.current.imagePreviewHandler();
	};

	const handleShow = () => {
		// setOpen(true);
		// let receipt = this.receiptSectRef.current.getCurrentReceiptState();
		// if (Object.keys(receipt).length > 0) {
		// this.setState({ inputData: receipt }, () => {
		// 	this.modalRef.current.setInputFields();
		// });
		// setInputData(receipt);
		// }
	};

	const Delete = (props: any) => {
		return (
			<Button variant="danger" onClick={props.delete}>
				Delete
			</Button>
		);
	};

	useEffect(() => {
		const id = localStorage.getItem('id');
		fetchData(`${process.env.REACT_APP_SERVER}/user/${id}`, 'GET');
	}, []);

	const postData = async (url: string, method: string, data: any) => {
		await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const fetchData = async (url: string, method: string) => {
		await fetch(url, {
			method: method,
			cache: 'no-cache',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				setUserData(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const deleteReceipt = async () => {
		// const receiptId = inputData.id;
		const receiptId = 1;
		await fetch(`${process.env.REACT_APP_SERVER}/receipt/${receiptId}`, {
			method: 'DELETE',
			mode: 'cors',
		})
			.then((response) => response.json())
			.catch((error) => {
				console.error('Error:', error);
			});
		handleClose();
	};

	return (
		<MyContext.Provider value={[open, setOpen]}>
			<div className={nav.container}>
				{isLoading ? (
					<Spinner
						animation="border"
						variant="primary"
						size="sm"
						role="status"
						aria-hidden="true"
						className={dashboard.spinner}
					/>
				) : (
					<main>
						<Nav userData={userData} />
						<ModalWindow
							// handleFormUpload={handleFormUpload}
							// onChangeHandler={onChangeHandler}
							// show={open}
							handleClose={handleClose}
							inputData={inputData}
							// ref={this.modalRef}
							postData={postData}
						>
							{Object.keys(inputData).length > 0 ? (
								<Delete delete={deleteReceipt} />
							) : null}
						</ModalWindow>
						<Header
							showModal={open}
							// imagePreviewHandler={imagePreviewHandler}
							imagePreview={preview}
						/>
						{/* <SmallCard receiptData={receipts} /> */}
						<div className={cards.chartsWrapper}>
							<YearChart />
							<PieChart />
						</div>

						{/* <Transactions
						showModal={handleShow}
						receipts={data}
						// ref={receiptSectRef}
					/> */}
					</main>
				)}
			</div>
		</MyContext.Provider>
	);
}
