import { useState, useEffect, useRef } from 'react'

const LargeInput = (props) => {
  const {
    name,
    set,
    placeholder,
    type,
    error,
    customError = '',
    defaultText = '',
    removeMargin = false
  } = props

  const textAreaRef = useRef(null)
  const [text, setText] = useState(defaultText)
  const [textAreaHeight, setTextAreaHeight] = useState('auto')
  const [parentHeight, setParentHeight] = useState('auto')

  useEffect(() => {
    if (defaultText) {
      setText(defaultText)
      set(name, defaultText)
    }
  }, [defaultText])

  useEffect(() => {
    setParentHeight(`${textAreaRef.current.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
    if (set) {
      set(name, text)
    }
  }, [text])

  const onChangeHandler = (event) => {
    setTextAreaHeight('auto')
    setParentHeight(`${textAreaRef.current.scrollHeight}px`)
    setText(event.target.value)

    if (props.onChange) {
      props.onChange(event)
    }
  }

  return (
    <div>
      <div
        style={{
          minHeight: parentHeight
        }}
      >
        <textarea
          className="p-2 bg-gray-200 rounded w-full"
          placeholder={placeholder}
          type={type}
          {...props}
          ref={textAreaRef}
          rows={1}
          style={{
            height: textAreaHeight
          }}
          defaultValue={defaultText}
          onChange={onChangeHandler}
        />
      </div>
      <h6 className={`text-xs h-2 ${removeMargin ? '' : 'mb-4'} ml-1 font-semibold`}>
        {error?.message} {customError}
      </h6>
    </div>
  )
}

export default LargeInput
