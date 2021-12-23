import React from 'react'
import { useLocation } from 'react-router-dom'

import './list.css'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation()
  const { title, data } = location.state.data
  return (
    <div className="wrap-list">
      <div className="title-list text-red">{title}</div>
      <div className="content-list">
        {data.map((item, i) => (
          <div className="list" key={i}>
            <img src="images/kampusiana/kampusiana-1.png" className="mb-2" alt='kampus-img-1' />
            <div className="kampus-author text-red">Fadilah Ramdhani Fazrin </div>
            <h4>Laksanakan Vaksinasi Pertama, Unpas Rencanakan Dosis Kedua</h4>
            <div className="kampus-date">Sep 11, 2021</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index
