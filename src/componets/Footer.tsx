import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <footer className=" my-2">
            <hr className="border-green/20 mb-3" />
            <SocialIcons />
            <p className="text-sm text-center my-2  lg:text-base">© Copyright {new Date().getFullYear()}. Made by Dilshan Rangaka</p>
        </footer>
    )
}
