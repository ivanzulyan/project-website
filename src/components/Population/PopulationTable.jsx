import React, { useState } from 'react';

const PopulationTable = () => {
  // Data jumlah penduduk untuk setiap tahun
  const [populationData, setPopulationData] = useState([
    { year: 2020, population: 1000000 },
    { year: 2021, population: 1100000 },
    { year: 2022, population: 1200000 },
    // Tambahkan data penduduk untuk tahun-tahun berikutnya sesuai kebutuhan
  ]);

  return (
    <div>
      <h2>Jumlah Penduduk per Tahun</h2>
      <table>
        <thead>
          <tr>
            <th>Tahun</th>
            <th>Jumlah Penduduk</th>
          </tr>
        </thead>
        <tbody>
          {populationData.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopulationTable;
