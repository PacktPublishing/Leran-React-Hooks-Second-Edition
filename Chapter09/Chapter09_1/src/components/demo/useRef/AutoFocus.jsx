import { useRef, useEffect } from 'react'

export function AutoFocus() {
  const inputRef = useRef(null)
  useEffect(() => inputRef.current.focus(), [])
  return (
    <div>
      <h3>AutoFocus</h3>
      <input ref={inputRef} type='text' />
    </div>
  )
}
