import { Icon } from "react-feather"

const SocialItem = ({ href, Icon, onClick }: {
    href: string
    Icon: Icon,
    onClick?: () => void
}) => {
    return (
        <a
            href={href}
            className="text-neutral-100 hover:text-rose-600 ease-in duration-200"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            title={href}
        >
            <Icon strokeWidth={"1.5"} />
        </a>
    )
}

export default SocialItem
