export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/learn/index",
    "pages/encourage/index",
    "pages/my/index",
    "components/webView/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "",
        selectedIconPath: "",
      },
      {
        pagePath: "pages/learn/index",
        text: "学习",
        iconPath: "",
        selectedIconPath: "",
      },
      {
        pagePath: "pages/encourage/index",
        text: "鸡汤",
        iconPath: "",
        selectedIconPath: "",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "",
        selectedIconPath: "",
      },
    ],
  },
});
