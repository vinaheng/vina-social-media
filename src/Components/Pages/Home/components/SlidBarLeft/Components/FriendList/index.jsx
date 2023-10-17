import friendProfile from '@/assets/logo_user.jpg';
import user from '@/assets/Max-R_Headshot (1).jpg';
import { useEffect, useRef, useState } from 'react';
import { GrMoreVertical } from 'react-icons/gr';
import { FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const arrFriend = [
    { img: friendProfile, name: 'Heng Vina', Mutual: '10 Mutual friends' },
    { img: friendProfile, name: 'Heng Vina1', Mutual: '10 Mutual friends' },
];

function FriendList() {
    const target = useSelector((state) => state.target.targetData);
    const [openMenus, setOpenMenus] = useState(Array(arrFriend.length).fill(false));
    const menuRef = useRef([]);
    const changeMenu = (index) => {
        const updatedOpenMenus = openMenus.map((isOpen, i) => (i === index ? !isOpen : false));
        setOpenMenus(updatedOpenMenus);
    };

    useEffect(() => {
        if (!menuRef.current.includes(target)) {
            setOpenMenus(Array(arrFriend.length).fill(false));
        }
    }, [target]);
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg mt-5">
            <h2 className="font-bold pt-5 ml-5 mb-2">Friends</h2>
            <hr className="my-0" />
            <div className="pl-5 pr-5 overflow-auto max-h-[19vh]">
                {arrFriend.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex">
                                    <div className="relative">
                                        <img src={item.img} alt="" className="h-10 w-10 rounded-full" />
                                        <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
                                    </div>
                                    <div className="ml-2">
                                        <h2>{item.name}</h2>
                                        <p>{item.Mutual}</p>
                                    </div>
                                </div>
                                <div className="flex items-center relative">
                                    <div
                                        onClick={() => changeMenu(index)}
                                        ref={(el) => (menuRef.current[index] = el)}
                                        className="p-2 hover:bg-gray-200 transition-all rounded-full cursor-pointer"
                                    >
                                        <GrMoreVertical />
                                    </div>
                                    {openMenus[index] && (
                                        <div className="absolute right-0 z-10 top-[100%] mt-3 w-48 origin-top-right rounded-md rounded-tr-none bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                            <div className="w-2 h-2 absolute bottom-[100%] right-0 fillter border-l-[18px] border-l-transparent border-b-[10px]  border-b-white border-r-[18px] border-r-transparent"></div>
                                            <div className="flex items-center mx-1 p-2 rounded-sm hover:bg-slate-300">
                                                <FaUserTimes className="text-lg" />
                                                <Link to="" className="ml-2">
                                                    Unfriend
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr className="my-2" />
                        </div>
                    );
                })}
            </div>
            {/*  */}
            <h2 className="font-bold mt-5 ml-5">Confirm friend</h2>
            <hr className="my-2" />
            <div className="overflow-auto max-h-[19vh] pl-5 pr-5">
                <div>
                    <div className="flex justify-between mt-2 ">
                        <div className="flex items-center">
                            <img src={user} alt="" className="h-10 w-10 rounded-full" />
                            <div className="ml-2">
                                <h2>Heng Vina</h2>
                                <p>10 Mutual riends</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-gray-600">Confirm</button>
                            <button className="ml-2 bg-gray-300 text-black">Delete</button>
                        </div>
                    </div>
                    <hr className="my-2" />
                </div>
            </div>
        </div>
    );
}

export default FriendList;
