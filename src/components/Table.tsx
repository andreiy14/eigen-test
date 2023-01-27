import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import { DataArr } from "../interfaces";

type DataType = {
  data: [];
  action: Function;
};

const Tables = ({ data, action }: DataType) => {
  const dataTable: DataArr[] = data?.map((item: any, index: number) => ({
    ...item,
    id: index + 1,
  }));

  const columns: ColumnsType<DataArr> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (text) => <span>{text || "-"}</span>,
    },

    {
      title: "Published At",
      dataIndex: "publishedAt",
      key: "publishedAt",
      render: (text) => <span> {moment(text || "").format("DD-MM-YYYY")}</span>,
    },
    {
      title: "Action",
      render: (text) => (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            action(text);
          }}
        >
          Details
        </button>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "72rem",
      }}
    >
      <Table columns={columns} dataSource={dataTable} />
    </div>
  );
};

export default Tables;
