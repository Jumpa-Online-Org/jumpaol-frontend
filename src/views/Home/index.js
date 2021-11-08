import React from 'react'
import Kampusiana from '../../components/Kampusiana'
import LatestPost from '../../components/LatestPost'
import Popular from '../../components/Popular'
import './home.css'

const Home = () => {
    return (
        <div className="main">
            <Popular />
            <LatestPost />
            <Kampusiana />
        </div>
    )
}

export default Home
