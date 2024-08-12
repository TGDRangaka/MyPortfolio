
export default function Footer() {
    return (
        <footer className=" my-2">
            <hr className="border-green/20" />
            <div className="flex gap-3 justify-center mt-3">
                <a href=""><img className='h-8' src="/linkedin.png" alt="" /></a>
                <a href=""><img className='h-8' src="/github.png" alt="" /></a>
                <a href=""><img className='h-8' src="/instagram.png" alt="" /></a>
                <a href="https://wa.me/0770531993"><img className='h-8' src="/whatsapp.png" alt="" /></a>
            </div>
            <p className="text-sm text-center my-2">© Copyright 2024. Made by Dilshan Rangaka</p>
        </footer>
    )
}
