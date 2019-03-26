// react libraries
import React, { Component } from 'react';

// third-party libraries
import { FieldArray, Field } from 'formik';

// components 
import CheckBox from '../CheckBox';

// styles
import './MultipleSelectBox.scss';

class MultipleSelectBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      showDropdownOption: false,
      // selectedOptions: [],
      selectedOptions: ['Construction', 'Engineering', 'Investment', 'Development', 'procurement'],
      checked: false,
    }
  }

  componentDidUpdate() {
    if (this.state.showDropdownOptions) {
      this.refs.selectBox.focus();
    }

    console.log(this.state);
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
  handleCheckboxChange = (event) => {
    this.setState({
      selectedOptions: [...this.state.selectedOptions, event.target.value],
    });
    event.persist();
    event.target.value = this.state.selectedOptions;
    event.target.name = this.props.name;
    this.props.handleChange(event);
  };

  render(){
    const { name, label, values, errors, options, handleChange } = this.props;
    const { selectedOptions, showDropdownOptions } = this.state;

    return(
      <div className="multiple-select-box">
        <label htmlFor={name} className="multiple-select-box__label">{label}</label>
        <div
          className="multiple-select-box__input"
          onClick={this.toggleDropdownOptions}
          // onBlur={this.toggleDropdownOptions}
          ref="selectBox"
          tabIndex={0}
        >
          { (selectedOptions.length > 0) && (selectedOptions.length > 3)
            ? selectedOptions.slice(0, 3).map((option, index) =>
              <span key={index} className="multiple-select-box__value">{option}</span>
              )
            : selectedOptions.map((option, index) =>
              <span key={index} className="multiple-select-box__value">{option}</span>
              )
          }
          { (selectedOptions.length > 3) &&
            <span className="multiple-select-box__more">+{ selectedOptions.length - 3 } more</span>
          }
           <span className="multiple-select-box__input--icon">
            { showDropdownOptions
              ? <i className="fa fa-caret-up"></i>
              : <i className="fa fa-caret-down"></i>
            }
          </span>
        </div>
        { showDropdownOptions && options &&
          <div className="multiple-select-box__options">
          <span className="multiple-select-box__options--title">Tick as many that apply</span>
            { options.map((option, index) =>
              <div
                className="multiple-select-box__options__item"
                key={index}
                // onMouseDown={this.handleSelectBoxChange(option)}
              >
                {/* <CheckBox /> */}
                <input
                  name="services"
                  type="checkbox"
                  // value={option}
                  value={values}
                  // checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                 />
                <span>{option}</span>
              </div>
            )}
          </div>
        }
        {/* <FieldArray
            name="services"
            render={arrayHelpers => (
              <div>
                {values.services && values.services.length > 0 ? (
                  values.services.map((service, index) => (
                    <div key={index}>
                      <Field name={`services.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    {/* Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          /> */} 
      </div>
    )
  }
}

export default MultipleSelectBox;
