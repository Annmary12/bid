// react libraries
import React, { Component } from 'react';

// components
import CheckBox from '../CheckBox';

// styles
import './MultipleSelectBox.scss';

class MultipleSelectBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      showDropdownOption: false,
      selectedOptions: [],
    }
  }

  componentDidUpdate() {
    if (this.state.showDropdownOptions) {
      this.refs.selectBox.focus();
      this.refs.optionsDropdown.focus();
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
  hideDropdownOptions = (event) => {
    if (event && event.relatedTarget === null) {
      this.setState({
        showDropdownOptions: false,
      })
    }
  };

    /**
   * handle select box onchange event
   *
   * @param {string} option
   * @returns {void}
   */
  handleCheckboxChange = (option, index) => (event) => {
    const {selectedOptions} = this.state;

    if (event.target.checked && !selectedOptions.includes(option)) {
      this.setState({
        selectedOptions: [...selectedOptions, option],
      });
    } else if (!event.target.checked) {
      const updatedSelectedOptions = selectedOptions.filter(selectedOption => {
        return option !== selectedOption
      });

      this.setState({
        selectedOptions: updatedSelectedOptions
      })
    }

    event.persist();
    event.target.value = option;
    event.target.name = `${this.props.name}[${index}]`;
    this.props.handleChange(event);
  };

  render() {
    const { name, label, values, errors, options, handleChange, arrayHelpers } = this.props;
    const { selectedOptions, showDropdownOptions } = this.state;

    return(
      <div className="multiple-select-box">
        <label htmlFor={label} className="multiple-select-box__label">{label}</label>
        <div
          className="multiple-select-box__input"
          onClick={this.toggleDropdownOptions}
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
          <div
            className="multiple-select-box__options"
            onBlur={this.hideDropdownOptions}
            ref="optionsDropdown"
            tabIndex={0}
          >
          <span className="multiple-select-box__options--title">Tick as many that apply</span>
            { options.map((option, index) =>
              <div
                className="multiple-select-box__options__item"
                key={index}
              >
                <CheckBox
                  handleChange={this.handleCheckboxChange(option, index)}
                  name={`name[${index}]`}
                  checked={values.services[index]}
                />
                <span className="multiple-select-box__options__label">{option}</span>
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

export default MultipleSelectBox;
