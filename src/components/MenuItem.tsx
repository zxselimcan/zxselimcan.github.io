import { Icon } from "react-feather"

const MenuItem = (
    { href, text, Icon, onClick, hideOnDesktop }: {
        href: string
        text: string,
        Icon: Icon,
        onClick: () => void,
        hideOnDesktop?: boolean
    }
) => {
    return (
        <a
            href={href}
            className={
                hideOnDesktop
                    ? "flex gap-2 md:hidden"
                    : "text-neutral-100 hover:text-rose-600 ease-in duration-200 flex flex-row gap-2 items-center"
            }
            onClick={onClick}
            title={text}
        >
            <Icon strokeWidth={"1.5"} />
            <span>{text}</span>
        </a>
    )
}

export default MenuItem
