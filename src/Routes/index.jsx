import Home from '@/Components/Pages/Home';
import { headerOnly } from '@/Components/Layout/index';
import Firends from '@/Components/Pages/Home/components/Friends';
import FriendsRequests from '@/Components/Pages/Home/components/FriendsRequests';
import Profile from '@/Components/Pages/Profile';

const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: headerOnly },
    { path: '/friend', component: Firends },
    { path: '/friends-requests', component: FriendsRequests },
];

export { PublicRoutes };
