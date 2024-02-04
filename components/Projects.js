const Projects = () => {


  return (
    <section className="text-white">
    <div className="mx-auto max-w-screen-xl px-4 pb-10  sm:px-6 lg:px-8">
    <div className="relative mx-auto  sm:text-center">
    <div className=""></div>
    <div className="relative z-10 pt-4 pb-2">
      <h2 className="text-3xl text-black font-bold sm:text-2xl">Work Samples</h2>
      <p className="  text-sm max-w-xl mx-auto font-semibold text-gray-600">
      Explore a curated selection of my work that showcases my expertise and proficiency in 
      various domains. Each sample reflects my commitment to quality, innovation, and effective solutions. </p>
    </div>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        <div class="relative overflow-hidden rounded-lg h-64 ">
        <img class="w-full h-full hover:object-contain object-cover" src="/rakhi/img-77.jpeg" />
        
        </div> <div class="relative overflow-hidden rounded-lg h-64 ">
        <img class="w-full h-full hover:object-contain object-cover " src="/rakhi/img-7.jpeg" />
        
        </div> <div class="relative overflow-hidden rounded-lg h-64 ">
        <img class="w-full h-full hover:object-contain object-cover " src="/rakhi/img-8.jpeg" />
        
        </div>
      <div class="relative overflow-hidden rounded-lg h-64 ">
      <img class="w-full h-full hover:object-contain object-cover object-top" src="/rakhi/img-5.jpeg" />
      
    </div>
    <div class="relative overflow-hidden rounded-lg h-64 ">
    <video class="w-full h-full hover:object-contain object-cover" controls autoplay>
      <source src="/rakhi/vid-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="relative overflow-hidden rounded-lg h-64 ">
  <img class="w-full h-full hover:object-contain object-cover object-top" src="/rakhi/img-6.jpeg" />
  
</div> 
            </div>
        </div>
  
</section>
  );
};
export default Projects;
