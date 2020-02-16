import React from 'react';

const Cake = (props) => {
    const {cake, selectCake} = props;
    return (
        <div className="cake-list" onClick={() => selectCake(cake)}>
            <img className="preview" src={cake.imageUrl} alt={cake.name}/>
            <h3>{cake.name}</h3>
        </div>
    )
}

export default Cake;