import { route } from 'next/dist/server/router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import signInStyles from '../styles/Signin.module.css'

export default function Home() {
  const route = useRouter();

  const verify = async (event) => {
    const username = event.target.username.value
    const password = event.target.password.value

    console.log(username+ "   " + password)

    route.push('/home')
  }

  return (
    <div className={signInStyles.primaryContainer}>
      <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4 justify-between"> 
        <div className="mb-2 text-xl font-bold text-center">Login</div>
        <form className="flex flex-col">
          <input
            className="mb-4 border-b-2"
            id="username"
            name="username"
            type="text"
            placeholder='Username'
            autoComplete="username"
            required
          />
          <input
            className="mb-4 border-b-2"
            id="password"
            name="password"
            placeholder='Password'
            type="password"
            autoComplete="password"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            onClick={verify}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
      

  )
}
