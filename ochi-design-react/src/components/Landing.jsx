import React from 'react'

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
       <div className="textstructure mt-52 px-20">
        {
            ["We Create","Eye-Opening","Presentaions"].map((item,index)=>{
                return   <div className="masker">
                    <div className="w-fit flex items-end ">
                        {
                            index === 1 && (<div className="mr-5 w-[8vw] h-[5.7vw] rounded-md bg-red-500 relative -top-[1.2vw]"></div>)
                        }
                  <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-founders font-bold'>{item}</h1>
                  </div>
         </div>
            })
        }
      </div>
      <div className='border-t-[2px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"
        ].map((item,index)=>{
            return <p className="text-md tracking-tight leading-none">{item}</p>
        })}
        <div className="start flex items-center gap-5 uppercase">
            <div className='px-5 py-2 rounded-full border-[2px] border-zinc-500 font-light text-md'>start the project</div>
            <div className='w-10 h-10 rounded-full border-[2px] border-zinc-500 flex items-center justify-center'><i class="ri-arrow-right-up-long-line"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
