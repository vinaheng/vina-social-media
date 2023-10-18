import moment from 'moment/moment';
import { MdMoreHoriz } from 'react-icons/md';
import { AiTwotoneLike, AiOutlineComment } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import Loading from '@/Components/Loading/LoadingNewfeet';
import { base_url } from '@/Base_Url';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
function Newfeet() {
    const token = localStorage.getItem('token');
    const [dataNewFeet, setNewfeet] = useState([]);
    const [loading, setLoading] = useState(true);
    const userData = useSelector((state) => state.User.UserData);
    const api = axios.create({
        baseURL: base_url,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    async function getNewFeet() {
        await api
            .get('/post/get-friend-posts/' + userData._id)
            .then((res) => {
                setNewfeet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    }
    useEffect(() => {
        getNewFeet();
    }, []);
    async function likePost(postId, type) {
        const newData = dataNewFeet.map((item) => {
            if (type === 'like') {
                return item._id === postId ? { ...item, numberLikes: item.numberLikes + 1, isLike: true } : item;
            } else {
                return item._id === postId ? { ...item, numberLikes: item.numberLikes - 1, isLike: false } : item;
            }
        });
        console.log(newData);
        setNewfeet(newData);
        const data = { user_id: userData._id, post_id: postId };
        await api.post('/post/like-un-like', data);
    }
    return (
        <div>
            {!loading &&
                dataNewFeet.map((item, index) => {
                    return (
                        <div key={index} className="bg-white dark:bg-slate-800 p-5 pb-2 rounded-lg mt-2">
                            <div className=" flex justify-between items-center">
                                <div className="flex items-center">
                                    <img
                                        src={base_url + '/' + item.profile_picture_path}
                                        alt="profile"
                                        className="h-10 w-10  rounded-full"
                                    />
                                    <div className="ml-5">
                                        <h2 className="text-gray-800 dark:text-gray-200">{item.user_name}</h2>
                                        <p className="text-sm">{moment(item.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-2 rounded-full hover:bg-gray-200 transition-all">
                                    <MdMoreHoriz className="text-lg" />
                                </div>
                            </div>
                            {/* Description */}
                            <p className="mt-2 mb-2">
                                Loerm ipsum dolor sit amet, consectetur adipisicing elit. Nam, at?
                            </p>
                            <img
                                src={base_url + '/' + item.picture_path}
                                alt=""
                                className=" rounded-lg h-[25rem] w-full object-cover"
                            />
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center mt-2">
                                    {item.numberLikes !== 0 ? (
                                        <AiTwotoneLike className="text-lg text-blue-600" />
                                    ) : (
                                        <AiTwotoneLike className="text-lg text-gray-400 dark:text-white " />
                                    )}
                                    <p className="text-sm ml-2">{item.numberLikes} Likes</p>
                                </div>
                                <div className="flex items-center mt-2">
                                    <p className="text-sm ml-2">168 Comments</p>
                                    <p className="text-sm ml-2">169 Shares</p>
                                </div>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-between cursor-pointer">
                                <div
                                    onClick={
                                        item.isLike
                                            ? () => likePost(item._id, 'unlike')
                                            : () => likePost(item._id, 'like')
                                    }
                                    className="flex items-center p-2 dark:hover:bg-gray-700 transition-all w-full justify-center hover:bg-gray-100"
                                >
                                    {item.isLike && (
                                        <div className="flex items-center">
                                            <AiTwotoneLike className="text-lg text-blue-600 " />
                                            <p className="text-sm ml-2 text-blue-600 font-bold">Like</p>
                                        </div>
                                    )}
                                    {!item.isLike && (
                                        <div className="flex items-center">
                                            <AiTwotoneLike className="text-lg text-gray-400 dark:text-white" />
                                            <p className="text-sm ml-2">Like</p>
                                        </div>
                                    )}
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
                    );
                })}
            {loading &&
                [...Array(4).keys()].map((i) => {
                    return (
                        <div key={i}>
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
                        </div>
                    );
                })}
        </div>
    );
}

export default Newfeet;
