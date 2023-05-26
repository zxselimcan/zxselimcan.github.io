import { Icon } from "react-feather"

type Service = {
    title: string
    description: string
    stack?: string[]
}


type MenuLink = {
    href: string
    text: string
    Icon: Icon
    onClick: () => void
    hideOnDesktop?: boolean
}

type SocialLink = {
    href: string
    Icon: Icon
    onClick: () => void
}