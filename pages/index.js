import { route } from 'next/dist/server/router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import signInStyles from '../styles/Signin.module.css'

export default function Home() {
  const route = useRouter();
  return (
    
    <div className={signInStyles.primaryContainer}>
      Login Page
      <div>
        <button onClick={() => {route.push('/verifyotp')}}>
        Login
        </button>
      </div>
    </div>

  )
}
