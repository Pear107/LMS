import React from "react";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import styles from "../../assets/scss/manage/index.module.scss";
import LabIcon from "../../assets/images/manage/lab.png";
import DeviceIcon from "../../assets/images/manage/device.png";
import NoticeIcon from "../../assets/images/manage/notice.png";
import ActivityIcon from "../../assets/images/manage/activity.png";
import OrderIcon from "../../assets/images/manage/order.png";
import ScheduleIcon from "../../assets/images/manage/schedule.png";
import UserIcon from "../../assets/images/manage/user.png";

const routes = [
  {
    name: "实验室信息管理",
    icon: LabIcon,
    url: "lab",
    color: "#1cbbb4",
  },
  {
    name: "设备信息管理",
    icon: DeviceIcon,
    url: "device",
    color: "#0081ff",
  },
  {
    name: "公告管理",
    icon: NoticeIcon,
    url: "notice",
    color: "#6739b6",
  },
  {
    name: "活动管理",
    icon: ActivityIcon,
    url: "activity",
    color: "#9c26b0",
  },
  {
    name: "实验室预定管理",
    icon: OrderIcon,
    url: "order",
    color: "#e03997",
  },
  {
    name: "课表管理",
    icon: ScheduleIcon,
    url: "schedule",
    color: "#a5673f",
  },
  {
    name: "用户管理",
    icon: UserIcon,
    url: "user",
    color: "#e54d42",
  },
];

const Index: React.FC = () => {
  return (
    <View className={styles.list}>
      {routes.map((item, key) => (
        <View
          className={styles.card}
          key={key}
          onClick={() => {
            Taro.navigateTo({
              url: item.url,
            });
          }}
          style={{
            backgroundColor: item.color,
            boxShadow: `0rpx 5rpx 15rpx -3rpx ${item.color}`,
          }}
        >
          <Image className={styles.icon} src={item.icon} />
          <Text className={styles.name}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Index;
