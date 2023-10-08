import React from 'react';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
        type="submit"
        className="px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#1DB688] hover:bg-gradient-to-r from-green-500 via-green-400 to-green-800 rounded-[100px] "
      >
        {text}
      </button>
    );
}

export default Button;
