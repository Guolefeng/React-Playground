import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/styles/index.less'
import { ConfigProvider, Spin, message } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { RecoilRoot } from 'recoil'
import { DebugObserver } from '@/store/debug'
import App from './App'
import reportWebVitals from './reportWebVitals'

const { Suspense } = React

message.config({
    maxCount: 1,
})

ReactDOM.render(
    <Suspense fallback={<Spin size="large" />}>
        <ConfigProvider locale={zhCN} >
            <RecoilRoot>
                <DebugObserver />
                <App />
            </RecoilRoot>
        </ConfigProvider>
    </Suspense>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
