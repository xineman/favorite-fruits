import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeGetDataByFruit } from '@selectors';
import { selectFruit } from '@actions';
import ProgressBar from '@/ProgressBar';
import { getRandomColor } from '@utils';


function ChartsContainer({ data, handleFruit }) {
  return (
    <div>
      {data.map(fruit =>
        (<ProgressBar
          {...fruit}
          key={fruit.title}
          color={getRandomColor()}
          handleFruit={() => handleFruit(fruit)}
        />))}
    </div>
  );
}

ChartsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFruit: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  const getDataByFruit = makeGetDataByFruit();
  const mapStateToProps = state => ({
    data: getDataByFruit(state),
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps, {
  handleFruit: selectFruit,
})(ChartsContainer);
