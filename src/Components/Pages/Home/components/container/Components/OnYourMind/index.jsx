import profile from '@/assets/logo_user.jpg';
import { FaImage } from 'react-icons/fa6';
import { RiLiveFill } from 'react-icons/ri';
import { BsEmojiSunglassesFill } from 'react-icons/bs';
function OnYourMind() {
    return (
        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg">
            <div className="flex items-center">
                <img src={profile} alt="profile" className="h-10 w-10 rounded-full object-cover" />
                <input
                    type="text"
                    placeholder="What on your mind ?"
                    className="bg-gray-200 ml-5 rounded-full px-4  py-2 w-full text-sm "
                />
            </div>
            <hr className="my-5" />
            <div className="flex justify-between">
                <div className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2  transition-all">
                    <RiLiveFill className="text-lg text-red-600" />
                    <p className="ml-2">Live Video</p>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-all">
                    <FaImage className="text-lg" />
                    <p className="ml-2">Image</p>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-all">
                    <BsEmojiSunglassesFill className="text-lg" />
                    <p className="ml-2">Feeling/activity</p>
                </div>
            </div>
        </div>
    );
}

export default OnYourMind;
