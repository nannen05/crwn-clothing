import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Hats',
                imageUrl: 'https://placeimg.com/500/500/any',
                linkUrl: 'hats',
                id: 1,
            },
            {
                title: 'Jackets',
                imageUrl: 'https://placeimg.com/500/500/animals',
                linkUrl: 'hats',
                id: 2,
            },
            {
                title: 'Sneakers',
                imageUrl: 'https://placeimg.com/500/500/nature',
                linkUrl: 'hats',
                id: 3,
            },
            {
                title: 'Womens',
                imageUrl: 'https://placeimg.com/500/500/people',
                linkUrl: 'hats',
                id: 4,
            },
            {
                title: 'Mens',
                imageUrl: 'https://placeimg.com/500/500/tech',
                linkUrl: 'hats',
                id: 5,
            }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionProps}) => {
                        return <MenuItem key={id} {...sectionProps} />
                    })
                }
            </div>
        )
    }
}

export default Directory