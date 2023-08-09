import { Suspense } from "react"
import close from '../assets/icon/close.png';

function ChatGPT() {
  return (
    <> 
     <Suspense fallback={<div>Loading...</div>}>
      <div className='w-[275px] h-[380px] bg-[#343541] fixed bottom-10 right-60 rounded-xl z-112 transition-[0.3s] duration-[ease-in-out]'>
        <div className="relative h-[380px]">
              <iframe src='https://fcc-chatbot-example-lwer.vercel.app/' className="w-[275px] h-[380px] rounded-xl"></iframe>
          </div>
          <img src={close} width={28} height={28} className="absolute -top-4 -right-8"/>
      </div>
     </Suspense>
     
    </>
  )
}

export default ChatGPT