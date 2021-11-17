import React from 'react'

const Checkbox = (props) => {
  const {
    register,
    name,
    error,
    customError = '',
    removeMargin = false,
    label = '',
    defaultChecked = false
  } = props
  return (
    <div>
      <div className="flex justify-around items-center px-2">
        {label !== '' &&
          <h5 className="font-semibold text-gray-700">
            {label}
          </h5>}
        <input
          className="p-2 bg-gray-200 rounded-xl w-full h-5"
          type="checkbox" {...register(name)}
          defaultChecked={defaultChecked}
        />
      </div>
      <h6 className={`text-xs h-2 ${removeMargin ? '' : 'mb-2'} ml-1 font-semibold`}>
        {error?.message} {customError}
      </h6>
    </div>
  )
}

export default Checkbox
