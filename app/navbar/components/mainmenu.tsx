export default function Mainmenu(){
    return(
        <div className="flex flex-col p-2 gap-2.5">
            <p className=" font-medium flex items-center gap-3 text-2x1">Main Menu</p>
          <div className=" flex gap-2.5"> 
            <img src="layout-dashboard.svg" className="brightness-0 invert"/>
            <p className=" font-medium flex items-center gap-3 text-2x1">Dashboard</p>
          </div>
        <div className=" flex gap-2.5"> 
          <img src="align-box-left-stretch.svg" className="brightness-0 invert"/>
          <p className=" font-medium flex items-center gap-3 text-2x1">Overview</p>
        </div>
        <div className=" flex gap-2.5"> 
          <img src="brand-google-analytics.svg" className="brightness-0 invert"/>
          <p className=" font-medium flex items-center gap-3 text-2x1">Analytic</p>
        </div>
      </div>
    )
}