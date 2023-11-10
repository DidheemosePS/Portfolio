import LineComponent from "@/components/spare/lineComponent";

const experienceData = [
  {
    jobTitle: "Aspiring Opportunity Explorer",
    companyName: "Heaven",
    fromTo: "March 2023 - Present",
    description:
      "Aspiring professional ready to embark on a journey of meaningful experiences. While my formal resume may be a blank canvas, my enthusiasm, adaptability, and eagerness to learn make me a valuable asset. I approach each opportunity with a fresh perspective, ready to contribute and grow. Let's create a story of success together!",
  },
];

const educationData = [
  {
    qualification: "Batchelor of computer applications",
    collegeName: "Naipunnya Institute",
    fromTo: "June 2020 - March 2023",
    description:
      "As a recent BCA graduate and aspiring web developer with a focus on React JS, I offer advanced problem-solving, efficient time management, and a passion for continual learning. Actively seeking entry-level opportunities in web development, I bring a blend of technical prowess and creative ingenuity. Eager to contribute and make a discernible impact in the dynamic realm of web development.",
  },
];

export default function Resume() {
  return (
    <div id="resume" className="m-auto min-h-full px-8 py-12">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-2xl font-black text-gray-400">Resume</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <p data-aos="fade-up" className="text-[1rem] font-medium text-gray-600">
        Here are my experiences and qualifications.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 px-2 py-5 sm:px-4 md:px-8 lg:gap-14 xl:gap-16 xl:px-16 2xl:gap-20">
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="border-2 border-gray-300 rounded-full text-yellow-500 px-7 py-1 justify-self-center text-xl font-medium">
            Experience
          </div>
          {experienceData?.map((value, index) => {
            return (
              <div key={index} className="relative">
                <LineComponent />
                <div className="border-2 border-yellow-400 rounded-lg p-3 shadow-md lg:w-[25rem] lg:h-[17.5rem]">
                  <p className="text-xl font-medium">{value?.jobTitle}</p>
                  <p className="font-semibold text-gray-500 leading-loose">
                    {value?.companyName}
                  </p>
                  <p className="font-semibold text-yellow-500 leading-loose">
                    {value?.fromTo}
                  </p>
                  <p className="text-sm text-justify text-gray-500 leading-normal">
                    {value?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="border-2 border-gray-300 rounded-full text-yellow-500 px-7 py-1 justify-self-center text-xl font-medium">
            Education
          </div>
          {educationData?.map((value, index) => {
            return (
              <div key={index} className="relative">
                <LineComponent />
                <div className="border-2 border-yellow-400 rounded-lg p-3 shadow-md lg:w-[25rem] lg:h-[17.5rem]">
                  <p className="text-xl font-medium">{value?.qualification}</p>
                  <p className="font-semibold text-gray-500">
                    {value?.collegeName}
                  </p>
                  <p className="font-semibold text-yellow-500 leading-loose">
                    {value?.fromTo}
                  </p>
                  <p className="text-sm text-justify text-gray-500 leading-normal">
                    {value?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
