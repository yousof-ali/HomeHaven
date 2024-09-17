import React from 'react';

const SingUp = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold text-yellow-600 '>Sing-Up</h2>
            </div>
            <div className='card-body'>
                <form>
                   <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                   </div>
                </form>
            </div>
            
        </div>
    );
};

export default SingUp;