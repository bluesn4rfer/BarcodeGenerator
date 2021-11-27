import React from 'react';
import GenerateForm from './components/GenerateForm';
import GenerateBarcode from './components/GenerateBarcode';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			barcode: ''
		}

		this.updateBarcode = this.updateBarcode.bind(this);
	}

    updateBarcode(formState){
		console.log('App.js updateBarcode(formState): invoked');
		console.log('App.js updateBarcode() formState: ' + JSON.stringify(formState));
		if(formState){
			console.log('App.js updateBarcode() formState.input_barcode: ' + formState.input_barcode);
			this.setState({
				barcode: formState.input_barcode
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
				<GenerateBarcode id='barcode' data={this.state.barcode} />
				</div>
			</div>
		);  
	}
}

export default App;
