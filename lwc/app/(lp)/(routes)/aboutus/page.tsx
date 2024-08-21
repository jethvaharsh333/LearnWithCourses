import murjani_harsh from "@/public/assets/murjani_harsh.jpg";
import jethva_harsh from "@/public/assets/myprofilepic.jpg";
import about_image_1 from "@/public/assets/about_image_1.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-14 mt-6 mb-12 md:my-14 transition ease-in duration-1000 delay-1000">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 transition ease-in duration-300 delay-300">
          <div>
            <p className="text-3xl">ABOUT NEXEO</p>
          </div>
          <div className="mt-7 text-xl md:text-2xl flex flex-col gap-y-3 px-2 md:px-6">
            <p>NEXEO Technology, a privately held company, is dedicated to empowering businesses and organization with comprehensive security solutions.</p>
            <p>We specialize in Vulnerability Assessment and Penetration Testing (VAPT) reports, offering a cost-effective approach to identify and address potential security vulnerabilities within your systems. By proactively mitigating these risks, NEXEO helps you safeguard your valuable data and build a more resilient security posture.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex  justify-center items-center ">
          <Image quality={100} src={about_image_1} className="h-2/5 lg:h-3/4 w-full xl:w-1/2" alt="Harsh"/>
        </div>
      </div>
      <div className="mt-12 w-full transition ease-in duration-900 delay-900">
        <div>
          <p className="text-3xl">OUR TEAM</p>
        </div>
        <div className="grid grid-cols-0 md:grid-cols-3 mt-7 gap-10 md:gap-20 px-2 md:px-6">
          <div className=" w-full h-full group flex justify-center">
            <div className="relative  overflow-hidden rounded-lg h-[250px] w-auto md:h-[160px] lg:h-[250px] xl:h-[380px]">
              <Image src={murjani_harsh} alt="Harsh_murjani" quality={100} className="rounded-lg h-full w-full group-hover:scale-105 transition ease-in delay-150 duration-400" />
              <div className="absolute w-full h-full  bg-gradient-to-b from-stone-400/5 from-70% to-stone-700/30 hover:opacity-20 rounded-lg flex items-end justify-end group-hover:bottom-0 group-hover:opacity-100">
                <div className="pe-4 pb-2 md:pb-4 text-white">
                  <div className="text-end text-base lg:text-2xl">Harsh Murjani</div>
                  <div className="text-white text-xs  lg:text-sm text-end">CEO and Founder</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group  flex justify-center">
            <div className="relative  overflow-hidden rounded-lg h-[260px] w-auto md:h-[160px] lg:h-[250px] xl:h-[380px]">
              <Image src={jethva_harsh} alt="Harsh_jethva" quality={100}  className="rounded-lg w-full h-full lg:h-auto group-hover:scale-105 transition ease-in delay-150 duration-400" />
              <div className=" absolute w-full h-full  bg-gradient-to-b  from-stone-400/5 from-70% to-stone-700/30 hover:opacity-20 rounded-lg flex items-end justify-end group-hover:bottom-0 group-hover:opacity-100 gropu-hover:-translate-y-1">
                <div className="pe-4 pb-2 md:pb-4 text-white ">
                  <div className="text-end text-base lg:text-2xl">Harsh Jethva</div>
                  <div className="text-white text-xs lg:text-sm text-end">CTO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;