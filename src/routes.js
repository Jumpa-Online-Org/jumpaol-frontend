import  React from 'react'

const Home = React.lazy(() => import('./views/Home'));
const Detail = React.lazy(() => import('./views/Detail'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/detail', name: 'Detail', component: Detail },
]
export default routes