import React from 'react';

const SkillComponent = () => {
  return (
    <div className="container grid md:grid-cols-2 gap-6 mx-auto mb-10 mt-4 p-6 bg-white rounded-lg shadow-md">

    <div className="grid sm:grid-cols-3 gap-4">
                 
    <div className="border p-4 rounded-xl">
      {" "}
      <img src='/rakhi/img-55.jpeg' className='h-64 w-full rounded-xl object-cover object-top' />
    </div>
    <div className="border p-4 rounded-xl">
      {" "}
      <img src='/rakhi/img-3.jpeg' className='h-64 w-full rounded-xl object-cover ' />
    </div>
 
    <div className="border p-4 rounded-xl">
      {" "}
      <img src='/rakhi/img-1.jpeg' className='h-64 w-full rounded-xl object-cover object-top ' />
    </div>


  
  </div>
      <div className="space-y-3">
        {/* Frontend Development */}
        <div className="space-y-1">
          <h3 className="text-base font-bold text-[#5F8D4E]">Soft Skills</h3>
          
          <ul className="text-gray-700 flex gap-2 flex-wrap text-sm">
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Teaching</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Pre school teaching
          </li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Communication
          </li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Teaching With Using TLM</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Art& craft activity, creativity</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Sports activities</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Supirior conversation</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Computer science</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Dance /Drama</li>
          <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Cultural Activities</li>
          </ul>
        </div>
        <div className="space-y-1">
        <h3 className="text-base font-bold text-[#5F8D4E]">Tech Skills</h3>
   
        <ul className="text-gray-700 flex gap-2 flex-wrap text-sm">
       <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Operating System</li> 
        <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>MS Word</li>
       <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'> MS Excel</li>
        <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>MS PowerPoint</li>
        <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Notepad,</li> <li className='border border-1 py-1 px-2 text-sm rounded-md text-[#5F8D4E]'>Notepad++</li>
        </ul>
      </div>


      </div>


    </div>
  );
};

export default SkillComponent;
