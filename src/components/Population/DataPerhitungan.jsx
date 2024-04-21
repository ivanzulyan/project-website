import React, { useEffect, useState } from 'react'

function DataPerhitungan() {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('http://localhost:8081/perhitungan')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [])
    
  return (
<div className="w-full flex flex-col items-center justify-center m-2">
    <h1 className='py-2 mt-5 text-xl font-semibold'>Perhitungan Dataset Linear Regression</h1>
    <table className="w-full max-w-screen-2xl">
        <thead>
            <tr>
                <th className="border py-2 text-center">No</th>
                <th className="border py-2 text-center">Tahun 'X1'</th>
                <th className="border py-2 text-center">Jumlah Penduduk 'Y1'</th>
                <th className="border py-2 text-center">X2</th>
                <th className="border py-2 text-center">Y2</th>
                <th className="border py-2 text-center">XY</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d, i) => (
                <tr key={i} className="border">
                    <td className="border py-2 text-center">{d.id_perhitungan}</td>
                    <td className="border py-2 text-center">{d.tahun}</td>
                    <td className="border py-2 text-center">{d.jumlah_penduduk} Penduduk</td>
                    <td className="border py-2 text-center">{d.x2}</td>
                    <td className="border py-2 text-center">{d.y2}</td>
                    <td className="border py-2 text-center">{d.xy}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <div className='w-full flex flex-col items-center justify-center m-2'>
        <table className='w-full max-w-screen-2xl'>
            <tbody>
                <tr className='border'>
                    <td className='border py-2 px-1 text-center'>Σ</td>
                    <td className='border py-2 text-center'>16.148</td>
                    <td className='border py-2 text-center'>22.066.591</td>
                    <td className='border py-2 text-center'>32.594.780</td>
                    <td className='border py-2 text-center'>61.094.151.688.533</td>
                    <td className='border py-2 text-center'>44.539.857.922</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className='flex mt-8'>
        <div className='px-10'>
            <h1 className='text-xl'>Koefisien a = 1361038,79</h1>
            <h1 className='text-xl'>Koefisien b = 666,6748252</h1>
        </div>
        <div className='px-10'>
            <h1 className='text-xl'>Hasil Prediksi Penduduk Kota Bekasi 3 tahun yang akan datang adalah :</h1>
            <h1 className='text-xl'>2024 = 2.710.388 Penduduk Kota Bekasi</h1>
            <h1 className='text-xl'>2025 = 2.711.055 Penduduk Kota Bekasi</h1>
            <h1 className='text-xl'>2026 = 2.711.055 Penduduk Kota Bekasi</h1>
        </div>
    </div>
</div>




  )
}

export default DataPerhitungan
