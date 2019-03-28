import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SearchView from './View';
import hasController from './ViewController';
import hasViewModel from './ViewModel';

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {}

const container = compose(
    // connect(
    //     mapStateToProps,
    //     mapDispatchToProps
    // ),
    hasViewModel,
    hasController,
)

export default container(SearchView);

