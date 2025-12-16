import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full border-t-[1px] border-[#a1b562] mt-20 flex text-xl p-10'>
        <div className='basis-1/2 '>
          <p>What you can expect:</p>
        </div>
        <div className='basis-1/2 flex gap-30'>
          <div className='basis-1/2'>
             <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
            <p className='mt-10'>We believe the mix of strategy and design with a bit of coffie is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className='basis-1/2 flex-end'>
            <p>S:</p>
            <p className='border-black border-b-2 inline-block'>Instagram</p>
            <br />
            <p className='border-black border-b-2 inline-block'>Behance</p>
            <br />
            <p className='border-black border-b-2 inline-block'> Facebook </p>
            <br />
            <p className='border-black border-b-2 inline-block'>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
