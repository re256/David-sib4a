export default function General(){
    return(
        <div className="flex flex-col p-2 gap-2.5">
            <p className=" font-medium flex items-center gap-3 text-2x1">General</p>
        <div className=" flex gap-2.5"> 
        <img src="folder.svg" className="brightness-0 invert"/>
        <p className=" font-medium flex items-center gap-3 text-2x1">Project</p>
        </div>
        <div className=" flex gap-2.5"> 
        <img src="users-group.svg" className="brightness-0 invert" />
        <p className=" font-medium flex items-center gap-3 text-2x1">Groups</p>
        </div>
        <div className=" flex gap-2.5"> 
        <img src="flag.svg" className="brightness-0 invert"/>
        <p className=" font-medium flex items-center gap-3 text-2x1">Reports</p>
        </div>
      </div>
    )
}