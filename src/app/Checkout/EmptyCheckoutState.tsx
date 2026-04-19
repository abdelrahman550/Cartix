import { Button } from '@/components/ui/button'
import { fraunces } from '@/Fonts'
import { MessageCircleWarning, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EmptyCheckoutState() {
  return (
    <div className="h-125 flex items-center justify-center bg-white rounded-2xl px-10 py-20">

            <div className="flex flex-col justify-center items-center   ">
                <div className="w-20 h-20 bg-crimson-soft flex items-center justify-center mb-5 rounded-full border border-crimson text-crimson">
                    <MessageCircleWarning size={32} />
                </div>
                <h3 className={`${fraunces.className} text-3xl font-bold mb-4`}>Your cart is empty</h3>
                <span className="mb-6 text-sm text-gray-600">Add some items to your cart before checking out.</span>
                <Link href={"/"}>
                
                <Button
                variant="default"
                className="hover:bg-crimson-dark group crimson-shadow-hover bg-crimson mb-2 flex h-14 w-full cursor-pointer items-center justify-center px-7 font-bold hover:-translate-y-0.5"
              >
                <span>Continue Shopping</span>
                <span>
                  <MoveRight
                    size={24}
                    strokeWidth={4}
                    className="transition group-hover:translate-x-0.5"
                  />
                </span>
              </Button>
                
                
                </Link>

            </div>

        </div>
  )
}
