import {
  View,
  Button,
  Label,
  Input,
  Text,
  ITouchEvent,
  BaseEventOrig,
} from "@tarojs/components";
import { InputProps } from "@tarojs/components/types/Input";
import React, { ReactElement, useState, useEffect } from "react";

import styles from "./index.module.scss";

const Form: React.FC<{
  onOk: Function;
  onCancel: Function;
  children?: ReactElement[];
}> = ({ onOk, onCancel, children }) => {
  const [values, setValues] = useState({});
  const getValues = (key: string, value: any) => {
    setValues((o: { [key: string]: any }) => {
      o[key] = value;
      return o;
    });
  };
  return (
    <View className={styles.form}>
      {children?.map((value, index) => {
        return <RealItem key={index} {...value.props} getValues={getValues} />;
      })}
      <View className={styles.btnWrap}>
        <Button
          className={`${styles.btn} ${styles.bgGreen}`}
          onClick={(ev: ITouchEvent) => {
            ev.preventDefault();
            onOk(values);
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
  );
};

const FormItem: React.FC<{ label: string; children: ReactElement }> = () => {
  return <></>;
};

const RealItem: React.FC<{
  label: string;
  children: ReactElement;
  getValues: (key: string, value: string) => void;
}> = ({ label, children, getValues }) => {
  const getValue = (value: string) => {
    getValues(label, value);
  };

  return (
    <Label className={styles.label}>
      <Text>{label}</Text>
      <RealInput {...children.props} getValue={getValue} />
    </Label>
  );
};

const FormInput: React.FC<{ value?: string }> = () => {
  return <></>;
};

const RealInput: React.FC<{
  getValue: (value: string) => void;
  value: string;
}> = ({ getValue, value = "" }) => {
  useEffect(() => {
    getValue(value);
  }, [getValue, value]);

  return (
    <Input
      value={value}
      className={styles.input}
      onInput={(ev: BaseEventOrig<InputProps.inputEventDetail>) => {
        ev.preventDefault();
        getValue(ev.detail.value);
      }}
    />
  );
};

export { Form, FormItem, FormInput };
