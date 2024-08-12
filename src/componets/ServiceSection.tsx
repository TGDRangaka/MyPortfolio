import Title from './Title'
import ServiceCard from './cards/ServiceCard'
import services from '../data/services'

export default function ServiceSection() {
    return (
        <div id='services' className='relative'>
            <Title text='Area of' title='Services' />

            <div className="gradient w-96 aspect-square absolute rounded-full top-28 right-1/3  md:w-120  lg:right-2/4  2xl:w-400 2xl:right-2/3"></div>
            <div className="gradient w-120 aspect-square absolute rounded-full -bottom-20 left-1/3 lg:left-1/2 lg:bottom-auto lg:top-2/3  2xl:w-400 2xl:left-2/3"></div>

            <div className='flex flex-col gap-8 items-center  lg:flex-row justify-center lg:gap-12  xl:gap-32'>
                <hr className='-z-10 border-green/20 w-line lg:w-xline absolute -rotate-service-line' />
                {
                    services.map(service => <ServiceCard icon={service.icon} title={service.title} description={service.description} />)
                }
            </div>

        </div>
    )
}
