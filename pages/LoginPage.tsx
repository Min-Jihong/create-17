import React from 'react';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Login Page</h1>
      <Login onLogin={(username, password) => console.log(username, password)} />
    </div>
  );
};

export default LoginPage;