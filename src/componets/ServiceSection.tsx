import Title from './Title'
import ServiceCard from './cards/ServiceCard'
import services from '../data/services'

export default function ServiceSection() {
    return (
        <div id='services' className=''>
            <Title text='Area of' title='Services' />

            <div className='flex flex-col gap-8 items-center'>
                {
                    services.map(service => <ServiceCard icon={service.icon} title={service.title} description={service.description} />)
                }
            </div>

        </div>
    )
}
