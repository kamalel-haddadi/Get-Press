import Subhero from "./Subhero"
import Navbar from "./Navbar"
function Page() {
    return (
        <>
            <Navbar />
            <main className="flex-none min-h-screen -z-10">
                <div className="hero relative flex flex-col items-center justify-center w-full py-20">
                    <section className="flex flex-col items-center justify-center w-full md:w-11/12 pb-8 lg:max-w-screen-xl lg:items-center lg:mx-auto">
                        <div className="relative flex flex-col items-center justify-center w-full mx-auto">
                            <div className="mx-auto relative flex flex-col  items-cennter justify-center w-full">
                                <Subhero />
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    )
}
export default Page