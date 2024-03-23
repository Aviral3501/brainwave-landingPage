import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { roadmap } from '../constants'
import { check2, grid,  loading1 } from '../assets'
import TagLine from './TagLine'

const Roadmap = () => {
  return (
   <Section className="overflow-hidden" id="roadmap">
    <div className='contianer mg:pb-10 '>
        <Heading 
        tag={"Ready to get started"}
        title={"What we're working on"}/>

        <div className='relative grid gap-6 md:grid-cols-2 mg:gap-4 md:pb-[7rem]'>
            {roadmap.map((item)=>{
                const status =item.status ==='done' ? "Done" :"In progress";
                return (
                    <div key={item.id}className=''>
                        <div className=''>
                            <div className=''>
                                <img src={grid} alt='img' className='w-full ' width={550} height={550}/>
                            </div>
                            <div className='relative z-1'>
                                <div className='flex items-center justify-between'>
                                    <TagLine>{item.date}</TagLine>
                                    <div>
                                        <img src={item.status==='done'? check2 : loading1} className='mr-2.5' width={16} height={16} alt='status'></img>
                                        <div className='tagline'>
                                        {status}
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <img src={item.imageUrl}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>

    </div>
   </Section>
  )
}

export default Roadmap
