import { AutoFocus } from '@/components/demo/useRef/AutoFocus.jsx'
import { WidthMeasure } from '@/components/demo/useRef/WidthMeasure.jsx'
import { Timer } from '@/components/demo/useRef/Timer.jsx'

export function Demo() {
  return (
    <div>
      <h1>Demo Page</h1>
      <h2>useRef</h2>
      <AutoFocus />
      <WidthMeasure />
      <Timer />
    </div>
  )
}
