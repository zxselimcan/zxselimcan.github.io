

const ServicePaperItem = ({ title, description, stack }: {
    title: string
    description: string,
    stack?: string[]
}) => {
    return (
        <div
            className="p-4 bg-gray-800 bg-opacity-60 rounded-lg min-h-[120px] w-[100%] flex flex-col justify-between "
        >
            <div>
                <h4 className="text-2xl font-bold text-neutral-200">{title}</h4>
                <p className="text-neutral-300" >{description}</p>
            </div>
            {
                stack && (
                    <div className="flex flex-row gap-2 mt-2 flex-wrap">
                        {
                            stack.map((item, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-2 text-neutral-300 text-sm">{item}</div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ServicePaperItem

