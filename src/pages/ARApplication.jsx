import { arApplications } from "../constants"

function ARApplication() {
  return (
    <>
     <h2 className='text-white font-bold text-[32px] mt-10'>AR Application</h2>
     <div className="mt-10 flex flex-wrap gap-7">
     {arApplications.map(aiApplication => {
      return  <div className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full mt-10" key={aiApplication.id}>
              {aiApplication.id === 1 ?  <video controls  preload="metadata" muted>
                    <source src={aiApplication.image} type="video/mp4" />
                </video> : <img src={aiApplication.image} alt="business-card"/>}
                  
                <div className='mt-5'>
                  <h3 className='text-white font-bold text-[20px]'>{aiApplication.name}</h3>
                  <p className='mt-2 text-secondary text-[14px]'>{aiApplication.description}</p>
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