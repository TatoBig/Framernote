import React from 'react'

const Input = (props) => {
  const {
    register,
    name,
    placeholder,
    type,
    error,
    customError = '',
    removeMargin = false
  } = props
  return (
    <div>
      <input
        className="p-2 bg-gray-200 rounded w-full"
        placeholder={placeholder}
        type={type} {...register(name)}
      />
      <h6 className={`text-xs h-2 ${removeMargin ? '' : 'mb-4'} ml-1 font-semibold`}>
        {error?.message} {customError}
      </h6>
    </div>
  )
}

export default Input
