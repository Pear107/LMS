import { BaseEventOrig, View, Button } from "@tarojs/components";
import Table, { AnyOpt, IColumns } from "taro3-table";
import React, { useEffect, useState } from "react";

import { Form, FormInput, FormItem } from "../../components/form";

type dataType = {
  id: string;
  name: string;
  text: string;
  img: string;
  createTime: string;
  creator: string;
};

const Announcement: React.FC = () => {
  const dataSource: AnyOpt[] = [
    {
      id: "1",
      name: "test",
      text: "test",
      img: "test",
      createTime: "test",
      creator: "test",
    },
  ];

  const columns: IColumns[] = [
    {
      title: "标题",
      dataIndex: "name",
      fixed: "left",
      sort: true,
      expandable: true,
      width: 50,
    },
    {
      title: "正文",
      dataIndex: "text",
      width: 50,
    },
    {
      title: "图片",
      dataIndex: "img",
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
    text: "",
    img: "",
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
          <FormItem label="标题">
            <FormInput value={record["name"]} />
          </FormItem>
          <FormItem label="正文">
            <FormInput value={record["text"]} />
          </FormItem>
          <FormItem label="图片">
            <FormInput value={record["img"]} />
          </FormItem>
          <FormItem label="创建时间">
            <FormInput value={record["createTime"]} />
          </FormItem>
          <FormItem label="创建人">
            <FormInput value={record["creator"]} />
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

export default Announcement;
