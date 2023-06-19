import React from 'react'

const Stats = () => {
  return (
    <div className=''>
      <div className=" shadow">
  
  
  <div className="stat">
    {/* <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div> */}
    <div className="stat-title  text-white font-semibold">Weekly Views</div>
    <div className="stat-value text-white">2.6M</div>
    <div className="stat-desc  text-green-400 font-semibold">21% more than last month</div>
  </div>
  <div className="stat">
    {/* <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div> */}
    <div className="stat-title  text-white font-semibold">Daily Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc  text-green-400 font-semibold">21% more than last month</div>
  </div>
  
  
  
</div>
    </div>
  )
}

export default Stats