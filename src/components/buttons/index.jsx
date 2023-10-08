import React from 'react';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
        type="submit"
        className="px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#C65150] hover:bg-gradient-to-r from-red-500 via-red-400 to-red-800 rounded-[100px] "
      >
        {text}
      </button>
    );
}

export default Button;
