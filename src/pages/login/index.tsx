import { Form } from "@tarojs/components";
import { View } from "antd-mobile";
import Input from "antd-mobile/lib/input-item/Input";
import React from "react";

const Index: React.FC = () => {
  return (
    <View>
      <Form>
        <Input />
        <Input />
      </Form>
    </View>
  );
};

export default Index;
