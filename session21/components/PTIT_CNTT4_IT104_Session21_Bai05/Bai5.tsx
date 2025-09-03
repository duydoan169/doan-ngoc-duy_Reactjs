import React from 'react'

export default function Bai5() {
  return (
    <div className='bg-[#d9f4ff] w-[300px] h-[200px] p-[15px] rounded-[8px]'>
        <div className='bg-[#b7e8fd] text-[#3a7aa1] font-bold text-[18px] w-full h-full relative p-[15px]'>Relative parent
            <div className='bg-[#0ea5e9] text-white absolute bottom-0 left-0 w-[150px] h-[50px] rounded-[10px] text-center pt-[11px]'>Absolute child</div>
        </div>
        
    </div>
  )
}
