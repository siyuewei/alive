import HomeView from '../Views/HomeView';

const MainRoutes = {
    path: '/',
    element: <HomeView />,
    children: [
        {
            path: '/',
            element: <HomeView />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <HomeView />
                }
            ]
        },

    ]
};

export default MainRoutes;