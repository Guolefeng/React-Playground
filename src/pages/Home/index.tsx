import React, { useState, useEffect } from 'react'
import { VideoPlayerModal } from '@/components/purecomponents'

const Home = (props:any) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        console.log('---', visible)
    }, [])

    return (
        <div>
            <span onClick={() => setVisible(true)}>播放视频</span>
            <VideoPlayerModal
                url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                visible={visible}
                onClose={() => setVisible(false)}
            />
        </div>
    )
}

export default Home