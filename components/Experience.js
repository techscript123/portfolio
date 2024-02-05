const Experience = () => {
  const data = [
    {
      title: "Seth Anandram Jaipuria, Barabanki (March 2023 - Present)",
      position: "Primary Teacher (PRT) - Computer, English | PPRT - All Subjects",
      description:
        "In my current role at Seth Anandram Jaipuria, Barabanki, I wear multiple hats as a Primary Teacher and a Pre-Primary Teacher (PPRT). As the Primary Teacher for Computer and English, I continue to uphold high academic standards, ensuring that students are well-prepared for the challenges of the digital age. Additionally, as a PPRT, I take on the responsibility of teaching all subjects, emphasizing a play-based and interactive curriculum to lay a strong foundation for future academic success.",
    },
    {
      title: "Mizpah Christian School, Orai Jalaun (April 2020 - March 2023)",
      position: "Primary Teacher (PRT) - Computer, English, and Maths",
      description:
        "During my tenure at Vinayak Academy, I had the privilege of contributing to the academic growth of primary school students. As a Primary Teacher specializing in Computer and English, I designed and delivered engaging lessons that aimed not only at building a strong foundation in these subjects but also at fostering a love for learning. I implemented innovative teaching methods to make the learning process enjoyable and effective.",
    },
    {
      title: "Vinayak Academy, Orai Jalaun (April 2019 - March 2020)",
      position: "Primary Teacher (PRT) - Computer, English",
      description:
        "During my tenure at Vinayak Academy, I had the privilege of contributing to the academic growth of primary school students. As a Primary Teacher specializing in Computer and English, I designed and delivered engaging lessons that aimed not only at building a strong foundation in these subjects but also at fostering a love for learning. I implemented innovative teaching methods to make the learning process enjoyable and effective.",
    },
  ];
  return (
    <section class=" md:pt-8 -mt-16 lg:mt-4 sm:-mt-10">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="shadow rounded-xl">
          <div class="lg:grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-white rounded-xl">
            <aside class="p-8  md:p-14">
              <h2 class="text-2xl mb-2 font-bold text-black tracking-tight  font-headline">
                Experience
              </h2>
              <div className="flex flex-col gap-4">
{data.map((item,index)=>{
  return(<div>
    <div className="flex flex-col ">
    <div className="text-gray-600 ">
      <span className="text-base font-bold text-[#5F8D4E] ">
       {item.title}
      </span>
    </div>
    <div className="text-gray-600 text-sm font-semibold">
      {" "}
{item.position}
    </div>
  </div>
  <div className="text-gray-800 text-sm prose-neutral list-disc mt-1">
{item.description}
  </div></div>)
})}</div>
            </aside>
            <aside class="relative opacity-100  hidden lg:block">
              <img class=" object-cover  w-full h-full  " src="/classmates-holding-folders.jpg" alt="" />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
