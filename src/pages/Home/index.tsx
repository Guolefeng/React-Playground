import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { VideoPlayerModal } from '@/components/purecomponents'

const Home = (props:any) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        console.log('---', visible)
        testSpeed()
    }, [])

    const testSpeed = () => {
        // JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
        let imageAddr = 'http://cimcube-gtw-uat.dgct.glodon.com/bcp-common/file/downLoad?fileId=f4affb33e37c40a99ff5a78e7f5e585a&fileName=ghyzt.svg'
        let downloadSize = 6 * 1024; // bytes
        // let imageAddr = 'http://cimcube-gtw-uat.dgct.glodon.com/bcp-common/file/downLoad?fileId=4955d1d5374f4ccd9599d7a4778adb33&fileName=littlePrince.jpg'
        // let downloadSize = 25 * 1024; // bytes

        function ShowProgressMessage(msg: any) {
            if (console) {
                if (typeof msg === 'string') {
                    console.log(msg);
                } else {
                    for (let i = 0; i < msg.length; i++) {
                        console.log(msg[i]);
                    }
                }
            }

            let oProgress = document.getElementById('progress');
            if (oProgress) {
                let actualHTML = (typeof msg === 'string') ? msg : msg.join('<br />');
                oProgress.innerHTML = actualHTML;
            }
        }

        function InitiateSpeedDetection() {
            ShowProgressMessage('Loading the image, please wait...')
            window.setTimeout(MeasureConnectionSpeed, 1)
        }

        if (window.addEventListener) {
            window.addEventListener('load', InitiateSpeedDetection, false)
        } else if (window.attachEvent) {
            window.attachEvent('onload', InitiateSpeedDetection)
        }

        function MeasureConnectionSpeed() {
            let startTime:number
            let endTime:number
            let download = new Image()
            download.onload = function () {
                endTime = (new Date()).getTime();
                showResults();
            }

            download.onerror = function () {
                ShowProgressMessage('Invalid image, or error downloading');
            }

            startTime = (new Date()).getTime();
            let cacheBuster = '?nnn=' + startTime;
            download.src = imageAddr + cacheBuster;

            function showResults() {
                let duration = (endTime - startTime) / 1000;
                let bitsLoaded = downloadSize * 8;
                let speedBps: any = (bitsLoaded / duration).toFixed(2);
                let speedKbps: any = (speedBps / 1024).toFixed(2);
                let speedMbps = (speedKbps / 1024).toFixed(2);
                ShowProgressMessage([
                    'Your connection speed is:',
                    speedBps + ' bps',
                    speedKbps + ' kbps',
                    speedMbps + ' Mbps'
                ]);
            }
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <Button type="primary" onClick={() => setVisible(true)}>播放视频</Button>
            <VideoPlayerModal
                url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                visible={visible}
                onClose={() => setVisible(false)}
            />
            <div id="progress"></div>
        </div>
    )
}

export default Home