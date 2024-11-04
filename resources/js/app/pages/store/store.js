
import appSlice from '@/app/redux/app-slice';
import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '../admin/dashboard/redux/dashboard-slice';
const store = configureStore({
    reducer: {
        app: appSlice,
        dashboards: dashboardSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
