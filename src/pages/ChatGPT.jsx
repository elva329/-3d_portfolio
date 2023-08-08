import { Suspense } from "react"
import close from '../assets/icon/close.png';

function ChatGPT() {
  return (
    <> 
     <Suspense fallback={<div>Loading...</div>}>
        <div className='w-[250px] h-[350px] bg-[#343541] fixed bottom-10 right-60 rounded-xl z-112 transition-[0.3s] duration-[ease-in-ou]'>
            <iframe src='https://open-ai-codex-lovat.vercel.app/' className="w-[250px] h-[350px] rounded-xl"></iframe>
        </div>
        <img src={close} width={32} height={32} className="absolute -left-1 -top-40"/>
     </Suspense>
     
    </>
  )
}

export default ChatGPT