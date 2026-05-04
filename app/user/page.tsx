export default function user() {
  return (
<section className="h-screen bg-gray-600 flex flex-col items-center justify-center text-black font-sans">
  <div className=" bg-white p-6 h-122 w-102 rounded-4xl flex flex-col">
    <div className="h-18 w-full flex justify-between gap-3">
          <h2 className="font-light text-2xl">Client details</h2>
          <img src="/x.svg" alt="x" className="w-6 h-6"/>
    </div>     
    <div className="h-10 w-full gap-2 flex items-center">
           <img src="/user-circle.svg" alt="user" className="w-20 h-20 object-contain"/>
           

        <div className="flex flex-col">
            <h2 className="font-medium text-xl">Cornelius Greenfelder</h2>
            <div className="bg-green-200 w-20 h-6 rounded-full gap-1 p-1 flex items-center">
                <img src="/rosette.svg" alt="rosette" className="w-4 h-4"/>
                <p className="text-while text-xs font-medium" >Verified</p>
            </div>
        </div>
    </div>
  </div>
</section>
  )
}



























  