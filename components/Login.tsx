import React from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-xs mx-auto my-10'>
      <div className='mb-4'>
        <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2'>Username:</label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
    </form>
  );
};

export default Login;