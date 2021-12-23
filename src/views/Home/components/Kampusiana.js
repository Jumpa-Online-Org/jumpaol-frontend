import React from 'react'
import { Link } from 'react-router-dom'

const Kampusiana = () => {
    return (
        <div className="wrap-lp">
            <div className="header-lp">
                <div className="text-lp mb-4"><span className="text-red">Kampu</span>siana</div>
                <hr className="line-lp"></hr>
                <div className="seeall-lp">
                    <Link
                        to={{
                            pathname: '/list',
                            state: {
                                data: {
                                    title: 'Kampusiana',
                                    data: [
                                        {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6},
                                        {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12},
                                    ]
                                }
                            }
                        }}
                    >
                        <span className="text-red" id='seeall'>see all</span>
                    </Link>
                </div>
            </div>
            <div className="content-kampus">
                <div className="kampus-1">
                    <img src="images/kampusiana/kampusiana-1.png" className="mb-2" alt='kampus-img-1' />
                    <div className="kampus-author text-red">Fadilah Ramdhani Fazrin </div>
                    <h4>Laksanakan Vaksinasi Pertama, Unpas Rencanakan Dosis Kedua</h4>
                    <div className="kampus-date">Sep 11, 2021</div>
                </div>
                <div className="kampus-1">
                    <img src="images/kampusiana/kampusiana-1.png" className="mb-2" alt='kampus-img-2' />
                    <div className="kampus-author text-red">Fadilah Ramdhani Fazrin </div>
                    <h4>Laksanakan Vaksinasi Pertama, Unpas Rencanakan Dosis Kedua</h4>
                    <div className="kampus-date">Sep 11, 2021</div>
                </div>
                <div className="kampus-1">
                    <img src="images/kampusiana/kampusiana-1.png" className="mb-2" alt='kampus-img-3' />
                    <div className="kampus-author text-red">Fadilah Ramdhani Fazrin </div>
                    <h4>Laksanakan Vaksinasi Pertama, Unpas Rencanakan Dosis Kedua</h4>
                    <div className="kampus-date">Sep 11, 2021</div>
                </div>
            </div>
        </div>
    )
}

export default Kampusiana
