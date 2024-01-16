interface IData {
    title: string,
    video?: string,
    description: string,

}
const data: IData[] = [
    {

        title: "todo app",
        video:"/video1.mp4", 
        description: "I developed a to-do application that incorporates Next.js, TypeScript, and Tailwind CSS. The application includes functionalities such as adding tasks, deleting them, and marking tasks as completed.",
    
    },
    { 
        title: "Clone Of Panaverse Dao Webpage",
    video: "/video.mp4",
        description:"I created a replica of Panaverse DAO by utilizing Tailwind CSS and implementing it within a Next.js framework with TypeScript.",
    },
    {

        title: "blog webpage",
        description: "I designed a blog page exclusively using Tailwind CSS.",
        video:"/video2.mp4"
      
   }]

const ProfessionalExp = () => {
    return (
        <div>
            <h1 className={`mt-10 text-3xl font-medium px-6 sm:px-10 `}>PROJECTS</h1>
            <div className="mt-6 px-6 sm:px-10  ">
                {data.map((item) => {
                    return <div
                        key={item.title}
                        className="border border-transparent drop-shadow-md  bg-gray-100 rounded-lg mt-6 px-2">
                          <h1 className="font-semibold text-xl m-4 uppercase">{item.title}</h1>
                     {item.video && (<video src={item.video} controls className="w-full "></video>)}
                        <h6 className="m-4  text-md">{item.description}</h6>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProfessionalExp