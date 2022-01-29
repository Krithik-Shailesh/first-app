import { useState } from 'react';
import { useRouter } from 'next/router'
import signInStyles from '../styles/Signin.module.css'

export default function Home() {
  const route = useRouter();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = e =>{
    e.preventDefault();
    const data = {
      username,
      password
    }
    console.log(data)
    route.push('/home')
  }

  return (
    <div className={signInStyles.primaryContainer}>
      <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4 justify-between"> 
        <div className="mb-2 text-xl font-bold text-center">Login</div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="mb-4 border-b-2"
            id="username"
            name="username"
            type="text"
            onChange={e => setUserName(e.target.value)}
            placeholder='Username'
            autoComplete="username"
            required
          />
          <input
            className="mb-4 border-b-2"
            id="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            type="password"
            autoComplete="password"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
      

  )
}
