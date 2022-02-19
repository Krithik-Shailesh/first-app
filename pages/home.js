import signInStyles from '../styles/Signin.module.css'
import { useEffect } from 'react';
import { useRouter }  from 'next/router'

const home = () => {

    const router = useRouter();

    useEffect(() => { 
        if (router.asPath === '/home') {
          window.onpopstate = () => { 
            history.go(1);
          };
        }
      }, [router]);
      
    return (
        <div className={signInStyles.primaryContainer}>
            Home Page
        </div>
    )
}

export default home