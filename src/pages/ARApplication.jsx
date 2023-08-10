import { arApplications } from "../constants"
import qrCode from '../assets/ar/qrcode.png';
import { eduPoster } from "../assets";

function ARApplication() {
  return (
    <>
     <h2 className='text-white font-bold text-[32px] mt-10 mb-10'>AR Application</h2>
     <div className="flex flex-wrap gap-7">
     {arApplications.map(aiApplication => {
      return  <div className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full" key={aiApplication.id}>
              {aiApplication.id === 2 ?  <video controls  preload="metadata" muted poster={eduPoster}>
                    <source src={aiApplication.image} type="video/mp4"/>
                  </video> : <img src={aiApplication.image} alt="business-card"/>}
                <div className='mt-5'>
                  <h3 className='text-white font-bold text-[20px]'>{aiApplication.name}</h3>
                  <p className='mt-2 text-secondary text-[14px]'>{aiApplication.description}</p>
                  {aiApplication.id === 1 &&  <div className='relative mt-5 mb-5 flex items-center'>
                    <img
                      src={qrCode}
                      alt='project_image'
                      className='relative w-[150px] h-[150px]'
                      loading="lazy"
                    />
                   <p className="text-secondary text-[14px] ml-5">Scan this QRcode using phone camera to experience</p>
                   </div>}
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {aiApplication.tags.map((tag) => (
                      <p
                        key={tag.id}
                        className={`text-[14px] ${tag.color}`}
                      >
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>
        </div>
     })}
     </div>
    </>
  )
}

export default ARApplication