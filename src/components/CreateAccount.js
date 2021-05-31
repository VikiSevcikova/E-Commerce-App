import "../scss/SignIn.scss";
import { Button } from "react-bootstrap";

const CreateAccount = (props) => {
  const content = (
    <div>
      <div className="newCustomerTitle">
        <h2>NEW CUSTOMER?</h2>
      </div>
      <div>
        <p className="required">Required*</p>
        <form>
          <input className="forms" type="text" placeholder="First Name*" />
          <input className="forms" type="Last Name*" placeholder="Last Name*" />
          <input className="forms" type="email" placeholder="Email Address*" />
          <input className="forms" type="Password*" placeholder="Password*" />
          <div className="newsletter">
            <input type="checkbox" name="newsletter" />
            <label for="newsletter">Sign up for Newsletter</label>
          </div>
          <Button className="forms" variant="dark" type="submit">
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
