import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActive } from '@selectors';
import styles from './styles.css';


class ProgressBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    handleFruit: PropTypes.func.isRequired,
    active: PropTypes.string,
    color: PropTypes.string.isRequired,
  };
  static defaultProps = {
    active: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        width: this.props.popularity * 100,
      });
    }, 0);
  }
  render() {
    const {
      title, count, handleFruit, active, color,
    } = this.props;
    return (
      <li className={`${styles.container} ${active === title && styles.active}`} role="presentation" onClick={handleFruit}>
        <p className={styles.title}>{title}</p>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} style={{ background: color, width: `${this.state.width}%` }} />
        </div>
        <p className={styles.count}>{count}</p>
      </li>
    );
  }
}

const makeMapStateToProps = () => {
  const mapStateToProps = state => ({
    active: getActive(state),
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(ProgressBar);
