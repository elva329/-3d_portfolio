
import { aiApplications } from "../constants"

function AIApplication() {
  return (
    <>  <h2 className='text-white font-bold text-[32px] mt-10'>AI Application</h2>
    <div className='mt-10 flex flex-wrap gap-7'>
      {aiApplications.map(aiApplication => {
        return <div className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full" key={aiApplication.id}>
                  <video controls preload="metadata">
                    <source src={aiApplication.source_code_link} type="video/mp4"/>
                  </video>
                  <div className='mt-5'>
            <h3 className='text-white font-bold text-[20px]'>{aiApplication.name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{aiApplication.description}</p>
            </div>
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
      })}
    </div></>
  )
}

export default AIApplication