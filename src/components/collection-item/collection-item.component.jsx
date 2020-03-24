import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="collection-item__image">
            <img src={imageUrl}/>
        </div>
        <div className="collection-item__name">
            {name}
        </div>
        <div className="collection-item__price">
            {price}
        </div>
    </div>
)

export default CollectionItem;