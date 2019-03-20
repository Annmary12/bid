// react library
import * as React from 'react';

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
      <p>Already have a account? <span className="text-green">log In</span></p>
    </footer>
  </div>
)

export default SignUp;
