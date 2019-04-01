// react libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// third-party libraries
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik, FieldArray } from 'formik'

// components
import InputBox from '../../components/InputBox';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';
import MultipleSelectBox from '../../components/MultipleSelectBox';

// utils
import { companyFormSchema } from '../../utils/validation-schemas/auth';

// styles
import './CompanyForm.scss';

const arrayOfState = ["abia", "umuahai", "lagos", "abuja"];

const services = ['Construction', 'Procurement', 'Developemnt', 'Investment', 'Engineering', 'Oil Rigging'];

export const CompanyFormConfig = {
  mapPropsToValues: () => ({
    name: '',
    location: '',
    rcNumber: '',
    website: '',
    services: Array(services.length).fill(false),
  }),

  validationSchema: companyFormSchema,
  /**
   * handles company form submit event
   *
   * @param {object} values
   * @returns {void}
   */
  handleSubmit: (values, { setSubmitting, props }) => {
    const selectedServices = values.services.map((serviceChecked, index) => {
      return serviceChecked ? services[index] : serviceChecked;
    }).filter(service => service);

    const updatedValues = {
      ...values,
      services: selectedServices
    };
    setTimeout(() => {
      alert(JSON.stringify(updatedValues, null, 2));
      setSubmitting(false);
    }, 500);
  }
};

const CompanyForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    arrayHelpers,
    handleBlur } = props;

return (
  <div className="company-form">
    <h2 className="company-form__title">Account created successfully!</h2>
    <p className="company-form__sub-title">Tell us a bit about your company<Link to="/" className="company-form__sub-title--right">skip for now</Link></p>
    <form onSubmit={handleSubmit}>
      <InputBox
        type="text"
        name="name"
        label="Company Name"
        { ...props }
      />

      <SelectBox
        name="location"
        label="Location"
        options={arrayOfState}
        { ...props }
      />

      <InputBox
        type="text"
        name="rcNumber"
        label="RC No."
        { ...props }
      />

      <InputBox
        type="text"
        name="website"
        label="Website"
        { ...props }
      />

      <MultipleSelectBox
        name="services"
        label="What services do you offer"
        options={services}
        {...props}
      />

      <Button
        classes="btn btn__primary"
        type="submit"
        name={isSubmitting ? 'loading..' : 'Go to Dashboard'}
        disabled={isSubmitting}
      />
    </form>
  </div>
)}

const mapStateToProps = () => ({
  role: 'vendor'
});

export default compose(
  connect(mapStateToProps),
  withFormik(CompanyFormConfig))(CompanyForm);
