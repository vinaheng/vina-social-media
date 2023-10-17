import { useSelector } from 'react-redux';

function Friends() {
    const dataUser = useSelector((state) => state.User.UserData);
    if (dataUser) {
        const { friends, notFriends } = dataUser;
        console.log(friends);
        return (
            <div>
                <h1>Friends</h1>
                <hr className="my-2" />
                {/* {friends.map((item, index) => (
                    <ul key={index}>
                        <li>{item.username}</li>
                    </ul>
                ))}
                <h1>User</h1>
                <hr className="my-2" />
                {notFriends.map((item, index) => (
                    <ul key={index}>
                        <li>{item.username}</li>
                    </ul>
                ))} */}
            </div>
        );
    }
}

export default Friends;
