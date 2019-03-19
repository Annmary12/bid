// react libraries
import * as React from 'react';

// components
import InputBox from '../../components/InputBox';

// styles
import './HomePage.scss';

const HomePage = () => (
  <div>
    <InputBox
      name="input"
      touched={false}
      label="my name"
      type="text"
    />
  </div>
)

export default HomePage;
