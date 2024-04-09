import React from 'react'

const Statistic = () => {
    const statistics = [
        {
            label: "company employees",
            statistic: 1500,
        },
        {
            label: "years we are with you ",
            statistic: 15,
        }, {
            label: "restaurants",
            statistic: 30,
        }, {
            label: "cities of Ukraine ",
            statistic: 10,
        }, {
            label: "monthly guests",
            statistic: 350000,
        },
    ]
    return (
        <div className='w-full flex justify-center my-11'>
            <div className='w-[80%] my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {statistics.map((item, index) => (
                    <div className={'border-black text-center w-full my-11 h-20 ' + (statistics.length-1 === index ? '' : 'lg:border-r')} key={index}>
                        <h4 className='font-bold text-4xl'>
                            {item.statistic}
                        </h4>
                        <p className='text-xl text-gray-500'>
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Statistic