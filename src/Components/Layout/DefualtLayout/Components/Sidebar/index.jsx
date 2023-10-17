import profile from '@/assets/logo_user.jpg';
import { FaUserFriends } from 'react-icons/fa';
import { RiUserReceived2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { base_url } from '@/Base_Url';
function Sidebar() {
    const userData = useSelector((state) => state.User.UserData);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
            <Link
                to="/profile"
                className="flex justify-between items-center p-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-100"
            >
                <div className="flex items-center">
                    <img
                        src={base_url + '/' + userData.profile_picture_path}
                        alt="profile"
                        className=" h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-5">
                        <h1 className="dark:text-gray-200">{userData.username}</h1>
                        <p>{userData.friends.length} friends</p>
                    </div>
                </div>
            </Link>
            <hr className="my-5" />
            <Link
                to="/friend"
                className="flex items-center mt-2 min-w-[16vw] p-2  rounded-md dark:hover:bg-slate-700  hover:bg-gray-100"
            >
                <FaUserFriends className="text-2xl" />
                <p className="ml-5 text-lg">Friends</p>
            </Link>
            <Link
                to="/friends-requests"
                className="flex items-center mt-2 min-w-[16vw] p-2  rounded-md dark:hover:bg-slate-700  hover:bg-gray-100"
            >
                <RiUserReceived2Fill className="text-2xl" />
                <p className="ml-5 text-lg">Friend requests</p>
            </Link>
        </div>
    );
}

export default Sidebar;
