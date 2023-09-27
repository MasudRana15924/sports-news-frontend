import { Skeleton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Related = ({ sport }) => {
    const { title, thumbnail } = sport
    return (
        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3  lg:mt-8">
            <div className="w-full">

                <Link to={`/sport/${sport._id}`}>
                    {
                        thumbnail?.url ? <img
                            src={thumbnail.url}
                            className="w-full h-68 border rounded-lg border-gray-100"
                            alt={title}
                        /> : <Skeleton variant="rounded" width={345} height={345} />
                    }
                </Link>
                <Link to={`/sport/${sport._id}`}>
                    <p className="text-start text-sm  text-gray-400">{title}</p>
                </Link>
            </div>

        </div>
    );
};

export default Related;