import React, { useState } from 'react';
import SignUp from './SignUp';
import Message from './Message';
import CheckBox from './CheckBox';
import './MultiStepForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../img/bhagwaan shree hari Vishnu.jpg'
function MultiStepForm() {

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        email_addresss: "",
        address: "",
    });

    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else if (step === 3) {
            console.log(values);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });

    }

    return (
        <div>
            <div className="container">
                <div className="form-container d-flex ">

                    <div className="img-section">
                        <img src={Image} alt="Bhagwaan Shree Hari Visnu" />
                    </div>

                    <div className="content-section">

                        <ol id="progressbar" >
                            <li className="active" id="account"><strong>SignUp</strong></li>
                            <li id="personal"><strong>Message</strong></li>
                            <li id="payment"><strong>CheckBox</strong></li>
                        </ol>

                        <hr style={{ width: "80%" }} />
                        {{
                            1: < SignUp handleChange={handleChange} />,
                            2: <Message />,
                            3: <CheckBox />
                        }
                        [step]}

                        <hr style={{ width: "80%" , marginTop:'50px'}} />

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mx-5">
                            {step > 1 ? (
                                <button className="btn btn-light " onClick={prevStep}>
                                    Back
                                </button>
                            ) : null}
                            <button className="btn btn-primary " onClick={nextStep}>
                                {step === 3 ? "Submit" : "Next Step"}
                            </button>
                        </div>
                    </div>
                </div>



            </div>





        </div>
    )
}

export default MultiStepForm