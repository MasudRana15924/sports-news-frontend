import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchsport } from '../../features/sports/singleSportsSlice';
import SportsDetails from '../../components/sports/SportsDetails';
import RelatedSports from '../../components/sports/RelatedSports';


const SingleSports = () => {
    const dispatch = useDispatch();
    const { sportId } = useParams()
    const { sport } = useSelector(state => state.sport.sport);
    const { category,_id } = sport || {}
    useEffect(() => {
        dispatch(fetchsport(sportId))
    }, [dispatch, sportId])
    let content;
    if (sport?._id) {
        content = <div>
            <SportsDetails sport={sport}></SportsDetails>

        </div>
    }
    return (
        <div className="lg:flex mt-20 lg:mt-48 w-full lg:w-3/4 mx-auto">
            <div className="full">
                <section className="p-3 lg:p-0  pt-6 pb-20 mt-16 lg:mt-48">
                    {content}
                </section>
            </div>
            <div className="w-full lg:w-1/4 ">
                <section className=" lg:mt-48 ">
                    <RelatedSports className=" lg:mt-48" category={category} id={_id}></RelatedSports>
                </section>

            </div>
        </div>
    );
};

export default SingleSports;