import Chart from './Chart'
import React from 'react'
import PopulationTable from './Population/PopulationTable'

function Dashboard() {
  return (
    <div className='flex flex-col space-y-6 py-12 px-14'>
      <h1>Dashboard</h1>

      <div className='flex space-x-8'>
        <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 text-gray-500 bg-blue-800'>
            <span className='text-2xl text-white font-bold py-2'>12</span>    
            <span className='text-2xl text-white font-bold py-2'>DATASET</span>   
        </div>
        <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 text-gray-500 bg-blue-800'>
            <span className='text-2xl text-white font-bold py-2'>13</span>    
            <span className='text-2xl text-white font-bold py-2'>DATA PERHITUNGAN</span>   
        </div>
      </div>
      <div>
      </div>
      

    </div>
  )
}

export default Dashboard
