import { ChatMessageInput } from "./ChatMessageInput"

type Props = {
  disabled: boolean
  onSendMessage: (message: string) => void
}

export const Footer = ({ disabled, onSendMessage } : Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput
          disabled={disabled}
          onSend={onSendMessage}
        />
        <div className="pt-3 text-center text-xs text-gray-300">
          Feito por Nathan Florencio. Permitida a cópia e uso para qualquer fim.<br/>
          <a href="http://nateflorencio.vercel.app" target="_blank" className="underline">
            Visite meu site, clicando aqui.
          </a>
        </div>
      </div>
    </footer>
  )
}