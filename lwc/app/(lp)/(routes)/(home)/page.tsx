import Image from 'next/image';
import home_image_1 from "../../../../public/assets/home_image_1.jpg";
import home_image_2 from "../../../../public/assets/home_image_2.jpg";
import home_image_3 from "../../../../public/assets/home_image_3.jpg";

const Home = () => {
  return (
    <div className="md:px-10 transition ease-in duration-1000 delay-800">
      <div className="w-full flex flex-col md:flex-row md:h-96 ">
        <div className="text-4xl md:text-5xl flex  flex-col justify-center gap-y-2 items-center md:w-1/2 py-10 md:py-0">
          NEXEO FOR<br />
          <div className='bg-slate-900 text-amber-400 p-2 rounded-md'>SECURITY</div>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <div className='xl:w-4/6 lg:w-4/5  h-full'>
            <Image src={home_image_1} alt='img1' className=' md:p-4 h-full w-full' />
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row md:h-[400px] my-10 md:my-2 gap-y-20 md:gap-y-0 ">
        <div className='xl:w-3/5 lg:w-7/12 flex md:w-1/2 xl:ps-44 lg:ps-20 h-full order-2 md:order-1 ps-4 md:ps-0'>
          <div className='xl:w-7/12 lg:w-11/12 h-full '>
            <Image src={home_image_2} quality={100} alt='img2' className='h-full w-full scale-x-100 md:scale-x-100 scale-y-125 md:scale-y-100' />
          </div>
        </div>
        <div className="flex flex-col gap-y-6 md:gap-y-14 justify-center  xl:w-2/5 lg:w-5/12 md:w-1/2 order-1 md:order-2 px-5 md:px-0">
          <div className='w-full '>
            <p className='text-center text-2xl md:text-3xl'>
              WHY TO CHOOSE US FOR YOUR CYBERSECURITY NEEDS?
            </p>
          </div>
          <div className='w-full '>
            <p className='text-center text-xl md:text-2xl'>
              Choose us to gain a holistic understanding of your cybersecurity posture and fortify your defences with a trusted partner.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row xl:h-[420px] lg-[540px] mb-8 gap-y-4'>
        <div className='flex flex-col justify-center items-center gap-y-6 xl:px-10 pt-5 lg:w-1/2 md:w-7/12 px-8 md:px-0'>
          <div>
            <p className='text-2xl md:text-3xl '>NEXEO secures your business</p>
          </div>
          <div className='xl:w-3/5 lg:w-11/12'>
            <p className='text-xl md:text-2xl text-center'>
              We specialize in VAPT (Vulnerability Assessment and Penetration Testing) reports, helping businesses identify and address security weaknesses before they can be exploited. Our cost-effective solutions empower you to proactively safeguard your data and systems.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center lg:w-1/2 md:w-5/12 h-full  lg:pt-0 md:pt-10'>
          <Image src={home_image_3} alt='img2' className='lg:h-96 md:h-80 w-[420px]' />
        </div>
      </div>
    </div>
  )
}

export default Home;