import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import RegisterModal from '../Register';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { base_url } from '@/Base_Url';
import { setToken } from '@/redux/AuthUser';
import { useDispatch } from 'react-redux';
function LoginForm() {
    const dispatch = useDispatch();
    const dataOpenRegister = useSelector((state) => state.OpenRegister.OpenRegisterData);
    const OpenError = useSelector((state) => state.OpenRegister.OpenError);
    const [openRegisterModal, setOpenRegisterModal] = useState(dataOpenRegister);
    const [openModalErr, setOpenModalErr] = useState(OpenError);
    const [textMessage, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        await axios
            .post(base_url + '/auth/login', { email: email, password: password })
            .then((resual) => {
                localStorage.setItem('token', resual.data.Token);
                dispatch(setToken(resual.data.Token));
            })
            .catch((err) => {
                setMessage(err.response.data.Message);
                setOpenModalErr(true);
            });
    }
    useEffect(() => {
        setOpenRegisterModal(dataOpenRegister);
        setOpenModalErr(OpenError);
    }, [dataOpenRegister, OpenError]);
    //

    return (
        <div className="bg-gray-100 h-[100vh] relative" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="  flex left-0 top-0 w-full h-[60vh]">
                <div className="container mx-auto max-w-6xl justify-around items-center lg:flex">
                    <div className="mb-5">
                        <div className="block items-center md:flex text-center">
                            <img src={logo} alt="" className="mx-auto md:mx-0" />
                            <h1 className="font-bold text-2xl md:text-5xl text-cyan-500">VINA Social Media</h1>
                        </div>
                        <div className="hidden md:block">
                            <h3 className="mx-16 text-2xl">VINA Social Media helps you connect and share</h3>
                            <h3 className="mx-16 text-2xl">with the people in your life.</h3>
                        </div>
                    </div>

                    <div className="shadow-md rounded-md p-5 flex-1 bg-white mx-5">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onInput={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="ring-gray-300 focus:border-blue-500 border-2 bg-blue-50 p-2 rounded-md w-full"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            value={password}
                            onInput={(e) => {
                                setPassword(e.target.value);
                            }}
                            className="ring-gray-300 focus:border-blue-500 border-2 bg-blue-50 p-2 rounded-md w-full mt-4"
                        />
                        <input
                            type="submit"
                            value="Log in"
                            onClick={() => login()}
                            className=" bg-cyan-500 p-2 rounded-md w-full mt-4 text-white text-lg font-bold active:bg-cyan-700 cursor-pointer"
                        />
                        <div className="mt-2">
                            <Link className="hover:text-red-600 " to="">
                                Forgotten password?
                            </Link>
                        </div>
                        <hr className="my-4" />
                        <div className="w-full flex justify-center">
                            <input
                                onClick={() => {
                                    setOpenRegisterModal(true);
                                }}
                                type="submit"
                                value="Create new account"
                                className="hadow-inner bg-green-700 p-2 rounded-md  mt-4 text-white text-lg font-bold active:bg-green-800 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Alert Modal */}
            {openModalErr && <Modal text={textMessage} />}

            {openRegisterModal && <RegisterModal checkOpen={openRegisterModal} />}
        </div>
    );
}

export default LoginForm;
