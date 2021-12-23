import React from 'react'

const Home = React.lazy(() => import('./views/Home'));
const Detail = React.lazy(() => import('./views/Detail'));
const List = React.lazy(() => import('./views/List'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/detail', name: 'Detail', component: Detail },
    { path: '/list', name: 'List', component: List },
]
export default routes