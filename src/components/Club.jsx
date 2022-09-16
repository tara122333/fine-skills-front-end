import React from 'react'
// import {BsCameraReels} from 'react-icons/bs'
import {MdOutlineAttachMoney} from 'react-icons/md'
import {SiStartrek} from 'react-icons/si'
import {BiBrain } from 'react-icons/bi'
import {GiSandsOfTime} from 'react-icons/gi'
import {AiFillSchedule} from 'react-icons/ai'

import Categores from './Categores'
const Club = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-6 items-center justify-center' >
        <Categores head="Quiz" title="Quiz" link="https://t.me/finequizz" icon={<BiBrain />}/>
        <Categores head="Startup" title="Startup" link="https://t.me/Finestartup" icon={<SiStartrek />}/>
        <Categores head="Finance" title="Finance" link="https://t.me/Finefintech" icon={<MdOutlineAttachMoney />}/>
        <Categores head="Hustle" title="Hustle" link="https://t.me/finehustel" icon={<GiSandsOfTime />}/>
        <Categores head="W3" title="W3" link="https://t.me/fineW3" icon={<AiFillSchedule />}/>
        <Categores head="Quiz" title="Quiz" link="https://t.me/finequizz" icon={<BiBrain />}/>
        <Categores head="Startup" title="Startup" link="https://t.me/Finestartup" icon={<SiStartrek />}/>
        <Categores head="Finance" title="Finance" link="https://t.me/Finefintech" icon={<MdOutlineAttachMoney />}/>
    </div>
    </div>
  )
}

export default Club