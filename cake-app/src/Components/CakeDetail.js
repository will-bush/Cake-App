import React from 'react';

const CakeDetail = (props) => {
    const {cake, clearSelection } = props;
        return (
            <div className="detail">
                <p>You are viewing {cake.name}!</p>
                <img className="detail-image"src={cake.imageUrl} alt={cake.name}/>
                <h2>{cake.name}</h2>
                <p><b>Comment:</b> {cake.comment}</p>
                <p><b>Yum Factor:</b> {cake.yumFactor}/5</p>
                <button className="button-red" onClick={() => clearSelection()}>Return to Menu</button>
            </div>
        )
    }

export default CakeDetail;