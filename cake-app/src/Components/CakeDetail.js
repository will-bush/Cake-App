import React from 'react';

const CakeDetail = (props) => {
    const {cake} = props;
        return (
            <div>
                <img className="detail" src={cake.imageUrl} alt={cake.name}/>
                <h3>{cake.name}</h3>
                <p>Comment: {cake.comment}</p>
                <p>Yum Factor: {cake.yumFactor}/5</p>
            </div>
        )
    }

export default CakeDetail;