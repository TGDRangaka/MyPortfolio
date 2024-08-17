export default function PreLoader() {
    return (
        <div className="flex items-center justify-center min-h-screen fixed inset-0 z-50 animation gap-3">
           <div className='w-1/12 border-green aspect-square border md:border-4 rounded-full ani'></div>
           {/* <div className='w-8 h-20 bg-green rounded animate-pulse delay-100'></div>
           <div className='w-8 h-20 bg-green rounded animate-pulse delay-150'></div> */}
        </div>
    )
}
