
const Input = ({ register, name, placeholder, type, ...rest }) => {
  return <input
    {...register(name)} {...rest}
    placeholder={placeholder}
    type={type}
    className="mb-4 p-2 bg-gray-200 rounded w-full"
  />
}

export default Input
