export default function Herobanner() {
    return (
        <>
            <div className="max-w-[650px] mx-auto my-20 px-16 tab:mx-16 tab:px-0 tab:max-w-[550px] mob:px-0 mob:mx-2">
                <h1 className="text-center font-extrabold text-4xl my-10  mob:text-2xl">Bulk Order</h1>
                <h2 className=" font-extrabold text-3xl my-10  mob:text-2xl">1. Return Gifts :</h2>
                <p className="text-lg my-5 font-semibold tab:text-sm">Have a birthday party or an event coming up? Toycra would love to be part of it to make it even more special!</p>
                <p className="text-lg font-semibold  tab:text-sm">Need help in choosing a perfect return gift? Let our toy experts help you. No matter how many toys you need, you can count on us to get them to you fast. We specialise in unique toys and quick turnarounds! Contact us for more information and possible discounts.</p>
                <h2 className=" font-extrabold text-3xl my-10  mob:text-2xl">2. Schools and Libraries :</h2>
                <p className="text-lg my-5 font-semibold tab:text-sm">Whether you're an educator looking for classroom resources or an organization looking for fun new ways to bring the community together, we want to enhance everything you do with the power of play!</p>
                <h2 className=" font-extrabold text-3xl my-10  mob:text-2xl">3. Corporate :</h2>
                <p className="text-lg my-5 font-semibold tab:text-sm">Want to create a Lego corner for your employees and their kids? Or a fantastic game corner? We are your one stop solution.</p>

                <h1 className="font-extrabold text-4xl">Contact Us at :</h1>
                <div className="font-medium text-lg flex flex-col gap-1 mt-5">
                    <p className=" tab:text-sm">Call / Whatsapp - 09638993429</p>
                    <p className=" tab:text-sm">Email - Help@toycra.com</p>
                    <p className=" tab:text-sm">Or fill below form -</p>
                </div>
                <div className="mt-10 flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5 mob:block">
                        <input type="text" className="border w-full px-2 py-3 mob:mb-5" placeholder="Name" />
                        <input type="text" className="border w-full px-2 py-3" placeholder="Email" />
                    </div>
                    <input type="phone" className="border w-full px-2 py-3" placeholder="Phone Nummber" />
                    <textarea name="message" className="border w-full px-2 py-14 placeholder:flex" placeholder="Message">Message</textarea>
                    <div>
                        <button className="bg-searchbg text-white px-6 py-2 font-semibold text-lg rounded-sm">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}