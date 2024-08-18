
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import AwardProjectCard from './cards/AwardProjectCard';
import awardProjects from '../data/awardProjects';
import Title from './Title';

export default function AwardedProjects() {
  return (
    <div id='achivements' className="w-screen">

        <Title text="My" title="Achivements" />

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          // loop={true}
          className="w-72 md:w-120 lg:w-800 2xl:w-1000 pb-10 overflow-visible"
        >
            {
                awardProjects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <AwardProjectCard project={project} />
                  </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
  )
}
