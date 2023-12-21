import React, { useContext } from 'react';
import { UserContext } from './AuthContext';
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { toast } from 'react-toastify';
import useAxios from '../hooks/useAxios';

const LoginWithSocialMedia = () => {
    const { loginWithGoogle, loginWithFacebook } = useContext(UserContext)
    const axiosPublic = useAxios()
    // console.log(axiosPublic)
    // login with google
    const googleLogin = () => {
        loginWithGoogle()
            .then(res => {
                const user = res?.user;
                const name = user?.displayName;
                const email = user?.email;
                const photoUrl = user?.photoURL;
                const userInfo = { name, email, photoUrl, profession: "Student" }
                // console.log(userInfo)
                axiosPublic.post("/login", userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log("inside new", res)
                            toast(`Welcome ${name} to join us`, {
                                autoClose: 2000,
                                position: "bottom-right"
                            })
                        }
                        toast(`${res.data.message} ${name}`, {
                            autoClose: 2000,
                            position: "bottom-right"
                        })

                    }).catch(err => {
                        toast(err)
                    })
            }).catch(err => {
                toast(err, {
                    position: "bottom-right",
                    autoClose: 2000,
                })
            })
    }

    // login with facebook
    const facebookLogin = () => {
        loginWithFacebook()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                toast(`${err}`)
            })
    }

    return (
        <div className='flex gap-4 items-center w-full'>
            <button className='bg-slate-300 flex justify-center items-center p-2 w-full rounded-md' onClick={googleLogin}>
                <FaGoogle size={20} />
            </button>
            <button className='bg-slate-300 flex justify-center items-center p-2 w-full rounded-md' onClick={facebookLogin}>
                <FaFacebookSquare size={20} />

            </button>
        </div>
    );
};

export default LoginWithSocialMedia;