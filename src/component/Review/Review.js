import React, { useState } from 'react';
import './Review.css';
import Courses from '../Courses/Courses';
import jsonData from '../../fakeData/products.json';

const Review = () => {
const [review, setreview] = useState(jsonData);
console.log(review);
    return (
        <div className='reviewContainer'>
            <h1>Developer is sleeping ..1</h1>
        </div>
    );
};

export default Review;