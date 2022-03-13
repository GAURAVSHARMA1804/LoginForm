import React from 'react';
import './Message.css'

function Message() {
  return (
    <div>
      <div style={{ marginLeft: '130px' ,marginTop:'60px'}}>
        <h6>step2/3</h6>
        <h2><strong>Message</strong></h2>
      </div>
      <div>
        <h6 style={{ marginLeft: '130px', marginTop: '50px' }}>Message</h6>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" style={{ width: '70%', marginLeft: '130px', borderRadius: '10px', border: '2px solid skyblue' }}></textarea>


      </div>

      <div className="options">
	<label title="item1" style={{marginRight:'50px'}}>
		<input type="radio" name="foo" value="0" /> 
		The number one choice
		
	</label>
	<label title="item2">
		<input type="radio" name="foo" value="1" />
		the number two choice
		
	</label>   
	
</div>

    </div>
  )
}

export default Message