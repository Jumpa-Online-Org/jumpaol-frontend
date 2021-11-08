import React from 'react'

const Popular = () => {
    return (
        <div className="wrap-popular mb-5">
            <div className="popular-1" style={{backgroundImage: `url("http://localhost:3000/images/popular/popular-1.png")` }}>
                <div className="popular-title">
                    <div>Popular</div>
                </div>
                <div className="popular-desc">
                    <div className="popular-desc-info">Sep 11, 2021 Berita Bandung</div>
                    <div className="popular-desc-content">Aksi Kamisan ke-363 Memperingati Hari tani & Menolak Lupa 22 Tahun Tragedi Semanggi II</div>
                    <div className="popular-desc-line"></div>
                    <div className="popular-desc-author">mang diva</div>
                </div>
            </div>
            <div className="popular-2" style={{backgroundImage: `url("http://localhost:3000/images/popular/popular-2.png")` }}>
                <div className="popular-title-mini">2</div>
                <div className="popular-desc-mini">
                    <div className="popular-desc-content-mini">Animal Abuse dari Kacamata Filsafat Manusia</div>
                </div>
            </div>
            <div className="popular-3" style={{backgroundImage: `url("http://localhost:3000/images/popular/popular-3.png")` }}>
                <div className="popular-title-mini">3</div>
                <div className="popular-desc-mini">
                    <div className="popular-desc-content-mini">Animal Abuse dari Kacamata Filsafat Manusia</div>
                </div>
            </div>
            <div className="popular-4" style={{backgroundImage: `url("http://localhost:3000/images/popular/popular-4.png")` }}>
                <div className="popular-title-mini">4</div>
                <div className="popular-desc-mini">
                    <div className="popular-desc-content-mini">Animal Abuse dari Kacamata Filsafat Manusia</div>
                </div>
            </div>
        </div>
    )
}

export default Popular
