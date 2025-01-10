import { WebView } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'

const WebViewPage = () => {
  const router = useRouter()
  const { url } = router.params // 获取跳转传递的 URL 参数
  return <WebView src={decodeURIComponent(url!)} />
}

export default WebViewPage