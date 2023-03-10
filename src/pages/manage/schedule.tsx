import { BaseEventOrig, View, Button } from "@tarojs/components";
import Table, { AnyOpt, IColumns } from "taro3-table";
import React, { useEffect, useState } from "react";

import { Form, FormInput, FormItem } from "../../components/form";

type dataType = {
  id: string;
  name: string;
  period: string;
  teacher: string;
  faculty: string;
  grade: string;
  class: string;
  img: string;
  createTime: string;
  creator: string;
};

const Schedule: React.FC = () => {
  const dataSource: dataType[] = [
    {
      id: "1",
      name: "test",
      period: "test",
      teacher: "test",
      faculty: "test",
      grade: "",
      class: "",
      img: "",
      createTime: "test",
      creator: "test",
    },
  ];

  const columns: IColumns[] = [
    {
      title: "课程名",
      dataIndex: "name",
      fixed: "left",
      sort: true,
      expandable: true,
      width: 50,
    },
    {
      title: "第几节课",
      dataIndex: "period",
      width: 50,
    },
    {
      title: "实验室老师",
      dataIndex: "teacher",
      width: 50,
    },
    {
      title: "院系",
      dataIndex: "faculty",
      width: 50,
    },
    {
      title: "年级",
      dataIndex: "grade",
      width: 50,
    },
    {
      title: "班级",
      dataIndex: "class",
      width: 50,
    },
    {
      title: "课表图",
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
    period: "",
    teacher: "",
    faculty: "",
    grade: "",
    class: "",
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
          <FormItem label="课程名">
            <FormInput value={record.name} />
          </FormItem>
          <FormItem label="第几节课">
            <FormInput value={record.period} />
          </FormItem>
          <FormItem label="实验室老师">
            <FormInput value={record.teacher} />
          </FormItem>
          <FormItem label="院系">
            <FormInput value={record.faculty} />
          </FormItem>
          <FormItem label="年级">
            <FormInput value={record.grade} />
          </FormItem>
          <FormItem label="班级">
            <FormInput value={record.class} />
          </FormItem>
          <FormItem label="课表图">
            <FormInput value={record.img} />
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

export default Schedule;
