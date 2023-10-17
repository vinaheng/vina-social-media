import { configureStore } from '@reduxjs/toolkit';
import targetReducer from './Targets';
import AuthUserReducer from './AuthUser';
import UserReducer from './User';
import OpenRegisterReducer from './OpenRegister';

export default configureStore({
    reducer: {
        target: targetReducer,
        AuthUser: AuthUserReducer,
        User: UserReducer,
        OpenRegister: OpenRegisterReducer,
    },
});
