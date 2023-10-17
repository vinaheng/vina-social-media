import profile from '@/assets/logo_user.jpg';
import { MdLocationOn, MdWork } from 'react-icons/md';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
function info() {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={profile} alt="profile" className=" h-10 w-10 rounded-full object-cover" />
                    <div className="ml-5">
                        <h1 className="dark:text-gray-200">Heng Vina</h1>
                        <p>5K friends</p>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <div className="flex items-center mt-2">
                <MdLocationOn className="text-lg" />
                <p className="ml-5">Som Place In Cambodia</p>
            </div>
            <div className="flex items-center mt-2">
                <MdWork className="text-lg" />
                <p className="ml-5">Som Degree</p>
            </div>

            <hr className="my-5" />
            <div className="flex justify-between items-center">
                <p>Who view your profile</p>
                <h2>5000</h2>
            </div>
            <div className="flex justify-between items-center mt-2">
                <p>Impress from your friend</p>
                <h2>8600</h2>
            </div>
            <hr className="my-5" />
            <h2>Social Media</h2>
            <div className=" flex mt-5">
                <div className="flex items-center ml-2">
                    <BsTwitter className="text-lg" />
                    <p className="ml-2 font-semibold">Twitter</p>
                </div>
                <div className="flex items-center ml-2">
                    <FaInstagramSquare className="text-lg" />
                    <p className="ml-2 font-semibold">Instagram</p>
                </div>
                <div className="flex items-center ml-2">
                    <BsLinkedin className="text-lg" />
                    <p className="ml-2 font-semibold">Linkedin</p>
                </div>
            </div>
        </div>
    );
}

export default info;
