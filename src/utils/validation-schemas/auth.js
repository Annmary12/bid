import * as Yup from 'yup';

const email = Yup.string()
  .email('invalid email address')
  .required('email is required!');
const password = Yup.string()
  .matches(/[a-z]/, 'must contain lowercase')
  .matches(/[A-Z]/, 'must contain uppercase')
  .matches(/[0-9]/, 'must contain number')
  .min(6, 'must contain at least 6 characters')
  .required('password is required');

  /**
   * Validates the login form
   * @returns {void}
   */
export const loginSchema = Yup.object().shape({
  email,
  password: Yup.string().required('password is required!'),
});

/**
 * Validates signup form
 * @returns {void}
 */
export const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required('firstname is required!'),
  lastname: Yup.string().required('lastname is required!'),
  email,
  password
})

/**
 * Validates reset password form
 * @returns {void}
 */
export const resetPasswordSchema = Yup.object().shape({
  email
});


/**
 * Validates company's form
 * @returns {void}
 */
export const companyFormSchema = Yup.object().shape({
  name: Yup.string().required('company name required'),
  location: Yup.string().required('location required'),
  rcNumber: Yup.string().required('RC No required'),
  website: Yup.string().required('website is required'),
  services: Yup.array().required('services is required')
});
