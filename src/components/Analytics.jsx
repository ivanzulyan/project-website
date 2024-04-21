import Chart from './Chart'
import React from 'react'

function Analytics() {
  return (
    <div className='flex flex-col space-y-6 py-12 px-14'>
      <div>
        <h1>Analytic</h1>
        <div className='flex space-x-8'>
        <div className='w-full h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 text-gray-500'>
            <span>Tren pertumbuhan umumnya meningkat dari tahun ke tahun, mencapai puncaknya pada tahun 2019 dengan jumlah penduduk mencapai 3.013.851.</span>
            <span>Terjadi penurunan pada tahun 2020, diikuti dengan sedikit kenaikan pada tahun-tahun berikutnya.</span>
            <span>Jumlah penduduk pada tahun 2023 adalah 2.627.210, menunjukkan pertumbuhan stabil setelah penurunan pada tahun 2020.</span>
        </div>

      </div>

      </div>
      <div className='flex space-x-8 w-4/5 flex-col'>
        <h2>Animasi Chart</h2>
        <Chart className="w-4/5"/>
      </div>
    </div>


   
  )
}

export default Analytics
