import { Service } from "@/types"

const services: Service[] = [
    {
        title: "Front-End Development",
        description: "I build responsive, fast, and accessible web applications.",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Material UI", "GraphQL"],
    },
    {
        title: "Back-End Development",
        description: "I build back-end applications for web and mobile applications.",
        stack: ["Node.js", "Express", "Go", "GraphQL", "SQL", "NoSQL"],
    },
    {
        title: "Mobile Development",
        description: "I build and publish optimized, cross-platform mobile applications.",
        stack: ["React Native", "TypeScript", "GraphQL", "Android", "iOS"],
    },
    {
        title: "Blockchain Development",
        description: "I build smart contracts, nfts, tokens and decentralized applications.",
        stack: ["Solidity", "EVM", "Web3.js", "Ethers.js", "Hardhat", "Nfts", "dApps"],
    },
    {
        title: "DevOps & Server Administration",
        description: "I manage servers and deploy applications.",
        stack: ["Docker", "Docker Swarm", "QEMU", "KVM", "Linux", "Libvirt"],
    },
    {
        title: "You name it!",
        description: "I'm always learning new technologies and I'm open to new opportunities.",
        stack: [],
    }
]

export default services

