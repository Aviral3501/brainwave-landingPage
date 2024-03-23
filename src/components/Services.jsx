import React from 'react'
import Section from './Section'
import Heading from './Heading'
import {service1, service2 , service3 , check} from '../assets'
import {brainwaveServices,brainwaveServicesIcons} from "../constants"

const Services = () => (
  <Section crosses id="how-to-use">
    <div className='container'>
      <Heading title={"Generative AI made for creators"}
        text={" Brainwave unlocks the potential of AI powered AI applications."} />

      <div className='relative'>
        <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] '>
          <div className='absolute top-0 left-0  w-full h-full pointer-events-none md:w-3/5 xl:w-auto  '>
            <img className='w-full h-full object-cover md:object-right' width={800} height={730} src={service1} alt="smartest ai" />
          </div>
          <div className='relative z-1 max-w-[17rem] ml-auto'>
            <h4>Smartest AI</h4>
            <p>Brainwave unlocks the potential of AI powered applicstions.</p>
            <ul className='body-2'>{brainwaveServices.map((item,index)=>(
              <li key={index}>
                <img src={check}   alt='img'/>
                <p> {item} </p>
              </li>
            ))}</ul>
          </div>
          {/* <div>
            <img src={service2} alt={service2} />
          </div>
          <div>
            <img src={service3} alt={service3} />
          </div> */}

        </div>

      </div>

    </div>
  </Section>

)

export default Services
