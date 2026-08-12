import { Button, Table, type TableProps, Typography } from "antd";

import { type FC, useState } from "react";

import type { Labels } from "@shared/types";

import { AddLabelModal } from "../AddLabelModal";
import { DeleteLabelButton } from "../DeleteLabelButton";
import { EditLabelButton } from "../EditLabelButton";

interface DataType {
  key: number;
  name: string;
  bio: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Заголовок",
    dataIndex: "name",
  },
  {
    title: "Описание",
    dataIndex: "bio",
  },
  {
    title: "Действия",
    dataIndex: "actions",
    render: (_, record) => (
      <>
        <EditLabelButton labelId={record.key} />
        <DeleteLabelButton labelId={record.key} />
      </>
    ),
  },
];

type Props = {
  data: Labels;
};

export const ViewData: FC<Props> = ({ data }) => {
  const tableData: DataType[] = data.map((item) => ({
    key: item.id,
    name: item.name,
    bio: item.bio,
  }));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Typography.Title level={2}>Редактирование сущностей</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        bordered
        title={() => "Лэйбл"}
      />
      <Button type="primary" onClick={showModal}>
        Добавить
      </Button>
      <AddLabelModal open={isModalOpen} onClose={handleClose} />
    </>
  );
};
