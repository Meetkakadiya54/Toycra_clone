export default function Agewise() {
    return (
        <>
            <div className="fixed top-56 left-[570px] z-20">
                <ul className=" w-56 px-6 flex flex-col gap-2 text-lg py-2 bg-bgwhite font-normal">
                    <li className="hover:text-gray-700"><a href="">0-2 Years</a></li>
                    <li className="hover:text-gray-700"><a href="">2-4 Years</a></li>
                    <li className="hover:text-gray-700"><a href="">4-7 Years</a></li>
                    <li className="hover:text-gray-700"><a href="">7-12 Years</a></li>
                    <li className="hover:text-gray-700"><a href="">12+ Years</a></li>
                </ul>
            </div>
        </>
    )
}