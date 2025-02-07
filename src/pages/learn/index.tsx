import { request } from "@/api";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";
import { tabs, tabsKey } from "./options";

export default function Learn() {
  const [interviewArticleList, setInterviewArticleList] = useState([]);
  const [selectTabs, setSelectTabs] = useState(tabsKey.hot);


  const selectTabsFn = (val) => {
    setSelectTabs(val.key);
    request("/article/learnData", "GET", { type: val.key }).then((res) => {
      console.log(res, 5565656565);
      setInterviewArticleList(res.data);
    });
  };

  const viewContent = (id) => {
    Taro.navigateTo({
      url: `/components/webView/index?url=https%3A%2F%2Fjuejin.cn/post/${id}`, // URL 需要进行编码
    });
  };

  useEffect(() => {
    selectTabsFn(tabs[0]);
  }, []);

  return (
    <View className="learn">
      <View className="tabs">
        {tabs.map((item, index) => {
          return (
            <View
              key={index}
              onClick={() => selectTabsFn(item)}
              className={selectTabs === item.key ? "selected tab" : "tab"}
            >
              {item.title}
            </View>
          );
        })}
      </View>
      <View className="container">
        <View className="list">
          {interviewArticleList.map((item, index) => {
            return (
              <View key={index} className="item">
                <Text
                  className="title"
                  onClick={() => viewContent(item.content.content_id)}
                >
                  <Text className="order">{`${index + 1}. `}</Text>
                  <Text> {item.content.title}</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
