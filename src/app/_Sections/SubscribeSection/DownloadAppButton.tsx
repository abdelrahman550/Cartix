import Link from 'next/link';
import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

type DownloadPlatform = "apple" | "google"

type props = {
    downloadPlatform : DownloadPlatform;
}

const platform = {
    apple : {
        logo: <FaApple size={24} />,
        downloadTitle: "Download on the",
        name: "App Store"
    },
    google : {
logo: <FaGooglePlay size={22} />,
        downloadTitle: "Get it on",
        name: "Google Play"
    }
}

export default function DownloadAppButton({downloadPlatform} : props) {
  return (
    <Link href={"/"} className="download-app-btn group">
                            <div className="text-gray-400 group-hover:text-white transition">
                            {platform[downloadPlatform].logo}
                            </div>
                            <div>
                              <p className="uppercase text-[9px] font-bold text-gray-500">{platform[downloadPlatform].downloadTitle}</p>
                              <p className="text-sm font-bold text-gray-300 group-hover:text-white transition">{platform[downloadPlatform].name}</p>
                            </div>
                        </Link>
  )
}

