import { BaseEventOrig, View, Button } from "@tarojs/components";
import Table, { AnyOpt, IColumns } from "taro3-table";
import React, { useEffect, useState } from "react";

import { Form, FormInput, FormItem } from "../../components/form";

type dataType = {
  id: string;
  name: string;
  introduce: string;
  buyTime: string;
  number: string;
  img: string;
  attention: string;
  createTime: string;
  creator: string;
};

const Devices: React.FC = () => {
  const dataSource: dataType[] = [
    {
      id: "1",
      name: "test",
      introduce: "test",
      buyTime: "test",
      number: "test",
      img: "test",
      attention: "test",
      createTime: "test",
      creator: "test",
    },
  ];

  const columns: IColumns[] = [
    {
      title: "设备名称",
      dataIndex: "name",
      fixed: "left",
      sort: true,
      expandable: true,
      width: 50,
    },
    {
      title: "用途简介",
      dataIndex: "introduce",
      width: 50,
    },
    {
      title: "购买时间",
      dataIndex: "buyTime",
      width: 50,
    },
    {
      title: "设备编号",
      dataIndex: "number",
      width: 50,
    },
    {
      title: "图片",
      dataIndex: "img",
      width: 50,
    },
    {
      title: "注意事项",
      dataIndex: "attention",
      width: 50,
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      width: 50,
    },
    {
      title: "创建人",
      dataIndex: "creator",
      width: 50,
    },
    {
      title: "操作",
      dataIndex: "id",
      width: 50,
      render(text, record: dataType, index) {
        return (
          <View className="btn-wrap">
            <Button
              className="btn bg-green"
              onClick={(ev: BaseEventOrig) => {
                ev.preventDefault();
                setIndex(() => index);
                setRecord(() => record);
                setShowForm(true);
              }}
            >
              修改
            </Button>
            <Button className="btn bg-red">删除</Button>
          </View>
        );
      },
    },
  ];
  useEffect(() => {}, []);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [Index, setIndex] = useState<number>();
  const [record, setRecord] = useState<dataType>({
    id: "",
    name: "",
    introduce: "",
    buyTime: "",
    number: "",
    img: "",
    attention: "",
    createTime: "",
    creator: "",
  });
  return (
    <>
      <View className={`cover ${showForm ? "" : "hidden"}`}>
        <Form
          onOk={(values) => {
            setShowForm(false);
            console.log(values);
          }}
          onCancel={() => {
            setShowForm(false);
            setRecord(() => {
              for (const key in record) {
                record[key] = "";
              }
              return record;
            });
          }}
        >
          <FormItem label="设备名称">
            <FormInput value={record.name} />
          </FormItem>
          <FormItem label="用途简介">
            <FormInput value={record.id} />
          </FormItem>
          <FormItem label="购买时间">
            <FormInput value={record.buyTime} />
          </FormItem>
          <FormItem label="设备编号">
            <FormInput value={record.number} />
          </FormItem>
          <FormItem label="图片">
            <FormInput value={record.img} />
          </FormItem>
          <FormItem label="注意事项">
            <FormInput value={record.attention} />
          </FormItem>
          <FormItem label="创建时间">
            <FormInput value={record.createTime} />
          </FormItem>
          <FormItem label="创建人">
            <FormInput value={record.creator} />
          </FormItem>
        </Form>
      </View>
      <View>
        <Table
          className="w-vw-max"
          columns={columns}
          dataSource={dataSource}
          scroll={{
            x: true,
            y: true,
          }}
          rowKey="id"
        />
      </View>
    </>
  );
};

export default Devices;
