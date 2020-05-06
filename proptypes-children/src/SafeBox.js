import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SafeBox.css';

export default class SafeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: '',
      correctPassword: false,
    };
    this.checkPassword = this.checkPassword.bind(this);
  }

  inputDigits(digit) {
    this.setState((state) => ({
      inputContent: `${state.inputContent}${digit}`,
    }));
  }

  checkPassword() {
    if (this.state.inputContent === this.props.userPassword) {
      this.setState({ correctPassword: true });
    }
    else {
      const { safeOwner, alertPhrase } = this.props.alertMessageData;
      alert(`${safeOwner}, ${alertPhrase}`);
      this.setState({ inputContent: '' })
    }
  }

  render() {
    console.log(this.props);
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    if (this.state.correctPassword) return <div>{this.props.children}</div>
    return (
      <div className="safe">
        <div className="keyboard">
          <p className="keyboard-element current-password">
            {this.state.inputContent || 'Empty Password'}
          </p>
          {digits.map((digit) => (
            <button
            key={digit}
            type="button"
            className="keyboard-button"
            onClick={() => this.inputDigits(digit)}
            >
              {digit}
            </button>
          ))}
          <button
            type="button"
            className="keyboard-element"
            onClick={this.checkPassword}
          >
            Enter Password
          </button>
        </div>
      </div>
    );
  }
}

SafeBox.defaultProps = {
  alertMessageData: {
    safeOwner: 'Check your name',
    alertPhrase: 'Access Denied!'
  },
};

SafeBox.propTypes = {
  children: PropTypes.element.isRequired,
  userPassword: PropTypes.string.isRequired,
  alertMessageData: PropTypes.shape({
    safeOwner: PropTypes.string,
    alertPhrase: PropTypes.string,
  }),
};