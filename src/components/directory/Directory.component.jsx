import React from 'react'

import MenuItem from '../menu-item/Menu-item.components'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'ENGINEERING',
          imageUrl: 'https://bit.ly/3Nuugjq',
          id: 1,
          linkUrl: 'shop/engineering',
        },
        {
          title: 'LAW',
          imageUrl: 'https://bit.ly/3DfkHAk',
          id: 2,
          linkUrl: 'shop/laws',
        },
        {
          title: 'BUSINESS',
          imageUrl: 'https://bit.ly/3wJwnKs',
          id: 3,
          linkUrl: 'shop/comics',
        },
        {
          title: 'NOVEL',
          imageUrl: 'https://bit.ly/3NwAkbs',
          id: 4,
          linkUrl: 'shop/novel',
        },
        {
          title: 'MYSTERY',
          imageUrl: 'https://bit.ly/3wFy6QZ',
          id: 5,
          linkUrl: 'shop/mystery',
        },
        {
          title: 'COMICS & MANGA',
          imageUrl: 'https://bit.ly/3NoKavM',
          id: 6,
          linkUrl: 'shop/comics',
        },
        {
          title: 'ADVENTURE',
          imageUrl: 'https://bit.ly/3qJLdNf',
          size: 'large',
          id: 7,
          linkUrl: 'shop/adventure',
        },
        {
          title: 'HISTORY',
          imageUrl: 'https://bit.ly/3wND6D0',
          size: 'large',
          id: 8,
          linkUrl: 'shop/history',
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory
