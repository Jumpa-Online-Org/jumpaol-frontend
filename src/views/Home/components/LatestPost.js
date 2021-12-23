import React from 'react'
import { Link } from 'react-router-dom'

const LatestPost = () => {
    return (
        <div className="wrap-lp mb-5">
            <div className="header-lp">
                <div className="text-lp mb-4">Latest <span className="text-red">Post</span></div>
                <hr className="line-lp"></hr>
                <div className="seeall-lp">
                    <Link
                        to={{
                            pathname: '/list',
                            state: {
                                data: {
                                    title: 'LatestPost',
                                    data: [
                                        {id: 1},
                                        {id: 2},
                                        {id: 3},
                                        {id: 4},
                                        {id: 5},
                                        {id: 6},
                                    ]
                                }
                            }
                        }}
                    >
                        <span className="text-red" id='seeall'>see all</span>
                    </Link>
                    {/* <a href="#see-all" className="text-red">see all</a> */}
                </div>
            </div>
            <div className="content-lp">
                <div className="lp-1">
                    <img src="images/latestpost/latestpost-1.png" alt='lp-img-1' />
                    <div className="lp-info d-flex flex-row justify-content-between my-2 text-red">
                        <div className="lp-date">Sep 11, 2021</div>
                        <div className="lp-author">Mang Dhiva</div>
                    </div>
                    <h1 className="lp-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                    <p className="lp-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget enim at vehicula condimentum in. Viverra sit urna, viverra tellus tellus maecenas sit netus. Pellentesque.</p>
                </div>
                <div className="lp-2">
                    <img src="images/latestpost/latestpost-1.png" alt='lp-img-2' />
                    <div className="lp-info d-flex flex-row justify-content-between my-2 text-red">
                        <div className="lp-date">Sep 11, 2021</div>
                        <div className="lp-author">Mang Dhiva</div>
                    </div>
                    <h5 className="lp-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                </div>
                <div className="lp-3">
                    <img src="images/latestpost/latestpost-1.png" alt='lp-img-3' />
                    <div className="lp-info d-flex flex-row justify-content-between my-2 text-red">
                        <div className="lp-date">Sep 11, 2021</div>
                        <div className="lp-author">Mang Dhiva</div>
                    </div>
                    <h5 className="lp-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                </div>
            </div>
        </div>
    )
}

export default LatestPost
