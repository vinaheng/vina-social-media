import { base_url } from '@/Base_Url';
import { useEffect, useState } from 'react';
import { IoPersonAddSharp } from 'react-icons/io5';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { api } from '@/Base_Url';
import { useSelector } from 'react-redux';
function UserListt() {
    const userData = useSelector((state) => state.User.UserData);
    const [addFriend, setAddFriend] = useState(true);
    const [loading, setLoading] = useState(true);
    const [user, SetUser] = useState([]);
    const onchange = (paramet) => {
        if (paramet === true) {
            setAddFriend(false);
        } else {
            setAddFriend(true);
        }
    };
    const GetUser = () => {
        api.get('/friend/all-not-friend/' + userData._id)
            .then((resualt) => {
                SetUser(resualt.data.notFriends);
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };
    useEffect(() => {
        GetUser();
    }, []);
    return (
        <div className="bg-white dark:bg-slate-800 mt-5 rounded-lg ">
            <h2 className="font-bold pt-5 ml-5 pb-2">User List</h2>
            <hr className="my-0" />
            <div className="p-5 overflow-auto max-h-[47vh]">
                {!loading
                    ? user.map((item, index) => {
                          return (
                              <div key={index}>
                                  <div className="flex justify-between items-center mt-2">
                                      <div className="flex">
                                          <img
                                              src={base_url + '/' + item.profile_picture_path}
                                              alt=""
                                              className="h-10 w-10 rounded-full"
                                          />
                                          <div className="ml-2">
                                              <h2>{item.username}</h2>
                                              <p>10 Mutual riends</p>
                                          </div>
                                      </div>

                                      {addFriend && (
                                          <div
                                              onClick={() => onchange(true)}
                                              className="flex items-center p-2 rounded-full hover:bg-gray-200 transition-all"
                                          >
                                              <IoPersonAddSharp className="text-lg" />
                                          </div>
                                      )}
                                      {!addFriend && (
                                          <button
                                              className="ml-2 bg-gray-300 text-black"
                                              onClick={() => onchange(false)}
                                          >
                                              Cancel
                                          </button>
                                      )}
                                  </div>
                                  <hr className="my-2 border-1 border-gray-300 dark:border-gray-400" />
                              </div>
                          );
                      })
                    : [...Array(10).keys()].map((i) => {
                          return (
                              <Stack key={i} animation="wave" spacing={1} className="pb-2">
                                  <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                          <Skeleton variant="circular" width={40} height={40} />
                                          <div className="ml-2">
                                              <Skeleton variant="rectangular" width={80} height={10} />
                                              <Skeleton className="mt-2" variant="rectangular" width={40} height={10} />
                                          </div>
                                      </div>
                                      <Skeleton variant="rounded" width={30} height={30} />
                                  </div>
                                  <Skeleton variant="rounded" className="w-[100%]" height={3} />
                              </Stack>
                          );
                      })}
            </div>
        </div>
    );
}

export default UserListt;
