import React, { Children, ReactDOM, useState } from "react";
import {
  BaseEventOrig,
  Button,
  View,
  Text,
  ITouchEvent,
} from "@tarojs/components";

import styles from "./index.module.scss";

const Modal: React.FC<{
  open: boolean;
  title?: string;
  onOk: Function;
  onCancel: Function;
  children?: ChildNode;
}> = ({
  open,
  title = "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
  onOk,
  onCancel,
  children,
}) => {
  return (
    <View
      className={`${styles.cover} ${open ? "" : styles.hidden}`}
      onClick={(ev: BaseEventOrig) => {
        ev.preventDefault();
        onCancel();
      }}
    >
      <View className={styles.modal}>
        <View className={styles.title}>{title}</View>
        <View>{children ? children : ""}</View>
        <View className={styles.btnWrap}>
          <Button
            className={`${styles.btn} ${styles.bgGreen}`}
            onClick={(ev: ITouchEvent) => {
              ev.preventDefault();
              onOk();
            }}
          >
            确认
          </Button>
          <Button
            className={`${styles.btn} ${styles.bgRed}`}
            onClick={(ev: ITouchEvent) => {
              ev.preventDefault();
              onCancel();
            }}
          >
            取消
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Modal;
