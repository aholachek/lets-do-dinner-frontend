'use strict';

import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router'

import { connect } from 'react-redux'
import { updateMeal, updateVisible, reset,  createInvitation } from 'actions/index'

function mapStateToProps(state){
  return {
    inviteUrl : state.firebaseData.inviteUrl,
    inviteId : state.inviteid
  }
}

class inviteURLPage extends React.Component {

  render() {

   const relativeLink = this.props.inviteUrl ? this.props.inviteUrl.split("#")[1] : '';

    return (
      <div className="invite-url centered-component">

        <h2>Success!</h2>
        <hr/>

        <p>You've created an invitation accessible at the following URL:</p>

        <p> <b>{this.props.inviteUrl}</b></p>
        <p>
          First, send the link to up to 4 other friends so they can get started entering their preferences.
        </p>
        <p>
          Next, <b><Link to={relativeLink}> enter your own preferences to get started.</Link></b>
        </p>

        <hr/>
        <b>Disclaimer:</b> This app is a work in progress. It will work best if all invitees are reasonably
        close to each other, and located in urban or suburban areas.
      </div>
    );
  }
}

// Uncomment properties you need
// inviteURLPage.propTypes = {};
// inviteURLPage.defaultProps = {};

export default connect(
  mapStateToProps,
  {
    createInvitation : createInvitation,
    updateMeal : updateMeal
    }
)(inviteURLPage);
