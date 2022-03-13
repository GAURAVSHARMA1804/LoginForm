import React from 'react';
import './CheckBox.css';
import Image from '../img/bhagwaan shree hari Vishnu.jpg'


function CheckBox() {
  return (
    <div>
        <div style={{ marginLeft: '130px' , marginTop:'60px' }}>
        <h6>step3/3</h6>
        <h2><strong>CheckBox</strong></h2>
      </div>
      <div className="d-flex">
      <label>
  <input type="radio" name="test" value="small" checked className='Radio' />
  <img src={Image} alt="Bhagvaan Shree Vishnu" className='Bhagwaan' />
</label>

<label>
  <input type="radio" name="test" value="big"  className='Radio'/>
  <img src={Image} alt="Bhagvaan Shree Vishnu"  className='Bhagwaan' style={{marginLeft:'50px'}}/>
</label>

      </div>

      <div className="options ">
	<label title="item1" style={{marginRight:'50px'}}>
		<input type="radio" name="foo" value="0" /> 
		I want to add this option.
		
	</label>
	<label title="item2">
		<input type="radio" name="foo" value="1" />
		Let me click on this checkbox and choose some cool stuff.
		
	</label>   
	
</div>
    </div>
  )
}

export default CheckBox