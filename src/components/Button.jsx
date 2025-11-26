const Button = ({ text, icon }) => {
  return (
    <button className="bg-[#7190F0] flex items-center gap-x-2 rounded-full px-6 py-3 text-white uppercase">
      <p>{text}</p>
      <img src={icon} className="h-7 w-7" alt="arrow" />
    </button>
  )
}

export default Button
