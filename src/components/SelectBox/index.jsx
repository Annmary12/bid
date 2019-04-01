// react libraries
import React, { Component } from 'react';

// styles
import './SelectBox.scss';

class SelectBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      showDropdownOptions: false,
      selectOption: 'Choose One',
    }
  }

  /**
   * toggles the select dropdown
   *
   * @returns {void}
   */
  toggleDropdownOptions = () => {
    this.setState({
      showDropdownOptions: !this.state.showDropdownOptions
    });
  }

  /**
   * hides dropdownoptions
   *
   * @returns {void}
   */
  hideDropdownOptions = () => (
    this.setState({
      showDropdownOptions: false,
    })
  );

  /**
   * handle select box onchange event
   *
   * @param {string} option
   * @returns {void}
   */
  handleSelectBoxChange = option => event => {
    event.persist();
    event.target.value = option;
    event.target.name = this.props.name;
    this.props.handleChange(event);
  }

  render() {
    const { name, handleChange, options, values, errors, touched, label} = this.props;
    return(
      <div className="select-box">
        <label htmlFor="location" className="select-box__label">{label}</label>
        <div className="select-box__inputField">
          <input
            type="text"
            name={name}
            className={errors[name] && touched[name] ? 'select-box__input select-box__input__error' : 'select-box__input'}
            onClick={this.toggleDropdownOptions}
            onBlur={this.hideDropdownOptions}
            value={values[name] ? values[name] : 'Choose one'}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className={errors[name] && touched[name] ? 'select-box__input--icon__error' : 'select-box__input--icon'} >
            { this.state.showDropdownOptions
              ? <i className="fa fa-caret-up"></i>
              : <i className="fa fa-caret-down"></i>
            }
          </span>
          {
            errors[name] && touched[name] && <span className="select-box__input__error--message">{errors[name]}</span>
          }
        </div>
        { this.state.showDropdownOptions && options &&
          <div className="select-box__options">
          { options.map((option, index) =>
            <span
              className="select-box__options__item"
              key={index}
              onMouseDown={this.handleSelectBoxChange(option)}
            >{option}</span>
          )}
          </div>
        }
      </div>
    )
  }
}

SelectBox.defaultProps = {
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false
}

export default SelectBox;
