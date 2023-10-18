import { Routes, Route } from 'react-router-dom';
import { defualLayout, headerOnly } from '@/Components/Layout';
import { PublicRoutes } from '@/Routes';
import { useDispatch } from 'react-redux';
import { setTarget } from '@/redux/Targets';
import { useEffect, useState } from 'react';
import AuthUser from './Components/AuthUser';
import { useSelector } from 'react-redux';
import { setUser } from './redux/User';
import { base_url } from './Base_Url';
import axios from 'axios';
import Header from './Components/Layout/Compoments/Header';
function App() {
    const dispatch = useDispatch();
    const tokenData = useSelector((state) => state.AuthUser.token);
    const target = useSelector((state) => state.target.targetData);
    const [loading, setLoading] = useState(false);
    const checkLogOut = target === 'block ml-2 text-sm font-bold text-red-600';
    const [userLogin, setUserLogin] = useState();
    window.onclick = (e) => {
        dispatch(setTarget(e.target.className));
    };
    //
    const token = localStorage.getItem('token');
    const api = axios.create({
        baseURL: base_url,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    async function getDataUser() {
        setLoading(true);
        await api
            .get('auth/user')
            .then((resualt) => {
                dispatch(setUser(resualt.data));
                setUserLogin(resualt.data);
            })
            .catch((error) => {
                setUserLogin('');
                localStorage.removeItem('token');
            });
        setLoading(false);
    }
    useEffect(() => {
        getDataUser();
    }, [tokenData, checkLogOut]);
    return (
        <div>
            {!loading ? (
                userLogin ? (
                    <div>
                        {/* <GetUser /> */}
                        <Routes>
                            {PublicRoutes.map((route, index) => {
                                var Layout = defualLayout;
                                const Page = route.component;

                                if (route.layout === headerOnly) {
                                    Layout = headerOnly;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                ) : (
                    <AuthUser />
                )
            ) : (
                <Header />
            )}
        </div>
    );
}

export default App;
