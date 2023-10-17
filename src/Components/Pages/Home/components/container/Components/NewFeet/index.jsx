import profile from '@/assets/logo_user.jpg';
import imgPost from '@/assets/pexels-pixabay-45853.jpg';
import { MdMoreHoriz } from 'react-icons/md';
import { AiTwotoneLike, AiOutlineComment } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
function newfeet() {
    const loading = true;
    return (
        <div>
            {loading && (
                <div className="bg-white dark:bg-slate-800 p-5 pb-2 rounded-lg mt-2">
                    <div className=" flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={profile} alt="profile" className="h-10 w-10  rounded-full" />
                            <div className="ml-5">
                                <h2 className="text-gray-800 dark:text-gray-200">Heng Vina</h2>
                                <p className="text-sm">48 mins ago</p>
                            </div>
                        </div>
                        <div className="flex items-center p-2 rounded-full hover:bg-gray-200 transition-all">
                            <MdMoreHoriz className="text-lg" />
                        </div>
                    </div>
                    {/* Description */}
                    <p className="mt-2 mb-2"> Loerm ipsum dolor sit amet, consectetur adipisicing elit. Nam, at?</p>
                    <img src={imgPost} alt="" className=" rounded-lg h-[25rem] w-full object-cover" />
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center mt-2">
                            <AiTwotoneLike className="text-lg text-gray-400 dark:text-white" />
                            <p className="text-sm ml-2">20k and others</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <p className="text-sm ml-2">168 Comments</p>
                            <p className="text-sm ml-2">169 Shares</p>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center p-2 dark:hover:bg-gray-700 transition-all w-full justify-center hover:bg-gray-100">
                            <AiTwotoneLike className="text-lg text-gray-400 dark:text-white" />
                            <p className="text-sm ml-2">Like</p>
                        </div>
                        <div className="flex items-center  p-2 dark:hover:bg-gray-700 transition-all w-full justify-center hover:bg-gray-100">
                            <AiOutlineComment className="text-lg text-gray-400 dark:text-white" />
                            <p className="text-sm ml-2">Comment</p>
                        </div>
                        <div className="flex items-center  p-2 dark:hover:bg-gray-700 transition-all w-full justify-center hover:bg-gray-100">
                            <FaShare className="text-lg text-gray-400 dark:text-white" />
                            <p className="text-sm ml-2">share</p>
                        </div>
                    </div>
                </div>
            )}
            {!loading && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-lg mt-2 flex-1">
                    <Stack spacing={1} animation="wave">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Skeleton variant="circular" width={40} height={40} />
                                <div className="ml-2">
                                    <Skeleton variant="rectangular" width={80} height={10} />
                                    <Skeleton className="mt-2" variant="rectangular" width={40} height={10} />
                                </div>
                            </div>
                            <Skeleton variant="rounded" width={20} height={20} />
                        </div>
                        <Skeleton animation="wave" variant="rounded" className="w-full" height={40} />
                        <Skeleton animation="wave" variant="rounded" className="w-full" height={300} />
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <Skeleton variant="rectangular" width={15} height={15} />
                                <Skeleton variant="rectangular" width={80} height={10} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <Skeleton variant="rectangular" width={80} height={10} />
                                <Skeleton variant="rectangular" width={80} height={10} />
                            </div>
                        </div>
                        <Skeleton variant="rounded" className="w-full" height={5} />
                        <div className="flex justify-around pt-4">
                            <div className="flex gap-2 items-center">
                                <Skeleton variant="rectangular" width={15} height={15} />
                                <Skeleton variant="rectangular" width={80} height={10} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <Skeleton variant="rectangular" width={15} height={15} />
                                <Skeleton variant="rectangular" width={80} height={10} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <Skeleton variant="rectangular" width={15} height={15} />
                                <Skeleton variant="rectangular" width={80} height={10} />
                            </div>
                        </div>
                    </Stack>
                </div>
            )}
        </div>
    );
}

export default newfeet;
