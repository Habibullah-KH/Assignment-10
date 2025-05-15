import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';

const ColorsButton = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${className}
        font-semibold rounded transition duration-300
        bg-clip-text text-transparent animate-gradient
        bg-[linear-gradient(270deg,#ff930f,#fff95b,#ff930f)] 
        bg-[length:200%_200%]`}
    >
      {text}
    </button>
  );
};

ColorsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.string
};

export default ColorsButton;
