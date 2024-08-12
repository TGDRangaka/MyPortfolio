
interface Props {
    text: string;
    title: string;
}

export default function Title({ text, title }: Props) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="mt-28 mb-16  sm:mt-36 sm:mb-24  xl:mt-60 xl:mb-32">
                <h6 className="text-base font-semibold tex text-white  sm:text-lg  lg:text-xl">{text}</h6>
                <h1 className='font-bold text-5xl  sm:text-6xl  lg:text-7xl  2xl:text-9xl'>
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
