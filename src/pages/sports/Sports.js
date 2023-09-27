import React, { useEffect } from 'react';
import AllSports from '../../components/sports/AllSports';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSports } from '../../features/sports/allSportsSlice';
import { Hourglass } from 'react-loader-spinner';
const Sports = () => {

    const dispatch = useDispatch();
    const { sports } = useSelector(state => state.sports.sports);
    console.log(sports);
    const { isLoading } = useSelector(state => state.sports);
    useEffect(() => {
        dispatch(fetchSports());
    }, [dispatch])


    let content;

    if (sports?.length > 0) {
        content = sports.map(sport => <AllSports key={sport._id} sport={sport} />)
    }
    return (
        <div>
            <section className="lg:w-3/4 mx-auto mt-12 ">

                <h1 className="text-start ml-3 lg:ml-0 font-semibold  text-2xl lg:text-3xl ">সব খবর</h1>

                {
                    isLoading ? <div className=" flex flex-1 items-center justify-center mt-10">
                        <Hourglass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="hourglass-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            colors={['#306cce', '#72a1ed']}
                        />
                        <p className="ml-1 mt-2 text-gray-400 text-sm">লোড হচ্ছে</p>
                    </div> : <div
                        className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0 mt-10 md:mt-16 lg:mt-16" >
                        {content}

                    </div>
                }
            </section>
        </div>
    );
};

export default Sports;