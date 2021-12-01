import React from 'react';

const FIELDSET = "fieldset";
const HIDDEN = "hidden";
const CHECKBOX = "checkbox";
const RADIO = "radio";
const TEXTAREA = "textarea";
const SELECT = "select";
const BTNSELECT = "btnselect";
const RANGE = "range";
const STATE = "state";
const BUTTON = "button";
const SUBMIT = "submit";
const RESET = "reset";
const IMAGE = "image";

class GenerateForm extends React.Component{
        constructor(props) {
                super(props);

                this.state = {};

                this.handleChange = this.handleChange.bind(this);
                this.GenerateFieldData = this.GenerateFieldData.bind(this);
                this.submitForm = this.submitForm.bind(this);
        }

        handleChange(event){
                console.log('GenerateForm.js handleChange(event): invoked');
                console.log('GenerateForm.js handleChange() ' + event.target.name + ': ' + event.target.value);
                this.setState({
                        [event.target.name]: event.target.value
                },() => {
                        console.log('GenerateForm.js handleChange() this.setState() finished');
                });
        }

        handleBtnSelectChange(input_name,input_value){
                this.setState({
                        [input_name]: input_value
                });
        }

        submitForm(event){
                console.log('GenerateForm.js submitForm(event): invoked');
                event.preventDefault();
                console.log('GenerateForm.js submitForm() event.preventDefault() finished');

                if(this.props.form.primaryAction){
                        console.log('GenererateForm.js submitForm() this.state: ' + JSON.stringify(this.state));
                        this.props.form.primaryAction(this.state);
                }
        }

        GenerateFieldData(field){
                switch (field.type.toLowerCase()){
                        case FIELDSET:
                                let field_data = field.fields.map((record,index) => {
                                        return this.GenerateFieldData(record);
                                });

                                return (
                                        <fieldset className={field.class ? 'mb-1 p-2 ' + field.class : 'mb-1 p-2'}>
                                                <legend>{field.label}</legend>
                                                {field_data}
                                        </fieldset>
                                );
                        case HIDDEN:
                                return (
                                        <input id={field.name} name={field.name} type={field.type} />
                                );
                        case CHECKBOX:
                                return (
                                        <div className='form-check form-check-inline form-switch'>
                                                <input className={field.class ? 'form-check-input ' + field.class : 'form-check-input'} id={field.name} name={field.name} type={field.type} />
                                                <label className='form-check-label' for={field.name}>{field.label}</label>
                                        </div>
                                );
                        case RADIO:
                                return (
                                        <div className='form-check form-check-inline'>
                                                <input className={field.class ? 'form-check-input ' + field.class : 'form-check-input'} id={field.name} name={field.name} type={field.type} />
                                                <label className='form-check-label' for={field.name}>{field.label}</label>
                                        </div>
                                );
                        case TEXTAREA:
                                return (
                                        <div className='mb-1 form-floating'>
                                                <textarea className={field.class ? 'form-control ' + field.class : 'form-control'} placeholder='Textarea' id={field.name} name={field.name}></textarea>
                                                <label className='textarea-label' for={field.name}>{field.label}</label>
                                        </div>
                                );
                        case SELECT:
                                let options = field.options.map((option,index) => (
                                        <option>{option}</option>
                                ));

                                return (
                                        <div className='mb-1 form-floating'>
                                                <select className={field.class ? 'form-select ' + field.class : 'form-select'} id={field.name} name={field.name}>
                                                        <option value="">--Please Select--</option>
                                                        {options}
                                                </select>
                                                <label for={field.name}>{field.label}</label>
                                        </div>
                                );
                        case BTNSELECT:
                                let btnoptions = field.options.map((option,index) => (
                                        <button type='button' className={this.state[field.name] == option ? 'mx-1 flex-fill btn btn-primary' : 'mx-1 flex-fill btn btn-secondary'} onClick={()=>this.handleBtnSelectChange(field.name,option)}>{option}</button>
                                ));

                                return (
                                        <fieldset className='mb-1 p-1'>
                                                <legend>{field.label}</legend>
                                                <div className='mb-1 d-flex flex-wrap'>
                                                        {btnoptions}
                                                </div>
                                        </fieldset>
                                );
                        case STATE:
                                return (
                                        <div className='mb-1 form-floating'>
                                                <select className='form-select' id={field.name} name={field.name}>
                                                        <option value="">--Please Select--</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                </select>
                                                <label for={field.name}>{field.label}</label>
                                        </div>
                                );
                        case IMAGE:
                                return null;
                        case BUTTON:
                                return null;
                        case SUBMIT:
                                return null;
                        case RESET:
                                return null;
                        case RANGE:
                                return (
                                        <div className='mb-1'>
                                                <input className={field.class ? 'form-range ' + field.class : 'form-range'}  id={field.name} name={field.name} type={field.type} />
                                                <label for={field.name}>{field.label}</label>
                                        </div>
                                );
                        default:
                                if(field.required){
                                        return (
                                                <div className='mb-1 form-floating'>
                                                        <input className={field.class ? 'form-control ' + field.class : 'form-control'}  id={field.name} name={field.name} type={field.type} onChange={this.handleChange} required />
                                                        <label for={field.name}>{field.label}</label>
                                                </div>
                                        );
                                }
                                else{
                                        return (
                                                <div className='mb-1 form-floating'>
                                                        <input className={field.class ? 'form-control ' + field.class : 'form-control'}  id={field.name} name={field.name} type={field.type} onChange={this.handleChange} />
                                                        <label for={field.name}>{field.label}</label>
                                                </div>
                                        );
                                }
                }
        }

        render(){
                let fields = this.props.form.fields.map((field, index) => {
                        return this.GenerateFieldData(field);
                });

                return(
                        <form onSubmit={this.submitForm}>
                                {fields}
                                <div className='mb-1 row'>
                                        <div className='col-5 d-grid'>{ this.props.leftButtonAction ? <button className='btn btn-secondary' onclick={this.props.secondaryAction}>{this.props.secondaryActionLabel ? this.props.secondaryActionLabel : 'Cancel'}</button> : null }</div>
                                        <div className='col-2'></div>
                                        <div className='col-5 d-grid'><button className='btn btn-primary'>{this.props.form.primaryActionLabel ? this.props.form.primaryActionLabel : 'Submit'}</button></div>
                                </div>
                        </form>
                );
        }
}

export default GenerateForm;
