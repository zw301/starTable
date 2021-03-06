import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';


import { openModal, closeModal } from '../../actions/modal_actions';

import SimpleSlider from './slide';

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  searchRestaurants: (searchTerms) =>
    dispatch(searchRestaurants(searchTerms)),
});

export default connect(
  null,
  mapDispatchToProps
)(SimpleSlider);
