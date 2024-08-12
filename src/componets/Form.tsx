
export default function Form() {

    const inputStyle = 'w-full rounded px-3 py-2 text-sm bg-grey  lg:text-base'

  return (
    <form className="flex flex-col gap-2">
        <input className={`${inputStyle} `} type="text" name="name" placeholder="Name" id="" />
        <input className={`${inputStyle} `} type="email" name="email" placeholder="Email" id="" />
        <input className={`${inputStyle} `} type="text" name="subject" placeholder="Subject" id="" />
        <textarea className={`${inputStyle} h-20`} name="message" placeholder="Message" id=""></textarea>
        <button className=" py-2 text-black font-bold text-lg rounded-sm bg-green lg:text-2xl hover:scale-110 duration-150" type="submit">SUBMIT</button>
    </form>
  )
}
