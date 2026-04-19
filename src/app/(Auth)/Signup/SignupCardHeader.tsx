import { fraunces } from '@/Fonts'
import { Dot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export default function SignupCardHeader() {
  return (
    <>
    <div className="text-crimson mb-2 flex items-center gap-1 text-sm font-bold uppercase">
            <span className="animate-pulse">
              <Dot size={14} strokeWidth={10} />
            </span>
            <span>Join Cartix</span>
          </div>
          <h3 className={`${fraunces.className} mb-2 text-2xl font-bold`}>
            Create your account
          </h3>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">
              Already have an account?
            </span>
            <Link href={"/Login"}>
              <span className="text-crimson hover:text-crimson-dark cursor-pointer text-sm font-semibold underline transition">
                Sign In
              </span>
            </Link>
          </div>
          <div className="my-6 flex items-center gap-4 text-sm font-semibold">
            <div className="text-crimson hover:bg-crimson flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-black/5 bg-white/60 px-4 py-2 backdrop-blur-sm transition hover:text-white hover:shadow-md">
              <span>
                <FaGoogle />{" "}
              </span>
              <span>Google</span>
            </div>
            <div className="text-crimson hover:bg-crimson flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-black/5 bg-white/60 px-4 py-2 backdrop-blur-sm transition hover:text-white hover:shadow-md">
              <span>
                <FaFacebook />{" "}
              </span>
              <span>Facebook</span>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <div className="relative px-2 text-xs font-bold text-gray-400 uppercase">
              <span>Or With Email</span>
              <div className="absolute top-1/2 left-full h-0.5 w-full -translate-y-1/2 bg-gray-300"></div>
              <div className="absolute top-1/2 right-full h-0.5 w-full -translate-y-1/2 bg-gray-300"></div>
            </div>
          </div>
    </>
  )
}
