import React from 'react'
import EndingTrustFeatures from './EndingTrustFeatures'

export default function OurEndingFeatures() {
  return (
    <div className="grid grid-cols-1 bg-linear-to-r from-black via-[#1a0a0d] to-[#2a0f14] md:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
          <EndingTrustFeatures feature="shipping" />
          <EndingTrustFeatures feature="payment" />
          <EndingTrustFeatures feature="return" />
          <EndingTrustFeatures feature="support" />
        </div>
  )
}
