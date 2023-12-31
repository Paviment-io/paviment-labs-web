'use client'
import React from 'react';
import Waves from "../../components/waves/waves";


const Banner = () => {
  return (
    <>
      <div className='flex height_50 items-center'>
        <div className='flex text-2xl sm:text-4xl absolute left-5 sm:left-10'>
          <div className='color_primary'>
            Construindo
          </div>
          <div className="ml-2 -mt-0.5 color_terciary" id="animate">
            <div className="slideIn1" id="txtAniText">Sonhos.</div>
            <div className="slideIn2" id="txtAniVideo">Negócios.</div>
            <div className="slideIn3" id="txtAniAnimation">Aplicativos.</div>
            <div className="slideIn4" id="txtAniStuff">Sites.</div>
            <div className="slideIn5" id="txtAniStuff">Projetos.</div>
          </div>
        </div>
        <div className='color_terciary sm:text-3xl absolute top-56 sm:right-10 right-5'>
          Seja uma idéia ou um problema, <br />
          <div className='color_primary'>estamos aqui para te ajudar</div>
        </div>
      </div>
      <div className='sm:-mt-24'>
        <Waves />
      </div>
      <div className='-mt-3 sm:-mt-24 rotate-180'>
        <Waves />
      </div>
    </>
  )
}

export default Banner