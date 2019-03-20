import * as Yup from 'yup';

const email = Yup.string()
  .email('Invalid email address')
  .required('Email is required!');
const password = Yup.string()
  .matches(/[a-z]/, 'Must contain lowercase')
  .matches(/[A-Z]/, 'Must contain uppercase')
  .matches(/[0-9]/, 'Must contain number')
  .min(6, 'Must contain at least 6 characters')
  .required('Password is required');

export const loginSchema = Yup.object().shape({
  email,
  password: Yup.string().required('Password is required!'),
});

export const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required!'),
  lastname: Yup.string().required('Lastname is required!'),
  email,
  password
})

export const resetPasswordSchema = Yup.object().shape({
  email
});
