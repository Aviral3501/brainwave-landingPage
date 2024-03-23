import { check } from "../assets"
import { pricing } from "../constants"
import Button from "./Button"

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
      {pricing.map((item)=>(
        <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem]  lg:w-auto even:py-14  odd:py-8">
            <h4 className="h4 mb-4">{item.title}</h4>
            <p>{item.description}</p>

            <div>
             
                {item.price && (
                    <>
                    <div>$</div>
                    <div>{item.price}</div>
                    </>
                )}

                <Button className="w-full mb-6"   href={item.price ? "/pricing":"/mailTo:contact@brainwave.pro"}>
                    {item.price ? 'Get Started' : 'Contact Us'}
                </Button>

                <ul>
                    {item.features.map((feature,index)=>(
                        <li key={index}>
                            <img src={check} width={24} height={24} alt="check" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
               
            </div>
        </div>
      ))}
    </div>
  )
}

export default PricingList
