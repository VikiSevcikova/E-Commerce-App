import "../scss/SignIn.scss";
import { Button } from "react-bootstrap";
import { useState } from "react";

const CreateAccount = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendNewsletter, setSendNewsletter] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const createAccount = (e) => {
    e.preventDefault();

    const url = "https://e-commerce-api.belzaondrej.com/users";

    const formData = { 
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      sendNewsletter: sendNewsletter  
    }

    const params={
      headers: {
        "content-type":"application/json; charset=UTF-8"
      },
      body:formData,
      method:"POST"
    };
    
    fetch(url, params)
    .then(data=>{return data.json()})
    .then(res=>alert("Your account was created."+res.message))
    .catch(error=>{
        alert("Sorry, account was not created.");
        console.log(error);
      });

  }

  const handleChange = (e) => {
    switch (e.target.name){
      case "firstName": setFirstName(e.target.value); break;
      case "lastName": setLastName(e.target.value); break;
      case "email": setEmail(e.target.value); break;
      case "password": setPassword(e.target.value); break;
      case "newsletter": setSendNewsletter(e.target.value); break;
      case "loginEmail": setLoginEmail(e.target.value); break;
      case "loginPassword": setLoginPassword(e.target.value); break;
      default: return;
    }
  }

  const validateForm = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  }

  const content = (
    <div>
      <div className="newCustomerTitle">
        <h2>NEW CUSTOMER?</h2>
      </div>
      <div>
        <p className="required">Required*</p>
        <form onSubmit={createAccount}>
          <input className="forms" type="text" name="firstName" placeholder="First Name*" onChange={handleChange}/>
          <input className="forms" type="text" name="lastName" placeholder="Last Name*" onChange={handleChange}/>
          <input className="forms" type="email" name="email" placeholder="Email Address*" onChange={handleChange}/>
          <input className="forms" type="password" name="password" placeholder="Password*" onChange={handleChange}/>
          <div className="newsletter">
            <input type="checkbox" name="newsletter" onChange={handleChange}/>
            <label htmlFor="newsletter">Sign up for Newsletter</label>
          </div>
          <Button className="forms" variant="dark" type="submit" disabled={!validateForm()}>
            CREATE ACCOUNT
          </Button>
        </form>
      </div>
    </div>
  );
  return (
    <>
      <div onMouseOver={props.onMouseOver}>
        <div
          className={`signInWrapper ${
            props.isHovered ? "bgStyleHovered" : "bgStyle"
          }`}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
