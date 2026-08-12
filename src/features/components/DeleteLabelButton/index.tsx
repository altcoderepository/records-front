import { Button, Popconfirm, Tooltip, type PopconfirmProps } from "antd";
import type { FC } from "react";

import { DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLabel } from "../../api";
import type { Label } from "@shared";

type Props = {
  labelId: Label["id"];
};

export const DeleteLabelButton: FC<Props> = ({ labelId }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["delete-label"],
    mutationFn: deleteLabel,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["labels"],
      });
    },
  });

  const confirm: PopconfirmProps["onConfirm"] = () => {
    mutate(labelId);
  };

  return (
    <Popconfirm
      title="Удаление записи"
      description="Вы уверены, что хотите удалить эту запись?"
      onConfirm={confirm}
      okText="Да"
      cancelText="Нет"
    >
      <Tooltip title="Удалить" color="white">
        <Button danger type="primary" icon={<DeleteOutlined />} />
      </Tooltip>
    </Popconfirm>
  );
};
