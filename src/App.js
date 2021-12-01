import React from 'react';
import ErrorBoundary from './components/ErrorBoundry';
import MsgBox from './components/MsgBox';
import GenerateForm from './components/GenerateForm';
import GenerateBarcode from './components/GenerateBarcode';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			barcode: '',
			barcode_type: 'CODE128'
		}

		this.closeMessage = this.closeMessage.bind(this);
		this.updateBarcode = this.updateBarcode.bind(this);
	}

	closeMessage(){
		this.setState({
			errorMessage: ''
		});
	}

    updateBarcode(formState){
		console.log('App.js updateBarcode(formState): invoked');
		console.log('App.js updateBarcode() formState: ' + JSON.stringify(formState));
		if(formState){
			if(!formState.input_barcode_type){
				this.setState({
					errorMessage: 'Please select a barcode type'
				});
				return false;
			}

			console.log('App.js updateBarcode() formState.input_barcode: ' + formState.input_barcode);
			this.setState({
				barcode: formState.input_barcode,
				barcode_type: formState.input_barcode_type
			}, () => {
				console.log('App.js updateBarcode() this.setState() finished');
				console.log('App.js updateBarcode() this.state: ' + JSON.stringify(this.state));
			});
		}
    }

	render(){
		let form = {
			fields: [
				{
					name: 'input_barcode_type',
					label: 'Barcode Type',
					type: 'btnselect',
					required: true,
					options: [
						'UPC-A',
						'UPC-E',
						'EAN-13',
						'EAN-8',
						'CODE128'
					]
				},
				{
					name: 'input_barcode',
					label: 'Barcode',
					type: 'number',
					required: true
				}
			],
			primaryAction: this.updateBarcode,
			primaryActionLabel: 'Generate'
		};	

		return (
			<div className="container p-3">
				<GenerateForm form={form} />
				<div class='d-flex justify-content-center'>
				<ErrorBoundary>
					<GenerateBarcode id='barcode' data={this.state.barcode} type={this.state.barcode_type} />
				</ErrorBoundary>
				</div>
				{this.state.errorMessage ? <MsgBox title='ERROR' message={this.state.errorMessage} closeMessage={this.closeMessage} /> : null}
			</div>
		);  
	}
}

export default App;
