import { div } from "motion/react-client"

const HeaderSection = () => {
  return (
    <div className="text-gray-300 h-14 border-gray-800 border-b flex justify-center items-center">
        <div className="flex gap-60  h-full justify-center items-center border-gray-800 border-l border-r 
         p-4
        ">
            <div>
                Aryan
            </div>
            <div className="flex gap-10">
                <h1>Home</h1>
                <h1>Blogs</h1>
                <h1>Projects</h1>
                <h1>Resume</h1>
            </div>
        </div>
    </div>
    
  )
}

export default HeaderSection
