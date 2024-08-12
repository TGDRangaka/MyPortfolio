
export default function SocialIcons() {

    const styles = 'h-full hover:animate-spin duration-100';

    return (
        <div className="flex gap-3 justify-center h-8 lg:h-10  lg:gap-5">
            <a href="https://www.linkedin.com/in/dilshan-rangaka-854133227/" target="_blank"><img className={`${styles}`} src="/linkedin.png" alt="" /></a>
            <a href="https://github.com/TGDRangaka" target="_blank"><img className={`${styles}`} src="/github.png" alt="" /></a>
            <a href="https://www.instagram.com/dilshan_rangaka/" target="_blank"><img className={`${styles}`} src="/instagram.png" alt="" /></a>
            <a href="https://wa.me/0770531993"><img className={`${styles}`} src="/whatsapp.png" alt="" /></a>
        </div>
    )
}
