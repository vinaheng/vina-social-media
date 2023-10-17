import { BsSearch, BsFillMoonStarsFill, BsQuestionCircleFill } from 'react-icons/bs';
import { AiFillMessage, AiFillSetting } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { TbLogout2 } from 'react-icons/tb';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { base_url } from '@/Base_Url';
function Header() {
    const target = useSelector((state) => state.target.targetData);
    const userData = useSelector((state) => state.User.UserData);
    const [checkMenu, setCheckMenu] = useState(false);
    const [currenTheme, setCurrenTheme] = useState('');
    const profileRef = useRef();
    useEffect(() => {
        if (!(target === profileRef.current.className)) {
            setCheckMenu(false);
        }
    }, [target]);
    function logout() {
        localStorage.removeItem('token');
    }
    // use usereffect for check fist open web
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setCurrenTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setCurrenTheme('light');
        }
    }, []);
    function onChangTheme(theme) {
        if (theme === 'light') {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
            setCurrenTheme('light');
        } else {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
            setCurrenTheme('dark');
        }
    }

    return (
        <div className="bg-white dark:bg-slate-800 left-0 top-0 w-full">
            <div className="container mx-auto h-14 flex justify-between">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="max-h-11 " />
                            <h1 className="ml-2 text-md font-bold lg:text-2xl text-cyan-500 ">VINA</h1>
                        </Link>
                        <input
                            type="text"
                            placeholder="Search ..."
                            className="bg-gray-200 ml-5 rounded-lg px-4 py-1 hidden md:block text-black "
                        />
                        <BsSearch className="ml-5 md:-ml-7 text-sm" />
                    </div>
                </div>
                <ul className="flex items-center">
                    <li className="ml-2 md:ml-5">
                        {currenTheme === 'dark' ? (
                            <MdLightMode
                                className="cursor-pointer tex-lg hover:text-black hover:scale-110 transition-all dark:text-gray-300"
                                onClick={() => onChangTheme('light')}
                            />
                        ) : (
                            <BsFillMoonStarsFill
                                className="cursor-pointer tex-lg hover:text-black hover:scale-110 transition-all dark:text-gray-300"
                                onClick={() => onChangTheme('dark')}
                            />
                        )}
                    </li>
                    <li className="ml-2 md:ml-5">
                        <AiFillMessage className="cursor-pointer tex-lg hover:text-black hover:scale-110 transition-all dark:text-gray-300" />
                    </li>
                    <li className="ml-2 md:ml-5">
                        <IoMdNotifications className="cursor-pointer tex-lg hover:text-black hover:scale-110 transition-all dark:text-gray-300" />
                    </li>
                    <li className="ml-2 md:ml-5">
                        <BsQuestionCircleFill className="cursor-pointer tex-lg hover:text-black hover:scale-110 transition-all dark:text-gray-300" />
                    </li>
                    <li className="ml-2 md:ml-5">
                        <div className="relative">
                            <img
                                ref={profileRef}
                                src={base_url + '/' + userData.profile_picture_path}
                                alt=""
                                className="h-10 w-10 rounded-full border-2  dark:border-white border-gray-400"
                                onClick={() => setCheckMenu(!checkMenu)}
                            />
                            {/* item Drop down profile */}
                            {checkMenu && (
                                <div className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md rounded-tr-none bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="w-2 h-2 absolute bottom-[100%] right-0 fillter border-l-[18px] border-l-transparent border-b-[10px]  border-b-white border-r-[18px] border-r-transparent"></div>
                                    <Link
                                        to="/profile"
                                        onClick={() => setCheckMenu(!checkMenu)}
                                        className="flex items-center p-2 mx-1 hover:bg-slate-300"
                                    >
                                        <CgProfile className="text-lg" />
                                        <div href="#" className="block ml-2 text-sm text-gray-700 ">
                                            Your Profile
                                        </div>
                                    </Link>
                                    <Link
                                        onClick={() => setCheckMenu(!checkMenu)}
                                        to=""
                                        className="flex items-center mx-1 p-2 roun hover:bg-slate-300"
                                    >
                                        <AiFillSetting className="text-lg" />
                                        <div className="block ml-2 text-sm text-gray-700 ">Settings</div>
                                    </Link>
                                    <Link
                                        onClick={() => logout()}
                                        to=""
                                        className="flex items-center mx-1 p-2 hover:bg-slate-300"
                                    >
                                        <TbLogout2 className="text-lg" />
                                        <div className="block ml-2 text-sm font-bold text-red-600">Sign out</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
