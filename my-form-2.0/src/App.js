import React from 'react';
import states from './brazilianStates';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      addressKind: '',
      resume: '',
      role:'',
      hasEntered: false,
    };

    console.log('The constructor is being called by the object?:', this)
    this.changeName = this.changeName.bind(this);
  }

  changeName(event) {
    const input = event.target;
    this.setState({
      name: input.value.toUpperCase(),
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  }

  changeAddress = (event) => {
    const { value } = event.target;
    this.setState({
      address: value.replace(/[^\w\s]/gi, ''),
    });
  }

  handleCity = (event) => {
    let { value } = event.target;

    if(value.match(/^\d/)) value='';
 
 
    this.setState({
       city: value,
    });
  }

  alertFillingOnce = () => {
    if(this.state.hasEntered) return;

    alert('Fill in this intel carefully');
    this.setState({ hasEntered: true});
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Personal Data</legend>
            <div>
              Name:
              <input
              type="text"
              name="name"
              maxLength="40"
              required
              value={this.state.name}
              onChange={this.changeName}
              />
            </div>
            <div>
              Email:
              <input
              type="email"
              name="email"
              maxLength="50"
              required
              value={this.state.email}
              onChange={this.handleChange}
              />
            </div>
            <div>
              CPF:
              <input
              type="text"
              name="cpf"
              maxLength="11"
              required
              value={this.state.cpf}
              onChange={this.handleChange}
              />
            </div>
            <div>
              Address:
              <input
              type="text"
              name="address"
              maxLength="200"
              required
              value={this.state.address}
              onChange={this.changeAddress}
              />
            </div>
            <div>
              City:
              <input
              type="text"
              name="city"
              maxLength="28"
              required
              value={this.state.city}
              onChange={this.handleChange}
              onBlur={this.handleCity}
              />
            </div>
            <div>
              State:
              <select
              name="state"
              required
              value={this.state.state}
              onChange={this.handleChange}
              >
                {states.map((state) => <option key={state}>{state}</option>)}
              </select>
            </div>
            <div>
              Address kind:
              <input
              type="radio"
              name="addressKind"
              required
              value="home"
              checked={this.state.addressKind === 'home'}
              onChange={this.handleChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Professional Data</legend>
          <div>
              Curriculum Summary:
              <textarea
              name="resume"
              maxLength="1000"
              required
              value={this.state.resume}
              onChange={this.handleChange}
              />
            </div>
            <div>
              Professional Position:
              <textarea
              type="text"
              name="role"
              maxLength="40"
              required
              onChange={this.handleChange}
              onMouseEnter={this.alertFillingOnce}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}