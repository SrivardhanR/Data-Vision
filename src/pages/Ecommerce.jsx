import React from 'react'
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import {Stacked , Pie, Button , SparkLine} from "../components";
import { earningData,SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import welcome from "../data/welcome-bg.svg";

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover'
              style={{ backgroundImage: `url(${welcome})` }}>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='font-bold text-gray-400'>Earnings</p>
                  <p className='text-xl'>$63,264</p>
                </div>
              </div>
              <div className='mt-6'>
                <Button
                  color = 'white'
                  bgColor = 'blue'
                  text = 'Download'
                  borderRadius = '10px'
                  size = 'md'
                />
              </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce