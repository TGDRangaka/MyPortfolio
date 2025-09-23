
export default function HeroImage() {
    return (
        <>
            <div className="relative">
                <img 
                    src="/home.png" 
                    alt="Dilshan Rangaka - Full Stack Developer and Software Engineer portrait" 
                    className='w-72 h-fit relative sm:w-80 lg:w-80 2xl:w-120 z-30' 
                    loading="eager"
                    width="320"
                    height="400"
                    decoding="async"
                />
            </div>
        </>
    )
}
