import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '@actions';
import ChartsContainer from '@/ChartsContainer';
import PersonList from '@/PersonList';
import styles from './styles.css';
import './main.css';


class App extends Component {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.isLoaded
          ? (
            <div>
              <ChartsContainer />
              <PersonList />
            </div>
          )
          : <p>Still loading...</p>}
      </div>
    );
  }
}

export default connect(state => ({
  isLoaded: state.isLoaded,
}), {
  getData,
})(App);
