import { MenuLink } from "@/types";
import { Code, Home, Info, MessageSquare } from "react-feather";


const menuLinks: MenuLink[] = [
    {
        href: "/#",
        text: "Home",
        Icon: Home,
        onClick: () => { },
        hideOnDesktop: true,
    },
    {
        href: "/#about",
        text: "About",
        Icon: Info,
        onClick: () => { },
        hideOnDesktop: false,
    },
    {
        href: "/#services",
        text: "Services",
        Icon: Code,
        onClick: () => { },
        hideOnDesktop: false,
    }, {
        href: "/#contact",
        text: "Contact",
        Icon: MessageSquare,
        onClick: () => { },
    }

]

export default menuLinks;