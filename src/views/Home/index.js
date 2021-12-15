import React from 'react'
import Galeri from './components/Galeri'
import Kampusiana from './components/Kampusiana'
import LatestPost from './components/LatestPost'
import Popular from './components/Popular'
import './home.css'

const Home = () => {
    return (
        <div className="main">
            <Popular />
            <LatestPost />
            <Kampusiana />
            <Galeri />
        </div>
    )
}

export default Home
