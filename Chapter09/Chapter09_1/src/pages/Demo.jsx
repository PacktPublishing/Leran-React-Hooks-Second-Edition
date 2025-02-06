import { AutoFocus } from '@/components/demo/useRef/AutoFocus.jsx'
import { InitialWidthMeasure } from '@/components/demo/useRef/InitialWidthMeasure.jsx'
import { Timer } from '@/components/demo/useRef/Timer.jsx'
import { HighlightFocus } from '@/components/demo/useImperativeHandle/HighlightFocus.jsx'

export function Demo() {
  return (
    <div>
      <h1>Demo Page</h1>
      <h2>useRef</h2>
      <AutoFocus />
      <InitialWidthMeasure />
      <Timer />
      <HighlightFocus />
    </div>
  )
}
