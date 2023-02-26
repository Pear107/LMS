import { BaseEventOrig, View, Button } from "@tarojs/components";
import Table, { AnyOpt, IColumns } from "taro3-table";
import React, { useEffect, useState } from "react";

import { Form, FormInput, FormItem } from "../../components/form";

const Order: React.FC = () => {
  const dataSource: AnyOpt[] = [
    {
      id: "1",
      name: "test",
      local: "test",
      introduce: "test",
      admin: "test",
      createTime: "test",
      creator: "test",
    },
    {
      id: "1",
      name: "测试",
      local: "测试",
      introduce: "测试",
      admin: "测试",
      createTime: "测试",
      creator: "测试",
    },
  ];

  const columns: IColumns[] = [
    {
      title: "实验室名称",
      dataIndex: "name",
      fixed: "left",
      sort: true,
      expandable: true,
      width: 50,
    },
    {
      title: "所在教学楼",
      dataIndex: "local",
      width: 50,
    },
    {
      title: "实验室简介",
      dataIndex: "introduce",
      width: 50,
    },
    {
      title: "管理人",
      dataIndex: "admin",
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
      render(text, record, index) {
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
  const [record, setRecord] = useState<{ [key: string]: any }>({});
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
          <FormItem label="实验室名称">
            <FormInput value={record["name"]} />
          </FormItem>
          <FormItem label="所在教学楼">
            <FormInput value={record["local"]} />
          </FormItem>
          <FormItem label="实验室简介">
            <FormInput value={record["introduce"]} />
          </FormItem>
          <FormItem label="管理人">
            <FormInput value={record["admin"]} />
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

export default Order;
