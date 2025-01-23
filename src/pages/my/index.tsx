import { Text, View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'

export default function My () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const toMyBlog = () => {
    Taro.navigateTo({
          url: '/components/webView/index?url=https://blog.lsxbak.cn/', // URL 需要进行编码
        });
  }
  return (
    <View className='index'>
      <Text>my</Text>
      <Text onClick={toMyBlog}>我的博客</Text>
      <Text onClick={toMyBlog}>我的面试题  语雀</Text>

      <Text>我的收藏   登录后建设  </Text>
    </View>
  )
}
