export default function Account(){
    return(
<div className="flex flex-col p-2 gap-2.5">
            <p className=" font-medium flex items-center gap-3 text-2x1">Account</p>
        <div className=" flex gap-2.5"> 
        <img src="user-circle.svg" className="brightness-0 invert"/>
        <p className=" font-medium flex items-center gap-3 text-2x1">Profile</p>
        </div>
        <div className=" flex gap-2.5"> 
        <img src="settings.svg" className="brightness-0 invert"/>
        <p className=" font-medium flex items-center gap-3 text-2x1">Settings</p>
        </div>
        
      </div>
    )
}