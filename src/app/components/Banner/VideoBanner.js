import React from 'react'

export default function VideoBanner() {
    return (
        <div>

            <video width="100%" height="240" controls preload="none" loop autoPlay={true} muted>
                <source src="video/videoBanner2.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
