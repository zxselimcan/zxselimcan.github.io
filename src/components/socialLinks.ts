import { SocialLink } from "@/types";
import { GitHub, Linkedin, Mail, Twitter } from "react-feather";

const SocialLinks: SocialLink[] = [
    {
        href: "https://linkedin.com/in/zxselimcan",
        Icon: Linkedin,
        onClick: () => { },
    },
    {
        href: "https://github.com/zxselimcan",
        Icon: GitHub,
        onClick: () => { },
    },
    {
        href: "https://twitter.com/zxselimcan",
        Icon: Twitter,
        onClick: () => { },
    },
    {
        href: "mailto:zxselimcan@icloud.com",
        Icon: Mail,
        onClick: () => { },
    }
]

export default SocialLinks;
