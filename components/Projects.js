const Projects = () => {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-10  sm:px-6 lg:px-8">
        <div className="relative mx-auto  sm:text-center">
          <div className=""></div>
          <div className="relative z-10 pt-4 pb-2">
            <h2 className="text-3xl text-black font-bold sm:text-2xl">
              Work Samples
            </h2>
            <p className="  text-sm max-w-xl mx-auto font-semibold text-gray-600">
              Explore a curated selection of my work that showcases my expertise
              and proficiency in various domains. Each sample reflects my
              commitment to quality, innovation, and effective solutions.{" "}
            </p>
          </div>
        </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
  {[
    "IMG_20240905_113550241_HDR.jpg",
    "IMG_20240905_123944464_HDR.jpg",
    "IMG_20241111_131310021_HDR.jpg",
    "IMG_20250102_115310565_HDR.jpg",
    "IMG_20250202_124909083_HDR.jpg",
    "IMG-20241015-WA0030.jpg",
    "IMG-20250204-WA0097.jpg",
    "IMG-20250204-WA0103(1).jpg",
    "IMG-20250625-WA0024.jpg",
    "IMG-20250625-WA0035.jpg",
    "IMG-20250625-WA0036.jpg",
    "img1.jpg",
  ].map((filename) => (
    <div key={filename} className="relative overflow-hidden rounded-lg h-64">
      <img
        className="w-full h-full hover:object-contain object-cover"
        src={`/${filename}`}
        alt={filename}
      />
    </div>
  ))}

  {/* Existing media (video + rakhi images) */}
  <div className="relative overflow-hidden rounded-lg h-64">
    <img
      className="w-full h-full hover:object-contain object-cover"
      src="/rakhi/img-77.jpeg"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg h-64">
    <img
      className="w-full h-full hover:object-contain object-cover"
      src="/rakhi/img-7.jpeg"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg h-64">
    <img
      className="w-full h-full hover:object-contain object-cover"
      src="/rakhi/img-8.jpeg"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg h-64">
    <img
      className="w-full h-full hover:object-contain object-cover object-top"
      src="/rakhi/img-5.jpeg"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg h-64">
    <video
      className="w-full h-full hover:object-contain object-cover"
      controls
      autoPlay
    >
      <source src="/rakhi/vid-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="relative overflow-hidden rounded-lg h-64">
    <img
      className="w-full h-full hover:object-contain object-cover object-top"
      src="/rakhi/img-6.jpeg"
    />
  </div>
</div>

      </div>
    </section>
  );
};
export default Projects;
