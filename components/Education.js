import EducationCard  from "./EducationCard";

const Education = () => {
  const educationData= [
{
  "level": "Master's",
  "university": "Dr. Ram Manohar Lohia Avadh University",
  "institution": "Narsingh Narayan Hari Prasad Mahavidyalaya, Meenapur, Ayodhya",
  "duration": "2023 - 2025",
  "degree": "Master of Arts (Geography)",
  "description": "Successfully completed Master of Arts in Geography from Narsingh Narayan Hari Prasad Mahavidyalaya, Meenapur, Ayodhya, affiliated with Dr. Ram Manohar Lohia Avadh University, during the academic session 2023 to 2025."
},
      {
        "level": "Bachelor",
        "university": "Bundelkhand University Jhansi",
        "institution": "Dayanand Vedic College Orai Jalaun",
        "duration": "2020 - 2023",
        "degree": "Bachelor of Arts",
        "description": "Successfully completed a Bachelor of Arts degree at Dayanand Vedic College Orai Jalaun, affiliated with Bundelkhand University Jhansi, from 2020 to 2023."
      },
      {
        "level": "10+2",
        "board": "Board of High School and Intermediate Education Uttar Pradesh",
        "institution": "Bal Bharti Inter College Orai Jalaun",
        "duration": "2017 - 2019",
        "degree": "10+2",
        "description": "Completed 10+2 education at Bal Bharti Inter College Orai Jalaun under the Board of High School and Intermediate Education Uttar Pradesh from 2017 to 2019."
      },
      {
        "level": "Diploma",
        "institution": "National Institute of Electronics and Information Technology (NIELIT)",
        "degree": "Course on Computer Concept (CCC)",
        "description": "Acquired fundamental computer skills by completing the Course on Computer Concept (CCC) at the National Institute of Electronics and Information Technology (NIELIT) in 2018."
      },
      {
        "level": "10",
        "board": "Board of High School and Intermediate Education Uttar Pradesh",
        "institution": "Bal Bharti Inter College Orai Jalaun",
        "duration": "2017",
        "degree": "10",
        "description": "Successfully completed 10th grade at Bal Bharti Inter College Orai Jalaun in the year 2017 under the Board of High School and Intermediate Education Uttar Pradesh."
      }
    ]
  
  
      
    return (<section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-10  sm:px-6 lg:px-8">
        <div className="relative mx-auto  sm:text-center">
        <div className=""></div>
        <div className="relative z-10 pt-4 pb-2">
          <h2 className="text-3xl text-black font-bold sm:text-2xl">Education</h2>
          <p className="  text-sm font-semibold text-gray-600">
          A journey through my educational background and milestones. My educational journey has been <br/>marked by a passion for exploration and a commitment to academic excellence
          </p>
        </div>
        </div>
            <div>
            <EducationCard data={educationData} />

                </div>
            </div>
      
    </section>
    )
}
export default Education
