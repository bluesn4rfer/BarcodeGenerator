import React from 'react';

let JsBarcode = require('jsbarcode');

const UPC_A = "UPC-A";
const UPC_E = "UPC-E";
const EAN_13 = "EAN-13";
const EAN_8 = "EAN-8";

class GenerateBarcode extends React.Component {
    constructor(props) {
		super(props);

		this.showBarcode = this.showBarcode.bind(this);
	}

    showBarcode(){
        console.log('GenerateBarcode.js showBarcode() invoked');
        console.log('GenerateBarcode.js showBarcode() this.props: ' + JSON.stringify(this.props));

        if(document.getElementById(this.props.id) && this.props.data){
            switch(this.props.type){
                case UPC_A:
                    JsBarcode(document.getElementById(this.props.id), this.props.data, {format: "UPC"});
                    break;
                case UPC_E:
                    JsBarcode(document.getElementById(this.props.id), this.props.data, {format: "UPC"});
                    break;
                case EAN_13:
                    JsBarcode(document.getElementById(this.props.id), this.props.data, {format: "EAN13"});
                    break;
                case EAN_8:
                    JsBarcode(document.getElementById(this.props.id), this.props.data, {format: "EAN8"});
                    break;
                default:
                    JsBarcode(document.getElementById(this.props.id), this.props.data, {format: "CODE128"}); 
            }    
        }
    }

    componentDidMount(){
        console.log('GenerateBarcode.js componentDidMount() invoked');
        this.showBarcode();
    }

    componentDidUpdate(){
        console.log('GenerateBarcode.js componentDidUpdate() invoked');
        this.showBarcode();
    }

    render(){
        return (
            <svg id={this.props.id}></svg>
        );
    }
}

export default GenerateBarcode;