import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeGetActiveFruitData } from '@selectors';
import PersonItem from '@/PersonItem';


function PersonList(props) {
  return (
    <div>
      {props.data.map(person =>
        (<PersonItem key={`${person.name}-${person.favoriteFruit}`} {...person} />))}
    </div>
  );
}

PersonList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const makeMapStateToProps = () => {
  const getActiveFruitData = makeGetActiveFruitData();
  const mapStateToProps = state => ({
    data: getActiveFruitData(state),
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(PersonList);
