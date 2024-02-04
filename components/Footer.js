import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

const Footer=({scrollToDiv})=>{
    return (
      <footer className="bg-[#285430]">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 ">
        <div className="text-center">
       
    
          <p className="mx-auto text-xl font-bold mt-4 max-w-xl text-[#A4BE7B] opacity-90">
          Ready to inspire and empower your students with my skills. Let's connect and discuss how I can contribute to creating an engaging and impactful learning experience. </p>
    <div className=" mt-4 flex gap-3 justify-center">
    <a className="text-gray-400 transition hover:opacity-75" href="mailto:7365rakhi@gmail.com">7365rakhi@gmail.com </a>
    <div className="text-gray-400">|</div>
    <a className="text-gray-400 transition hover:opacity-75" href="tel:8318297365">+91 8318297365</a>
    </div>
    <a
    download={true}
      href="/rakhi-resume.pdf"
      className="mt-8 inline-block rounded-full border border-[#A4BE7B] 
      px-12 py-3 text-sm font-medium text-[#A4BE7B] hover:opacity-80 opacity-70  focus:outline-none focus:ring active:bg-indigo-500"
    >
      Download Resume
    </a>
        </div>
    
        <div
          className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
        >
      <div className="text-[#A4BE7B] opacity-90 transition hover:opacity-75 hidden md:flex gap-2 cursor-pointer" title="Back to Top" onClick={()=>{scrollToDiv("banner")}}>
      <ChevronDoubleUpIcon className="h-6 animate-bounce" />
    </div>
          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end"> 
         
         
    
           
            <li>
            <a
              href="https://www.linkedin.com/in/rakhi-kumari-307918247/"
              rel="noreferrer"
              target="_blank"
              className="text-[#A4BE7B] opacity-90 transition hover:opacity-75"
            >
              <span className="sr-only">LinkedIn</span>
  
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            </a>
          </li>
            <li>
              <a
                href="https://www.youtube.com/@rakhisingh3152"
                rel="noreferrer"
                target="_blank"
                className="text-[#A4BE7B] opacity-90 transition hover:opacity-75"
              >
                <span className="sr-only">Youtube</span>
    
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              </a>
            </li>
            <li>
            <a
              href="https://www.instagram.com/rakhi_singh_257?igsh=MWYxNHg2cWRmOGth"
              rel="noreferrer"
              target="_blank"
              className="text-[#A4BE7B] opacity-90 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>
  
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
          <a
            href="https://www.facebook.com/people/Rakhi-Singh/100091881812570/?mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
            className="text-[#A4BE7B] opacity-90 transition hover:opacity-75"
          >
            <span className="sr-only">Facebook</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

           
          </ul>
        </div>
      </div>
    </footer>
    )
}
export default Footer;