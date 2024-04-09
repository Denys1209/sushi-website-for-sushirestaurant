import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        <div className="bg-white my-11">
            <div className="mx-auto max-w-2xl px-4  sm:px-4  lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900"
                    >Our dishes for </h2>

                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <div className="flex flex-col space-y-3">
                                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default loading