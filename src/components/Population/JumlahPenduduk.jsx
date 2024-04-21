import React, { useEffect, useState } from 'react'

function JumlahPenduduk() {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('http://localhost:8081/jumlah_penduduk')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [])
    
  return (
<div className="w-full flex flex-col items-center justify-center m-2">
    <h1 className='py-3 mt-5 text-xl font-semibold'>DATASET JUMLAH PENDUDUK KOTA BEKASI 2012 - 2022</h1>
    <table className="w-full max-w-screen-lg">
        <thead>
            <tr>
                <th className="border py-4 text-center">No</th>
                <th className="border py-4 text-center">Tahun</th>
                <th className="border py-4 text-center">Jumlah Penduduk</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d, i) => (
                <tr key={i} className="border">
                    <td className="border py-4 text-center">{d.id_penduduk}</td>
                    <td className="border py-4 text-center">{d.tahun}</td>
                    <td className="border py-4 text-center">{d.jumlah_penduduk} Penduduk</td>
                </tr>
            ))}
        </tbody>
    </table>
    <h1>Sumber Resmi : Badan Pusat Statistik Kota Bekasi</h1>
</div>




  )
}

export default JumlahPenduduk
