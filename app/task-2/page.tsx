export default function navbarPage() {
  return (
  <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 p-8 font-sans">
    
    <div className="w-full max-w-4xl flex flex-col gap-6"> 

      <div className="w-full h-64 flex flex-row gap-6">
        <div className="bg-cyan-100 flex-[50%] p-6 relative rounded-3xl flex flex-col justify-between text-cyan-900">
          <div className="flex gap-3">
            <img src="/palette.svg" alt="palette" className="w-4 h-5 object-contain"/>
            <p className="text-sm font-medium flex items-center gap-3">Design</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold ">Adobe Photoshop</h2>
            <p className="text-sm font-semibold">in 3 days</p>
          </div>
        </div>

        <div className="bg-green-100 flex-[50%] p-6 relative rounded-3xl flex flex-col justify-between text-green-900">
          <div className="flex gap-3">
            <img src="/brand-tabler.svg" alt="brand-tabler" className=" w-4 h-5 object-contain" />
            <p className="text-sm font-medium flex items-center gap-3">AI</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">DALL·E 2, Midjourney, Stable Diffusion</h2>
            <p className="text-sm font-semibold">in 5 days</p>
          </div>
        </div>
      </div>

      <div className="w-full h-64 flex flex-row gap-6">
        <div className="bg-purple-100 flex-1 p-6 rounded-4xl flex flex-col justify-between text-purple-900">
          <div className="flex gap-3">
            <img src="/palette.svg" alt="palette" className=" w-4 h-5 object-contain" />
            <p className="text-sm font-medium flex items-center gap-3">Design</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Figma</h2>
            <p className="text-sm font-semibold">8 hours ago</p>
          </div>
        </div>

        <div className="bg-orange-100 flex-1 p-6 rounded-4xl flex flex-col justify-between text-orange-900">
          <div className="flex gap-3">
            <img src="/code.svg" alt="code" className="w-4 h-5 object-contain" />
            <p className="text-sm font-medium flex items-center gap-3">Codding</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Python</h2>
            <p className="text-sm font-semibold">2 days ago</p>
          </div>
        </div>

        <div className="bg-pink-100 flex-1 p-6 rounded-4xl flex flex-col justify-between text-pink-900">
          <div className="flex gap-3">
            <img src="/palette.svg" alt="palette" className="w-4 h-5 object-contain" />
            <p className="text-sm font-medium flex items-center gap-3">Design</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Sketch</h2>
            <p className="text-sm font-semibold">4 days ago</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}