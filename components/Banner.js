import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Header from "./Header";

export default function Banner() {
var arr=[ 7,1,2,3,4,5,"React","Javascript","NextJs","React Native","Python","Html","Html5","Css","Css3","Talwind Css","Git",5,5,5,6,7,7,1,2,3,4,5,6,7,8,2,3,4,5,5,5,6,7,7]
  return (
    
    <div className="bg-cover bg-center " >
    <div class="area">
    <ul class="circles">
    {arr.map((item)=>{
      return (<li></li>)
    })}
    </ul>
  </div>
    <div className="mx-auto">
      <div className="relative isolate overflow-hidden px-6 sm:px-0  lg:pt-0">
        <div className="mt-36 mx-auto max-w-screen-xl px-4 lg:py-8 sm:px-6  lg:px-8  ">
          <div className=" ">
            <h2 className="text-3xl font-bold tracking-tight text-[#A4BE7B] opacity-90 sm:text-4xl">
              Rakhi kumari
           
            </h2>
            <div className="mt-2 text-lg mb-24 text-[#A4BE7B] opacity-90  md:mb-0 leading-8  text-[#93B1A6]">
            Hello, I am Rakhi, a dedicated and experienced primary school teacher with a passion for fostering a love of learning in young minds. <span className="hidden md:block">
            With four years of enriching experience in the education sector, I am committed to providing a supportive and engaging environment for my students.</span>
            </div>

          </div>
      
        </div>
      </div>
    </div>
  </div>
  );
}
