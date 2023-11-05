import React from 'react'

const Card = (props) => {

    console.log(props.data)
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={props.data.show.image.original}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {props.data.show.name}
                        </a>
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: props.data.show.summary }}
                    />
                </div>
                <p className="text-sm  text-green-800">{props.data.show.rating.average}</p>
            </div>
        </div>
    )
}

export default Card