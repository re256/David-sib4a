import Mainmenu from "./components/mainmenu";
import General from "./components/general";
import Account from "./components/account";

export default function test() {
  return (
  <section className="flex min-h-screen p-8 gap-8 font-sans">
      
    <div className="w-60 h-126 bg-blue-950 rounded-2xl flex-start justify-between relative text-white p-6">
      <div className="flex items-center gap-2.5">
            <img src="user-circle.svg" alt="Logo user" className="w-12 h-12 object-contain brightness-0 invert" />
            <p className=" font-medium flex items-center gap-3 text-xl">CodingLap</p>
      </div>


      <Mainmenu/>
      <General/>
      <Account/>

      

    </div>
  </section>
  )
}