import ServicePaperItem from "./ServicePaperItem"
import services from "./services"


const ServicesSection = () => {

    return (
        <div
            id="services"
            className="flex flex-col p-10 md:p-24 min-h-screen md:mb-24"
        >
            <h3 className="text-5xl font-bold">Services</h3>
            <div className="justify-between my-auto mt-10 md:mt-auto items-center flex-wrap grid gap-4 grid-cols-1 md:grid-cols-2 ">
                {
                    services.map((service, index) => <ServicePaperItem key={index} {...service} />)
                }
            </div>
        </div>
    )
}

export default ServicesSection

