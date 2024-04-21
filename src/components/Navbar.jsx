import React, { useState } from 'react'
import Logo from './../assets/icons/Logo.png'
import RightArrow from './../assets/icons/rightArrow.svg'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  HelpCircleIcon,
  ArrowRightLeft
} from "lucide-react" 

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Analytics",
    icon: Clock3,
    path: "/analytic",
  },
  {
    name: "Dataset",
    icon: BarChart2,
    path: "/dataset",
  },
  {
    name: "Perhitungan",
    icon: HelpCircleIcon,
    path: "/perhitungan",
  },
  {
    name: "Prediksi",
    icon: ArrowRightLeft,
    path: "/prediksi",
  },
]

const variants = {
  expanded: {width:  "20%"},
  nonExpanded: {width: "5%"}
}

function Navbar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();


  const isHomepage = () => {
    return location.pathname === '/homepage'
  };

  return (
    <motion.div 
    animate = {isExpanded ?  "expanded" : "nonExpanded"}
    variants={variants}
    className={'py-12 flex flex-col border border-r-1 w-1/5 h-screen relative bg-blue-950' + (isExpanded ? " px-10": " px-2")}>
      <div className='logo-div flex space-x-3 items-center text-white'>
        <img src={Logo} alt="" />
        <span className={isExpanded ? "block" : "hidden"}>Prediksi Penduduk Kota Bekasi</span>
      </div>

      <div onClick={() => setIsExpanded(!isExpanded)} className='w-5 h-5 bg-[#FF9800] rounded-full absolute -right-[10.5px] top-15 flex items-center justify-center'>
        <img src= {RightArrow} className='w-[5px]'/>
      </div>


      <div className='mt-9 flex flex-col space-y-8 text-white'>
        {navLinks.map((item, index) => (
          <NavLink to={item.path} key={index} className={'flex space-x-3 p-3 rounded' + (activeNavIndex === index ? " bg-[#FF9800] text-white font-semibold" : " ")}
          onClick={() =>  setActiveNavIndex(index)}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
          </NavLink>
        ))}
      </div>

      
      <div>
      <NavLink to="/homepage">
          <button className={isExpanded ? "block bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-64" : "hidden"}>
            Halaman Utama
          </button>
        </NavLink>
      </div>

    </motion.div>
  )
}

export default Navbar
