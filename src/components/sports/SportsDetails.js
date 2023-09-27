import { Skeleton } from '@mui/material';
import React from 'react';
import {formatDate} from '../../utilities/helper'
const SportsDetails = ({sport}) => {
    const { title, thumbnail,createdAt,description } = sport
    return (
        <div className="w-full">
                <div className="w-full lg:w-3/4">
                    <p className="text-start"></p>
                    <p className="text-start">‘ {title} ’</p>
                    <p className="text-start text-sm text-gray-400 mt-4 mb-12">প্রকাশ : {formatDate(createdAt)}</p>

                    <hr />
                </div>
             
            <div>
            <div className="mt-16">
            {
                thumbnail?.url ? <img
                    src={thumbnail.url}
                    className=" w-full lg:w-3/4 h-68 border rounded-lg border-gray-100"
                    alt={title}
                /> : <Skeleton variant="rounded" width={345} height={345} />
            }
            </div>
            </div>
            <div className="w-full lg:w-3/4 ">
                <p className="text-start mt-12">{description}</p>
            </div>
            
        
       
        
       
</div>
    );
};

export default SportsDetails;