

const ServicePaperItem = ({ title, description, stack }: {
    title: string
    description: string,
    stack?: string[]
}) => {
    return (
        <div className="p-4 bg-gray-800 bg-opacity-60 rounded-lg min-h-[120px] h-full flex flex-col justify-between">
            <div>
                <h4 className="text-2xl font-bold text-gray-400">{title}</h4>
                <p className="text-gray-500" >{description}</p>
            </div>
            {
                stack && (
                    <div className="flex flex-row gap-2 mt-2 flex-wrap">
                        {
                            stack.map((item, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg p-2 text-gray-400 text-sm">{item}</div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ServicePaperItem

