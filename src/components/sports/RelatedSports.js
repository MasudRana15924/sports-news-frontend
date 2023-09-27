import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedsports } from '../../features/related/relatedSportSlice';
import Related from './Related';
import { useState } from 'react';

const RelatedSports = ({category,id}) => {
    const dispatch = useDispatch();
    const { sports} = useSelector(state => state.related.relatedsports);
    const {isLoading } = useSelector(state => state.related);
    useEffect(() => {
        dispatch(fetchRelatedsports({ category, id }))
    }, [dispatch, category, id])
    let content;
    const [visible, setVisible] = useState(4);
    const loadMore = () => {
        setVisible(visible + 4);
    }
    if (sports?.length > 0) {
        content = sports.slice(id,visible).map(sport => <Related key={sport._id} sport={sport} />)
    }
    // console.log(sports.slice(id));
    return (
        <div>
        <h2 className="text-start text-xl text-slate-600 ml-4 lg:ml-0">সম্পর্কিত </h2>
        <div className="lg:mt-36 grid lg:block grid-cols-12 gap-4 m-3 md:m-0 lg:m-0 mt-10  ">
            {content}

        </div>
    </div>
    );
};

export default RelatedSports;