import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/index'; // 여기에서 rootReducer를 가져옵니다.

const store = configureStore({
    reducer: rootReducer,
});

export default store;