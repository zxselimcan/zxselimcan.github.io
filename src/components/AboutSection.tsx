import Image from "next/image"



const AboutSection = () => {
    return (
        <div id="about" className="w-full min-h-screen bg-gray-950 bg-opacity-90 text-neutral-100 p-10 md:p-24 flex flex-wrap flex-col md:flex-row  items-center justify-between items-center h-full">

            <div className="w-full md:w-[50%]">
                <h3 className="text-4xl md:text-4xl font-bold text-neutral-100">About Me</h3>
                <p className="text-neutral-300 mt-10" >
                    Experienced, friendly, positive, and highly motivated individual with a passion for working on exciting projects. I am a software developer with over 5 years of hands-on experience in various fields, including front-end and back-end development. Additionally, I have gained extensive knowledge in areas such as web3, Linux servers, web application security, and smart contract security.
                </p>
                <p className="text-neutral-300 mt-10" >
                    My expertise extends to delivering high-quality solutions, leveraging my extensive understanding of software development principles and best practices. In my career, I have demonstrated my ability to adapt to constantly evolving technologies and emerging trends. Overall, I bring a combination of technical competence, a positive attitude and genuine passion for creating innovative software solutions. I look forward to contributing my expertise and contributing to the success of exciting projects.
                </p>
            </div>
            <div
                className="w-full md:w-[50%] flex flex-row justify-end items-center mt-10 md:mt-0"
            >
                <Image
                    alt="Selim Can Özdemir"
                    src="/selim-can-ozdemir.png"
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
            </div>

        </div>
    )
}

export default AboutSection