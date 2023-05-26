"use client"
import { useRef } from "react"
import { Twitter, GitHub, Linkedin, Mail, Home, Info, Code, MessageSquare, Menu } from "react-feather"
import MenuItem from "./MenuItem";
import SocialItem from "./SocialItem";
import menuLinks from "./menuLinks";
import SocialLinks from "./socialLinks";

const Navbar = () => {

    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (): void => {
        if (menuRef.current) {
            menuRef.current.classList.toggle('hidden');
        }
    };


    return (
        <div className="w-full fixed md:absolute">

            <nav className="relative flex flex-col w-full">

                <div className="md:hidden absolute right-10 top-10 ">
                    <button
                        onClick={toggleMenu}
                        title="Menu"
                    >
                        <Menu strokeWidth={"1.5"} />
                    </button>
                </div>

                <div
                    className={"hidden md:flex w-full justify-between flex-row p-10 md:p-24 min-h-screen md:min-h-0 bg-gray-950 md:bg-transparent"}
                    ref={menuRef}
                >
                    <div className={`flex flex-col md:flex-row pt-10 md:pt-0 gap-4 justify-center items-center `}>
                        {
                            menuLinks.map((link, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        href={link.href}
                                        text={link.text}
                                        Icon={link.Icon}
                                        onClick={toggleMenu}
                                        hideOnDesktop={link.hideOnDesktop}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row pt-10 md:pt-0 gap-4 justify-center items-center md:pt-0">
                        {
                            SocialLinks.map((link, index) => {
                                return (
                                    <SocialItem
                                        key={index}
                                        href={link.href}
                                        Icon={link.Icon}
                                        onClick={toggleMenu}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </nav >
        </div>

    )
}

export default Navbar
