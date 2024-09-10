import React from 'react';

const CommonButton = ({onClick , children}) => {
    return (
        <button className='btn bg-yellow-600 hover:bg-yellow-500 text-bold text-white' onClick={onClick}>
            {children}
        </button>
    );
};

export default CommonButton;