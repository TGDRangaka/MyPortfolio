
interface Props {
    title: string;
}

export default function Title({ title }: Props) {
    return (
        <div className='flex flex-col items-center justify-center mt-28 mb-16'>
            <h1 className='font-bold text-4xl'>
                {title}
                <div className='flex gap-3 w-full mt-1'>
                    <hr className='flex-grow border-2 rounded-sm' />
                    <hr className='w-3 border-2 rounded-sm' />
                </div>
            </h1>
        </div>
    )
}
