interface IData{
    title:string,
    description:string,
    current:boolean

}
const data:IData[]=[
{
    title:"STUDENT AT PIAIC-QUARTER 2",
    description:"Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
    current:true
},{

    title:"STUDENT AT PIAIC-QUARTER 2",
    description:"Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
    current:false
},{

    title:"STUDENT AT PIAIC-QUARTER 2",
    description:"Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
    current:false
}]

const ProfessionalExp = () => {
  return (
    <div>
        <h1 className={`mt-10 text-3xl font-medium px-6 sm:px-10 `}>PROFESSIONAL EXPERIENCE</h1>
        <div className="mt-6 px-6 sm:px-10  ">
        {data.map((item)=>{
            return <div 
            key={item.title}
            className="border border-transparent drop-shadow-md  bg-gray-100 rounded-lg mt-6 px-2">
            <div className={` ${item.current ? "bg-pink-900 h-2 " :"bg-gray-200 h-2"}`} >         </div>
                <h4 className="font-medium m-4">{item.title}</h4>
                <h6 className="m-4 font-medium">{item.description}</h6>
            </div>
   
        })}
        </div>
    </div>
  )
}

export default ProfessionalExp