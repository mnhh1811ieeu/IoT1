import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import DataSensorPage from "../pages/DataSensorPage/DataSensorPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
export const routes = [
    {
        path: '/dashboard',
        page: DashboardPage,
        isShowHeader : false
    },
        {
        path: '/datasensor',
        page: DataSensorPage,
        isShowHeader : true
    },
            {
        path: '/profile',
        page: ProfilePage,
        isShowHeader : false
    },{
    path: '*',
    page: NotFoundPage,
},
]