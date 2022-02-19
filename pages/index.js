import { useState } from 'react';
import { useRouter } from 'next/router'
import signInStyles from '../styles/Signin.module.css'
import Link from 'next/link';
import { login } from './api/api_services/auth_service';
import HashUtils from './utils/hashUtils';

export default function Home() {
  const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = e =>{
    e.preventDefault();

    let emailHash = HashUtils.getHashedData(email)
    let passwordHash = HashUtils.getPasswordHash(password)

    const data = {
      emailHash,
      passwordHash
    }
    console.log(data)
  
    login(data).then(res => {
      if(typeof res.data === "object"){
        route.push('/home')
      }
      else{
        clearPassword()
        alert('Invalid email or password.') 
      }
    })

  }

  const clearPassword = () => {
    setPassword("")
  }

  return (
    <div className={signInStyles.primaryContainer}>
      <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4 justify-between"> 
        <div className="mb-6 text-xl font-bold text-center">Login</div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            autoComplete="email"
            required
          />
          <input
            className="mb-7 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            type="password"
            autoComplete="password"
            required
          />
          <button
            type="submit"
            className="mb-6 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            
          >
            Submit
          </button>
          <div className='mb-5 text-center'>New User?   
          <Link href={'/signup'} ><a className='ml-3 text-cyan-400'>Create Account</a></Link>
          </div>
        </form>
      </div>
      </div>
      </div>
      

  )
}
