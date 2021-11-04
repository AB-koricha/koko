import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'
import {auth,provider} from './Firebase'//import auth and provider from our local firebase file

function Login() {
    const [state,dispatch]=useStateValue()
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error)=>alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://vectr.com/koricha/b2Rqg7cQ5.svg?width=640&height=640&select=b2Rqg7cQ5page0&quality=1' alt=''/>
            </div>
            <div>
                <Button  type='submit' onClick={signIn}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Login
