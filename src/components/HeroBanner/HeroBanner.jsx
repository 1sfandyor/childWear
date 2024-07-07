import React from 'react'
import { RounedBlock } from '../RounedBlock/RounedBlock'
import { FaAnglesRight } from "react-icons/fa6";
import boy from '../../assets/images/outfits/boy.png';
import boyR from '../../assets/images/outfits/boy@2x.png';

export const HeroBanner = () => {
  return (
    <div className='flex bg-coctail w-full pl-[70px]'>

      {/* CONTENT */}
      <div className='flex flex-col items-start w-[600px] font-primary'>
        <h1 className='text-havy text-[56px] font-medium leading-[50px] mb-2.5 mt-[101px]'>Jackets for all kinds of deseases</h1>
        <p className='text-dark text-base font-normal leading-[19px] w-[420px] mb-6'>Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin</p>
        <RounedBlock 
          href="login/"
          className={`flex items-center border-havy text-havy`} 
          py={'py-[0.8rem]'} 
          px={'px-[1.5rem]'} >

          <FaAnglesRight className='mr-2 ' fontSize={7}/>
          <span className="font-medium font-inter">Подробнее</span>
        </RounedBlock>
      </div>

      {/* IMAGE */}
      <div className=''>
        <div className='relative'>
          <img src={boy} alt="Boy" srcSet={`${boy} 1x, ${boyR} 2x`}/>
          <div className='-rotate-[20deg] absolute flex items-center justify-center w-[210px] h-[117px] rounded-[50%] backdrop-blur-xl   bottom-[107px] left-[195px]'>
            <p className='font-semibold text-[32px] leading-[38px] self-center text-white'>-60%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
