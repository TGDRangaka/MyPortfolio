import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
  const inputStyle = 'w-full rounded px-3 py-2 text-sm bg-grey  lg:text-base'
  const form = useRef<HTMLFormElement>(null);
  
  const [isSubmit, setSubmit] = useState(false);
  const [isSubmiting, setSubmiting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmiting(true);

    emailjs
      .sendForm(
        process.env.VITE_VERCEL_SERVICE_ID as string,
        process.env.VITE_VERCEL_TEMPLATE_ID as string,
        form.current as string | HTMLFormElement,
        {
          publicKey: process.env.VITE_VERCEL_PUBLIC_KEY as string,
        })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmit(true);
          setSubmiting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmiting(false);
          setSubmit(false);
          alert('Failed to send email. Please try again.');
        },
      );
  };

  return (
    <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
      <input className={`${inputStyle} `} type="text" name="name" placeholder="Name" id="" />
      <input className={`${inputStyle} `} type="email" name="email" placeholder="Email" id="" />
      <input className={`${inputStyle} `} type="text" name="subject" placeholder="Subject" id="" />
      <textarea className={`${inputStyle} h-20`} name="message" placeholder="Message" id=""></textarea>
      <button className=" py-2 text-black font-bold text-lg rounded-sm bg-green lg:text-2xl hover:scale-110 duration-150" type="submit">
        {
          isSubmiting ? <span className='animate-pulse text-black'>Submitting...</span>: isSubmit? 'Submitted!' : 'Submit'
        }
      </button>
    </form>
  )
}
