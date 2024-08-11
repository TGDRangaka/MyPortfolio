interface Props {
    icon: string;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: Props) {
    return (
        <div className='w-48 h-64 bg-green/20 service-card flex justify-center items-center'>
            <div className='bg-black service-card-body relative p-3 flex flex-col gap-3'>
                <span className='gradient-line w-1 h-full absolute left-0 top-0'></span>

                <img src={icon} alt={title} className='w-8 object-cover' />
                <h3 className='font-semibold text-base'>{title}</h3>
                <p className='text-sm font-thin'>{description}</p>
            </div>
        </div>
    )
}
