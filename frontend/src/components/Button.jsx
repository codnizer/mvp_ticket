
const Button = ({label,iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red
    rounded-full text-white
    " >
       
       {label}
{iconUrl && <img src={iconUrl} 
alt="arrow right icon"
className="ml-2 rounded-full"
/>}
    </button>
  )
}

export default Button