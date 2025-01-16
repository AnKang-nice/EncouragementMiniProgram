import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

export default function Learn() {
  const [frontArticleList, setFrontArticleList] = useState([]);
  const [aiArticleList, setAiArticleList] = useState([]);
  const getArticle = () => {
    Taro.request({
      url: "http://localhost:3636/article/frontHot",
      method: "GET",
    }).then((res) => {
      console.log(res, 5565656565);
      setFrontArticleList(res.data.data);
    });

    Promise.all(
      [
        Taro.request({
          url: "http://localhost:3636/article/frontHot",
          method: "GET",
        }),
        Taro.request({
          url: "http://localhost:3636/article/aiHot",
          method: "GET",
        }),
      ].map((item) => item.catch((err) => err))
    ).then((res) => {
      console.log(res, 5565656565);
      setFrontArticleList(res[0].data.data);
      setAiArticleList(res[1].data.data);
    });
  };

  const viewContent = (id) => {
    Taro.navigateTo({
      url: `/components/webView/index?url=https%3A%2F%2Fjuejin.cn/post/${id}`, // URL 需要进行编码
    });
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <View className="index">
      <Text>Learn</Text>
      {frontArticleList.map((item, index) => {
        return (
          <View key={index}>
            <Text onClick={() => viewContent(item.content.content_id)}>
              {item.content.title}
            </Text>
          </View>
        );
      })}
      <Text>AI</Text>
      {aiArticleList.map((item, index) => {
        return (
          <View key={index}>
            <Text onClick={() => viewContent(item.content.content_id)}>
              {item.content.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
