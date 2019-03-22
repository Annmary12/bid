// react libraries
import * as React from 'react';

// components
import InputBox from '../../components/InputBox';
import SelectBox from '../../components/SelectBox';

// styles
import './HomePage.scss';
const arrayOfState = ["abia", "umuahai", "lagos"]

const HomePage = () => (
  <div>
    <InputBox
      name="input"
      touched={false}
      label="my name"
      type="text"
    />
    <SelectBox
      name="location"
      options={arrayOfState}
    />
  </div>
)

export default HomePage;
