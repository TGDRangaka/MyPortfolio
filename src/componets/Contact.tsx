import Form from "./Form";
import Title from "./Title";

export default function Contact() {
    return (
        <div id="contactme" className="px-8 mb-16 relative flex flex-col justify-center items-center">
            <Title text="To" title="Contact" />

            <div className="flex flex-col sm:w-96  lg:w-120">
                <p className="text-sm text-center text-green  lg:text-base">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </p>

                <div className="gradient w-400 aspect-square absolute rounded-full right-1/3 xl:w-800"></div>
                <h3 className="mt-5 font-bold text-lg mb-2  lg:mt-14 lg:text-2xl">Write Me Something</h3>
                <Contacts icon='/phone.png' text='(+94)77 053 1993' />
                <Contacts icon='/email.png' text='dilshanrangaka@gmail.com' />

                <Form />
            </div>

        </div>
    )
}


const Contacts = (props: any) => {
    return (
        <div className="flex items-center gap-3 mb-2  lg:mb-4 lg:text-lg">
            <img className="h-6  lg:h-9" src={props.icon} alt={props.icon} />
            <p className="font-semibold">{props.text}</p>
        </div>
    )
}