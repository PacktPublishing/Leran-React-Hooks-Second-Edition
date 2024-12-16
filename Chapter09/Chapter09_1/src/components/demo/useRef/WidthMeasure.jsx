import { useState } from 'react'

export function WidthMeasure() {
  const [width, setWidth] = useState(0)
  function measureRef(node) {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width)
    }
  }
  return (
    <div>
      <h3>WidthMeasure</h3>
      <div ref={measureRef}>I am {Math.round(width)}px wide</div>
    </div>
  )
}
