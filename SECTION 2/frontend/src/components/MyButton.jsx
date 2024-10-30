import React from 'react';

const MyButton = ({ children, disabled }) => {
  return (
    <button className={`bg-blue-500 disabled:bg-green-500 text-white px-3 py-1 rounded-md`}
        
        disabled={disabled}
        >
        
        {children}    

    </button>
  )
}

export default MyButton;
