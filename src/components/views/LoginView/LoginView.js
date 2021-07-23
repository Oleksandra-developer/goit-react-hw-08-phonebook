import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

import styles from "../RegisterView/RegisterView.module.scss";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className={styles.title}>Nice to meet you! </h1>
        <h3 className={styles.title}>Enter, please</h3>

        <form
          onSubmit={this.handleSubmit}
          className={styles.loginBox}
          autoComplete="off"
        >
          <label className={styles.userBox}>
            E-mail
            <input
              // className={styles.input}
              type="email"
              placeholder="Enter your e-mail"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.userBox}>
            Password
            <input
              // className={styles.input}
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={styles.button}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);
