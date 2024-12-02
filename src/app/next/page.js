import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div>
            hello
            <Image src="/image/download.jpg"
                width={700}
                height={24} />
            <img src="/image/download.jpg" alt="" />
        </div>
    )
}
