import { Text, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
   
  });

  const gopage = () => {
    //  跳转https://juejin.cn/  https://juejin.cn/post/7454170332712386572

    Taro.navigateTo({
      url: "/components/webView/index?url=https%3A%2F%2Fjuejin.cn/post/7454170332712386572", // URL 需要进行编码
    });
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View onClick={gopage}>go</View>
    </View>
  );
}
