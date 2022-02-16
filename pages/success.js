import Link from 'next/link';
import signInStyles from '../styles/Signin.module.css'

const success = () => {
    return(
        <div className={signInStyles.primaryContainer}>
        <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4 justify-between"> 
        <div className="mb-6 text-xl font-bold text-center">Account created successfully</div>
        </div>
        <div className='mb-5 text-center'> 
        <Link href={'/'} ><a className='ml-3 text-cyan-400'>Login</a></Link>
        </div>
        </div>
        </div>
    )
}

export default success;