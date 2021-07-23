import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from "./RegisterView.module.scss";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h1 className={styles.title}>Register now, please</h1>
        <form
          onSubmit={this.handleSubmit}
          className={styles.loginBox}
          autoComplete="off"
        >
          {/* <div> */}
          <label className={styles.userBox}>
            Name
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          {/* </div> */}
          {/* <div > */}
          <label className={styles.userBox}>
            E-mail
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          {/* </div> */}
          {/* <div> */}
          <label className={styles.userBox}>
            Password
            <input
              autoComplete="off"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          {/* </div> */}

          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
        {/* </div> */}
      </>
    );
  }
}
const mapDispatchToProps = {
  onSubmit: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterView);
