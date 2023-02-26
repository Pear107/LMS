export default {
  pages: [
    "pages/index/index",
    "pages/manage/index",
    "pages/manage/lab",
    "pages/manage/device",
    "pages/manage/notice",
    "pages/manage/activity",
    "pages/manage/order",
    "pages/manage/schedule",
    "pages/manage/user/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#a9b7b7",
    selectedColor: "#39b54a",
    borderStyle: "white",
    list: [
      {
        selectedIconPath: "assets/images/index_select.png",
        iconPath: "assets/images/index.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        selectedIconPath: "assets/images/manage_select.png",
        iconPath: "assets/images/manage.png",
        pagePath: "pages/manage/index",
        text: "管理",
      },
    ],
  },
};
