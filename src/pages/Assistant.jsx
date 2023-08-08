import "@lottiefiles/lottie-player";
import { useLayoutEffect, useState } from "react";
import ChatGPT from "./ChatGPT";

function Assistant() {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    setVisible(false)
  }, [])

  return (
    <>
      <div className="w-[250px] h-auto cursor-pointer fixed bottom-12 -right-5" onClick={() => setVisible(!visible)}>
      {visible &&  <ChatGPT/>} 
      <lottie-player src="https://lottie.host/217fccb1-ccb1-47cc-bc40-eda746a0b3be/GKYaH4u7eB.json" background="rgba(76, 175, 80, 0)" speed="1"  direction="1" mode="normal" loop autoplay></lottie-player>
    </div>

    </>
    
  )
}

export default Assistant