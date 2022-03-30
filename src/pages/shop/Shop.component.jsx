import React from 'react'
import SHOP_DATA from './shop.data.js'
import Collection from '../../components/preview-collection/collection.component.jsx'

import './shop.styles.scss'

export class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
