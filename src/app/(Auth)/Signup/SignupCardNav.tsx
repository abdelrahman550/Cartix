import Link from 'next/link'
import React from 'react'

export default function SignupCardNav() {
  return (
    <div className="flex w-full">
          <Link
            href={"/Login"}
            className="group hover:text-crimson-dark relative w-1/2 cursor-pointer overflow-hidden bg-gray-100 py-4 text-gray-400 transition hover:bg-gray-50"
          >
            <span className="flex justify-center font-bold transition">
              Sign In
            </span>
            <span className="bg-crimson-dark absolute bottom-0 left-full h-0.75 w-full transition group-hover:-translate-x-full"></span>
          </Link>
          <div className="relative w-1/2 bg-white/80 py-4 backdrop-blur-sm">
            <span className="text-crimson flex justify-center font-bold">
              Create Account
            </span>
            <span className="bg-crimson absolute bottom-0 left-0 h-0.75 w-full"></span>
          </div>
        </div>
  )
}
