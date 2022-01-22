import { useRouter } from "next/router";
import signInStyles from '../styles/Signin.module.css'

const verifyotp = () => {
    const route = useRouter()
    return (
        <div className={signInStyles.primaryContainer}>
            Enter Otp
            <div>
                <button onClick={() => {route.push('/home')}}>
                    Submit
                </button>
            </div>
        </div>
    )

}

export default verifyotp;