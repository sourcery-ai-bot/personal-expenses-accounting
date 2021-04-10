import React, { Component } from "react";
import AddNewReceiptContainer from "./AddNewReceipt/AddNewReceiptContainer";
import dashboard from "./dashboard.module.scss";
class Header extends Component {
	render() {
		return (
			<div className={dashboard.heading}>
				<h1>Expenses</h1>
				<div className={dashboard.divider}></div>
				<div className={dashboard.filterandexpens}>
					<AddNewReceiptContainer
						showModal={this.props.showModal}
						imagePreviewHandler={this.props.imagePreviewHandler}
						imagePreview={this.props.imagePreview}
					/>
				</div>
				<div className={dashboard.divider}></div>
			</div>
		);
	}
}

export default Header;
