import { Text, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import "./index.less";

export default function Learn() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const gopage = () => {
    //  跳转https://juejin.cn/

   
  };

  return (
    <View className='index'>
      <Text>Learn</Text>

      {/* 跳转链接 */}
      {/* <View className='link' onClick={gopage}>
        <Text>Go to Index</Text>
      </View> */}
  
    </View>
  );
}
