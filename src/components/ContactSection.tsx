import SocialLinks from "./socialLinks"
import SocialItem from "./SocialItem"

const ContactSection = () => {
    return (
        <div id="contact" className="flex flex-col p-10 md:p-24 min-h-screen bg-gray-950 bg-opacity-90">
            <h3 className="text-5xl font-bold">Contact</h3>
            <div className="justify-between my-auto mt-10 md:mt-auto items-center flex-wrap grid gap-4 grid-cols-1 md:grid-cols-2 ">
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-neutral-100">
                        Let{"'"}s talk!
                    </h3>
                    <p className="text-md  text-neutral-300 ">
                        zxselimcan@icloud.com
                    </p>
                </div>
                <div>
                    <p className="text-xl mt-10 text-neutral-100">Want to chat? I{"'"}d love to hear from you. I{"'"}m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className="flex flex-row gap-4 mt-10">
                        {
                            SocialLinks.map((link, index) => <SocialItem key={index} href={link.href} Icon={link.Icon} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactSection

