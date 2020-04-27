import React from 'react';
import PropTypes from 'prop-types';
import './InfoTable.scss';

function InfoTable({ headerText, text, subText }) {
  return (
    <div className='InfoTable'>
      <table className='table'>
        <thead>
          <tr><th>{headerText}</th></tr>
        </thead>
        <tbody>
          <tr><td>{text}</td></tr>
          <tr><td>{subText}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

InfoTable.propTypes = {
  headerText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default InfoTable;
