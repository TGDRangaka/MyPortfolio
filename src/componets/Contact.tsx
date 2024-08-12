import Form from "./Form";
import Title from "./Title";

export default function Contact() {
    return (
        <div id="contactme" className="px-8 mb-16 relative">
            <Title text="To" title="Contact" />

            <p className="text-sm text-center text-green">
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>

            <div className="gradient w-400 aspect-square absolute rounded-full right-1/3"></div>
            <h3 className="mt-5 font-bold text-lg mb-2">Write Me Something</h3>
            <Contacts icon='/phone.png' text='(+94)77 053 1993' />
            <Contacts icon='/email.png' text='tgdilshanrangaka2002@gmail.com' />

            <Form />
        </div>
    )
}


const Contacts = (props: any) => {
    return (
        <div className="flex items-center gap-3 mb-2">
            <img className="h-6" src={props.icon} alt={props.icon} />
            <p className="font-semibold">{props.text}</p>
        </div>
    )
}