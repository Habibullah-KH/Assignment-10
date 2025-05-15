import PropTypes from 'prop-types';
import '../../index.css'

const SpecialButton = ({ text, onClick, className = '' }) => {
  return (
<button
  onClick={onClick}
  className={`w-full md:w-fit px-4 py-2 text-xs md:text-md 
    font-semibold rounded text-white transition duration-300 
    animate-gradient 
    bg-[linear-gradient(120deg,#f67578,#0d91e2,#f67578)] 
    bg-[length:400%_400%] bg-no-repeat bg-center
hover:shadow-[5px_5px_rgb(105,231,255)]
hover:scale-105

    ${className}`}
>
  {text}
</button>
  );
};

SpecialButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SpecialButton;
