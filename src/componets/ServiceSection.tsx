import Title from './Title'
import ServiceCard from './cards/ServiceCard'
import services from '../data/services'

export default function ServiceSection() {
    return (
        <div id='services' className='relative'>
            <Title text='Area of' title='Services' />

            <div className="gradient w-96 aspect-square absolute rounded-full top-28 right-1/3"></div>
            <div className="gradient w-400 aspect-square absolute rounded-full -bottom-20 left-1/3"></div>
            <div className='flex justify-center items-center'>
                <hr className='-z-10 border-green/20 w-line absolute -rotate-aboutme-line top-1/2' />
                <hr className='-z-10 border-green/20 w-line absolute rotate-12 bottom-20' />
            </div>

            <div className='flex flex-col gap-8 items-center  lg:flex-row lg:justify-center lg:gap-12  xl:gap-32'>
                {
                    services.map(service => <ServiceCard icon={service.icon} title={service.title} description={service.description} />)
                }
            </div>

        </div>
    )
}
