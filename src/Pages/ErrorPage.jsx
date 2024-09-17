import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import CommonButton from '../Components/CommonButton';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handlaeNavigate = () =>{
        navigate(-1);
    }
    return (
        <div className='h-[100vh] flex  items-center'>
            <div className='container mx-auto px-2 flex flex-col items-center space-y-2'>
            <h1 className='text-3xl font-bold'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='flex gap-2 pb-4'> 
                <span>{error.status}</span>
                <span>{error.statusText || error.message}!</span>
                
            </p>
            <CommonButton onClick={handlaeNavigate}>Go Back</CommonButton>

            
        </div>
        </div>
    );
};

export default ErrorPage;