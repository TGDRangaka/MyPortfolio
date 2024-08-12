
interface Props {
    text: string;
    title: string;
}

export default function Title({ text, title }: Props) {
    return (
        <div className='flex flex-col items-center justify-center mb-16'>
            <div className="mt-28">
                <h6 className="text-base font-semibold tex text-white">{text}</h6>
            <h1 className='font-semibold text-5xl'>
                {title}
                <div className='flex gap-3 w-full mt-1'>
                    <hr className='flex-grow border-2 rounded-sm' />
                    <hr className='w-3 border-2 rounded-sm' />
                </div>
            </h1>
            </div>
            
        </div>
    )
}
