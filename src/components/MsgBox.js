import React from 'react';
import Modal from "react-bootstrap/Modal";

const INFO = 'info';
const WARNING = 'warning';
const ERROR = 'error';

class MsgBox extends React.Component {
    render(){
        let title = 'MsgBox';
        if(this.props.title){
            title = this.props.title;
        }

        let cssClasses = 'm-0 px-2 py-0 alert ';
        if(this.props.type){
            switch(this.props.type.toLowerCase()){
                case INFO:
                    cssClasses += 'alert-info';
                    break;
                case WARNING:
                    cssClasses += 'alert-warning';
                    break;
                case ERROR:
                    cssClasses += 'alert-danger';
                    break;
                default:
                    cssClasses += 'alert-primary';
                    break; 
            }    
        }
        else{
            cssClasses += 'alert-primary';
        }

        if(this.props.message){
            return (
                <Modal show={true} onHide={this.props.closeMessage} centered>
                    <Modal.Header className={cssClasses} closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="m-0 p-2">{this.props.message}</Modal.Body>
                </Modal>
            );
        }
        else{
            return null;
        }
    }
}

export default MsgBox;