import { useCopyToClipboard } from '@uidotdev/usehooks'

const CHECKMARK_EMOJI = <>&#9989;</>
const LINK_EMOJI = <>&#128279;</>

export function CopyLink({ url }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  return (
    <button onClick={() => copyToClipboard(url)}>
      {copiedText ? CHECKMARK_EMOJI : LINK_EMOJI}
    </button>
  )
}
