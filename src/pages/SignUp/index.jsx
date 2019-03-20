// react library
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import SignUpContainer from './SignUpContainer';

// style
import './SignUp.scss';

const SignUp = () => (
  <div className="signup">
    <h2 className="signup__title">Get Started with Eazy Tender</h2>
    <p className="signup__sub-title">Sign up and start creating tenders on the fly.</p>
    <SignUpContainer />
    <footer>
      <p>Already have a account? <Link to="/login" className="text-green">log In</Link></p>
    </footer>
  </div>
)

export default SignUp;
