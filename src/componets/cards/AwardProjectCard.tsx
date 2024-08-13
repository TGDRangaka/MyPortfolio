interface Project {
    id: number,
    title: string,
    name: string,
    year: string | number,
    platform: string,
    description: string,
    github: string,
    languages: string[],
    image: string | null,
    imageView: string,
    livelink: string | null,
    other: string | null,
    type: string[],
    awardImages: string[],
    linkedin: string,
}

interface Props {
    project: Project;
}


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function AwardProjectCard({ project }: Props) {
    const { name, year, description, github, languages, image, livelink, awardImages, title, linkedin } = project;

    return (
        <div className={`border border-green/10 w-72 bg-black p-2 pl-3 relative  md:w-120 lg:w-800  2xl:w-1000`} 
        data-aos="fade-down"> 
            <h1 className='my-2 text-xl font-bold underline text-center lg:text-2xl 2xl:text-3xl'>{title}</h1>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="lg:hidden h-44 md:h-60"
            >
                {
                    awardImages.map((image) => (
                        <SwiperSlide>
                            <div className='h-full flex justify-center items-center'>
                                <img className="" src={image} alt={image} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex flex-col gap-3  lg:flex-row lg:items-center ">
                <span className="absolute gradient-line w-1 h-full top-0 left-0"></span>
                <span className="absolute gradient-line-h h-1 w-full top-0 left-0"></span>
                <div className="flex flex-col lg:w-11/12  2xl:w-11/12">
                    <h3 className="text-base text-green font-semibold  lg:text-lg">{year}</h3>
                    <h1 className="text-xl font-bold  lg:text-2xl">{name}</h1>
                    <p className="text-sm font-thin mt-2  lg:text-base">{description}</p>
                    <div className="flex gap-2 mt-2 flex-wrap lg:mt-4">
                        {
                            languages.map((lang, index) => (
                                <span className="bg-green text-black px-2 text-xs font-bold rounded pb-1  lg:text-sm lg:pb-0 lg:font-semibold" key={index}>{lang}</span>
                            ))
                        }
                    </div>
                    <div className="flex text-sm underline text-green mt-2 gap-5 lg:text-base">
                        {github && <a href={github} target="_blank">Github</a>}
                        {livelink && <a href={livelink} target="_blank">View</a>}
                        {linkedin && <a href={linkedin} target="_blank" className='flex items-center'><img className='w-5 h-5' src="/prj-linkedin.png" alt="" />Linkedin</a>}
                    </div>
                </div>

                {
                    image && <div className="relative w-full aspect-project-img  lg:h-40 lg:flex lg:items-center  2xl:h-52  lg:w-7/12">
                        <img className="prj-img-3d hover:transform-none duration-300  " src={image} alt={image} />
                    </div>
                }
            </div>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mt-10 hidden lg:flex h-60"
            >
            {
                awardImages.map((image) => (
                    <SwiperSlide className='h-full w-auto'>
                            <img className="h-full hover:brightness-110 duration-100" src={image} alt={image} />
                    </SwiperSlide>
                ))
            }
            </Swiper>


        </div>
    )
}
