import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';

const FillButton = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full md:w-fit px-4 py-2 text-xs md:text-md ${className}
        text-black
         hover:bg-clr-accent font-semibold rounded 
        transition duration-300`}
    >
      {text}
    </button>
  );
};

FillButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.string
};

export default FillButton;
