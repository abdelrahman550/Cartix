import { fraunces } from '@/Fonts'
import { LoaderPinwheel } from 'lucide-react'

export default function LoadingCartState() {
  return (
     <div className="h-125 flex items-center justify-center bg-white rounded-2xl px-10 py-20">

            <div className="flex flex-col justify-center items-center   ">
                <div className="w-20 h-20 bg-crimson-soft flex items-center justify-center mb-5 rounded-full border border-crimson text-crimson">
                    <LoaderPinwheel className='animate-spin' size={32} />
                </div>
                <h3 className={`${fraunces.className} text-3xl font-bold mb-4`}>Loading Your Cart...</h3>
                <span className="mb-6 text-sm text-gray-600">Just a Moment</span>

            </div>

        </div>
  )
}
