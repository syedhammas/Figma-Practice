import React from 'react'
import Image from 'next/image'

export default function LeadingServer() {
    return (
        <section className=" flex flex-col items-center min-h-screen bg-[url('/hero4.png')] bg-cover bg-no-repeat relative">
            {/* Heading */}
            <h2 className="text-white text-4xl md:text-5xl leading-20 font-astrospace font-extrabold text-center mb-2 tracking-wide">
                WHY <span className="text-blue-400">GAMEPROHOST?</span>
                <br />
                <span className="text-white">LEADING GAME SERVER RENTAL</span>
            </h2>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-24 gap-8 mt-16 justify content-center items-center">
                {/* Card 1 */}
                <div className="relative shadow-lg flex items-center flex-col ">
                    <div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white px-1.5 text-xl font-bold">
                            User-friendly web interface
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="relative border border-blue-200/30 rounded-2xl shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
                        <span className="text-blue-400 mb-4">
                            {/* Keyboard Icon */}
                            <Image
                                src="/card1icon.svg"
                                alt="Keyboard Icon"
                                width={73}
                                height={69}
                            />
                        </span>

                        <p className="text-[#9BA8CD] text-xl mt-2">
                            GameProHost simplifies everything with intuitive processes,
                            allowing users to enjoy benefits without prior knowledge, making
                            the platform an easy-to-use solution.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="relative shadow-lg flex items-center flex-col">
                    <div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white font-bold text-xl">
                            No lag
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="relative border border-blue-200/30 rounded-2xl shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
                        <span className="text-blue-400 mb-4">
                            {/* Keyboard Icon */}
                            <Image
                                src="/card2icon.svg"
                                alt="Keyboard Icon"
                                width={75}
                                height={74}
                            />
                        </span>

                        <p className="text-[#9BA8CD] text-xl mt-2">
                            Leave behind micro-freezing while you play. We have high-end
                            equipment that has the ability to deliver optimal performance even
                            under high demand conditions.
                        </p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="relative shadow-lg flex items-center flex-col">
                    <div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white font-bold text-xl">
                            Hardware NVME y AMD
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="relative border border-blue-200/30 rounded-2xl shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
                        <span className="text-blue-400 mb-4">
                            {/* Keyboard Icon */}
                            <Image
                                src="/card3icon.svg"
                                alt="Keyboard Icon"
                                width={80}
                                height={51}
                            />
                        </span>
                        <p className="text-[#9BA8CD] text-xl mt-2">
                            Our gaming servers feature the latest CPU technology and NVME SSD
                            storage, allowing lightning-fast processing and easy management via
                            our control panel.
                        </p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="relative shadow-lg flex items-center flex-col">
                    <div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white font-bold text-xl">
                            24/7 support
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="relative border border-blue-200/30 rounded-2xl shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
                        <span className="text-blue-400 mb-4">
                            {/* Keyboard Icon */}
                            <Image
                                src="/card4icon.svg"
                                alt="Keyboard Icon"
                                width={73}
                                height={69}
                            />
                        </span>

                        <p className="text-[#9BA8CD] text-xl mt-2">
                            We have a team of trained specialists who are available to answer
                            all your questions and help you with your server.
                        </p>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="relative shadow-lg flex items-center flex-col">
                    <div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white font-bold text-xl">
                            Freedom of management
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="relative border border-blue-200/30 rounded-2xl shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
                        <span className="text-blue-400 mb-4">
                            {/* Keyboard Icon */}
                            <Image
                                src="/card5icon.svg"
                                alt="Keyboard Icon"
                                width={58}
                                height={66}
                            />
                        </span>

                        <p className="text-[#9BA8CD] text-xl mt-2">
                            A hosting for game servers without restrictions. You will be able
                            to access all files from the panel or from FTP to edit, delete or
                            upload files.
                        </p>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="relative shadow-lg flex items-center flex-col">
                    <div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100a37]">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white font-bold text-xl">
                            Backups of your server
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="relative border border-blue-200/30 rounded-2xl shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
                        <span className="text-blue-400 mb-4">
                            {/* Keyboard Icon */}
                            <Image
                                src="/card6icon.svg"
                                alt="Keyboard Icon"
                                width={58}
                                height={68}
                            />
                        </span>

                        <p className="text-[#9BA8CD] text-xl mt-2">
                            Go back to your previous games with a click. Each server has a
                            backup of all games for a period of 7 days.
                        </p>
                    </div>
                </div>
            </div>

            <section className="w-full flex flex-col items-center py-24">
                <h2 className="text-white text-4xl leading-20 font-astrospace text-center mb-6 tracking-wide uppercase">
                    YOU ARE JUST ONE CLICK AWAY FROM HAVING YOUR OWN GAME SERVER,
                    <br />
                    NOTHING WILL SLOW DOWN YOUR GAMES.
                </h2>
                <button className="mt-6 mb-12 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition">
                    START YOUR SERVER RIGHT NOW
                </button>
                <div className="relative shadow-lg flex items-center flex-col mt-12">
                    <div className="flex items-center justify-center mb-4 bg-[#18152c] z-10">
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                        <span className="uppercase text-white font-bold text-2xl mx-4 ">
                            DDOS PROTECTION AS STANDARD
                        </span>
                        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
                    </div>
                    <div className="w-full h-[187px] mx-auto border border-blue-200/40 rounded-2xl px-8 py-8 mb-20 mt-[-32px]">
                        <p className="text-[#9BA8CD] text-center text-base mb-2">
                            DDoS attacks are more common than you think, especially in the
                            most competitive games.
                        </p>
                        <p className="text-[#9BA8CD] text-center mt-8 text-base">
                            We guarantee the protection of our servers in order to keep you
                            online 24 hours a day, 7 days a week without downtime thanks to
                            our Firewall against massive traffic.
                        </p>
                    </div>
                </div>
                <div className='mx-[97px]'>
                    <h2 className="text-white text-6xl mb-20 font-astrospace text-center tracking-wide uppercase">
                        POPULAR GAMES TO{" "}
                        <span className="text-blue-400">RENT SERVERS</span>
                    </h2>
                    <p className="text-[#8296CF] text-2xl w-full leading-10 text-center mb-2">
                        Game server rentals have become increasingly popular due to the need
                        for specialized servers to host video games and deliver an optimal
                        gaming experience. Let's look at some of the most popular games
                        where you can rent servers.
                    </p>
                </div>

            </section>
            <section className="w-full flex flex-col items-center bg-[url('/hero5.png')] bg-cover bg-no-repeat py-24 mx-28 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[98vw] max-w-[1700px]">
                    {/* Minecraft */}
                    <div className="justify-center flex flex-col gap-9 ">
                        <div>
                            <h3 className="text-white font-astrospace text-4xl mb-4 tracking-wide">
                                MINECRAFT
                            </h3>
                            <div className="w-[120px] h-1 bg-[#3885F2] rounded-full" />
                        </div>
                        <p className="text-[#8296CF] leading-8 text-lg">
                            Enter Minecraft, a limitless world of blocks and endless possibilities. A universe where you are the architect, explorer and hero. Minecraft offers you two different game modes: Survival, where you collect resources and fight creatures to stay alive, and Creative, where you have complete freedom to build anything your imagination can conceive. Minecraft also offers multiplayer, allowing you to explore and build with friends. Whether you want to build a majestic castle, explore vast biomes, or take on the fearsome Ender Dragon, in Minecraft, you decide your own adventure! Enter today and discover why Minecraft has captured the hearts of millions.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div className="relative rounded-[36px] flex items-center justify-center">
                            {/* Card Content */}
                            <div className="relative rounded-[32px] overflow-hidden">
                                <img
                                    src="/minecraft.png"
                                    alt="Minecraft"
                                    className="w-[779px] h-[505px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* ARK */}
                    <div className="flex justify-start">
                        <div className="relative rounded-[36px] flex items-center justify-center">
                            {/* Card Content */}
                            <div className="relative rounded-[32px] overflow-hidden">
                                <img
                                    src="/ark.svg"
                                    alt="ARK"
                                    className="w-[781px] h-[505px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center flex flex-col gap-9">
                        <div>
                            <h3 className="text-white font-astrospace text-4xl mb-4 tracking-wide">
                                ARK
                            </h3>
                            <div className="w-[120px] h-1 bg-[#3885F2] rounded-full" />
                        </div>
                        <p className="text-[#8296CF] leading-8 text-lg">
                            In ARK: Survival Evolved, you wake up on an island full of
                            dinosaurs and other prehistoric creatures. You must build,
                            develop, domesticate and survive to prevail. Create your own

                            Rust throws you into a post-apocalyptic world where only the
                            strongest survive. With nothing more than a stone and a torch, you
                            must develop creative solutions, build shelters, form alliances
                            and defend yourself from dangers. Collect resources, craft weapons,
                            and build your own base. Survival comes down to skill: form
                            alliances or face other players in your journey to the challenge?
                            Try today and see if you can survive rust.
                        </p>
                    </div>
                    <div className="justify-center flex flex-col gap-9">
                        <div>
                            <h3 className="text-white font-astrospace text-4xl mb-4 tracking-wide">
                                Rust
                            </h3>
                            <div className="w-[120px] h-1 bg-[#3885F2] rounded-full" />
                        </div>
                        <p className="text-[#8296CF] leading-8 text-lg">
                            Rust throws you into a post-apocalyptic world where only the strongest survive. With nothing more than a stone and a torch, your mission is to survive: collect resources, build shelters and defend your territory against other players. The game also offers an intense multiplayer experience, allowing you to form alliances or face other players. In Rust, every decision counts and every interaction can be crucial to your survival. Are you ready for the challenge? Try it today and see if you can survive Rust!
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div className="relative rounded-[36px] flex items-center justify-center">
                            {/* Card Content */}
                            <div className="relative rounded-[32px] overflow-hidden">
                                <img
                                    src="/rust.svg"
                                    alt="Rust"
                                    className="w-[779px] h-[505px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
