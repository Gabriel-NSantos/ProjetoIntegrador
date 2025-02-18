import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[--cor-desktop] shandow-md">
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%] '>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
        AGENDE
        <span className='text-[--cor-logo]'>SAÚDE</span>
        </h1>

        <div className='nav-link'>Home</div>
        <div className='nav-link'>PLANOS</div>
        <div className='nav-link'>SOBRE</div>
        <div className='nav-link'>CONTATO</div>
      </div>
    </div>
  )
}

