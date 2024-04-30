import Link from 'next/link';
import Image from 'next/image';
import MenuItem from "@/app/components/menu/MenuItem";
import SectionHeaders from '@/app/components/layout/SectionHeaders';


export default function HomeMenu(){
return (
<>

<section className="">


<br/><br/><br/>
<div className="text-center mb-4">
  <SectionHeaders   subHeader={'Check out our'}
  mainHeader={'Menu'}/> 

      
</div>
<div className='grid-grid-cols-3 gap-4'>
<MenuItem/>

</div>
</section>




</>





);




}