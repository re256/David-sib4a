export default function LearnPage () {
    return ( 
        <section className="h-screen bg-gray-100 flex gap-4">
        <div className="bg-blue-300 p-4 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950 ">
            <div className="flex gap-3">
                <img src="/user.svg" alt="user"/>
                <p className="font-medium">Design</p>
                </div>
                <div>
                    <h2 className="text-4xl font-black">Figma</h2>
                    <p className="font-bold">8 hours ago</p>
            </div>
        </div>

            <div className="bg-blue-300 p-4 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="/user.svg" alt="user"/>
                <p className="font-medium">Design</p>
                </div>
                <div>
                    <h2 className="text-4xl font-black">Figma</h2>
                    <p className="font-bold">8 hours ago</p>
            </div>
        </div>
        
        </section>
    );
}