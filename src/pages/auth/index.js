import {auth,provider} from '../../Config/firebase-config'
import {signInWithPopup} from 'firebase/auth'
import "./styles.css"
import {Navigate, useNavigate} from "react-router-dom"
import {userGetUserInfo} from '../../hooks/useGetUserInfo'

export const Auth=()=>{

    const navigate=useNavigate();
    const {isAuth}= userGetUserInfo()

const signInWithGoogle=async()=>{
    const results=await signInWithPopup(auth,provider)
    console.log(results)
    const authInfo={
        userID:results.user.uid,
        name:results.user.displayName,
        profilePhoto:results.user.photoURL,
        isAuth:true,
    }
    localStorage.setItem("auth",JSON.stringify(authInfo))
    navigate("/a")
 



}

if(isAuth){
    return<Navigate to="/a" />
}

    return  <div className="flex-container">
    <div className="left-div">   </div>
    <div className="right-div"> <h1>Welcome to the Expense tracker</h1><p>Sign in with Google to Continue</p>
        <button className="Login-with-google-btn"  onClick={signInWithGoogle}>
            {" "}Sign in</button></div>
  </div>

    
    
    

}