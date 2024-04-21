import React from 'react'
import Map from "../../../assets/pict/BekasiMap.png";
import Penduduk from "../../../assets/pict/Penduduk.jpg";


function Homepage() {
  return (
    <>
       <nav className="py-7 border-b">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="lg:text-xl text-xl font-semibold text-center"><span className="text-blue-700 font-semibold">Prediksi</span> Penduduk</a>
        </div>
      </nav>

      <section className="relative h-screen">
        <div className="absolute inset-0 flex justify-center items-center bg-black">
            <img src={Penduduk} className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            <img src={Map}  className="min-h-32 max-h-80 py-7" />
            <h5 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white">WEBSITE PREDIKSI PENDUDUK KOTA BEKASI</h5>
            <p className="mt-2 text-base md:text-lg lg:text-xl xl:text-2xl py-5 text-white">Melangkah Bersama Menuju Masa Depan Yang Lebih Baik</p>
            <a href="index.html" className="mt-7 bg-blue-700 hover:bg-blue-400 text-white font-semibold py-1 px-4 rounded-xl md:py-3 md:px-6 md:text-lg lg:py-4 lg:px-8 lg:text-xl xl:py-4 xl:px-10 xl:text-2xl">Lihat Detail</a>
        </div>


      </section>
    
    </>
  )
}

export default Homepage
