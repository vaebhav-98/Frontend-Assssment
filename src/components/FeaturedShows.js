import React from 'react'
import Card from './Card'

const FeaturedShows = (props) => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className='flex justify-between items-center'>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Shows</h2>
                <div className='cursor-pointer text-red-500'>See more</div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                {
                    props.data.slice(0, 5).map((item, idx) => {
                        return (
                            <Card data={item} key={idx} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default FeaturedShows