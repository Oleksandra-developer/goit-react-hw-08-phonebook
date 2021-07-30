import React, { Component } from "react";
import Form from "../../Form";
import styles from "../../container.module.css";
import ContactsList from "../../ContactList";
import Filter from "../../Filter";
import { connect } from "react-redux";
import { getLoading } from "../../../redux/phonebook/contacts-selectors";
// /components/redux/phonebook/contacts-selectors
import { fetchContacts } from "../../../redux/phonebook/phonebook-operation";
// import "./App.css";

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    // console.log(state);
    return (
      <section className={styles.container}>
        <h1>Phonebook</h1>
        {this.props.isLoadingContacts && <h1>Downloading...</h1>}
        <Form />
        <h2>Contact List</h2>
        <Filter />
        <ContactsList />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
