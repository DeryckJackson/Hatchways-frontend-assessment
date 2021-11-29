import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withAlert } from "react-alert";
import { connect } from "react-redux";


class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
    }

    if (message !== prevProps.message) {
      console.log('Alert worked');
      if (message.getStudents) {
        alert.success(message.getStudents);
      };
    }
  }

  render() {
    return <Fragment />;
  }
};

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  error: state.errorReducer,
  message: state.messagesReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
