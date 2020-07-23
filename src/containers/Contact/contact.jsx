import React, { Component } from "react";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import ContactIMG from "../../assets/images/mail.jpg";
import classes from "./contact.css";

class contact extends Component {
  //Make sure the user is scrolled to the top when the component is mounted.
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //Create an object within the state with the different parts of the form that we need.
  state = {
    formDetails: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      message: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Message",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  render() {
    //create an array and push into it the different parts of the config object
    const formElementsArray = [];
    for (let key in this.state.formDetails) {
      formElementsArray.push({
        id: key,
        config: this.state.formDetails[key],
      });
    }
    //Here we map the array we just created to dynamically create the form
    //make the changed handler an anonymous function so as to pass arguments
    let form = (
      <form className={classes.Form}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
          />
        ))}
        <div className={classes.BtnContainer}>
          <Button btnType="Submit">Submit</Button>
        </div>
      </form>
    );

    //Finally refund a little bit of text and the form.
    return (
      <div className={classes.Wrapper}>
        <h1>Contact</h1>
        <div className={classes.ContactContainer}>
          <div className={classes.ContactIMG}>
            <img src={ContactIMG} alt="Contact" />
          </div>
          <div className={classes.ContactInfo}>
            <p>
              Want to get in contact? Send me a message via any of the below:
            </p>
            <p>
              <strong>LinkedIn: </strong>{" "}
              <a
                href="https://www.linkedin.com/in/mike-clegg-6292aa37/"
                target="blank"
              >
                linkedin.com/in/mike-clegg-6292aa37/
              </a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:mikeclegg7@gmail.com">mikeclegg7@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
