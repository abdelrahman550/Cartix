import React from 'react'
import BuyingTrustFeats from './BuyingTrustFeats'

export default function AllBuyingFeats() {
  return (
    <div className="grid grid-cols-1 gap-3.5 mt-6 lg:grid-cols-2 xl:grid-cols-3">
          <BuyingTrustFeats feature="shipping" />
          <BuyingTrustFeats feature="return" />
          <BuyingTrustFeats feature="payment" />
        </div>
  )
}
