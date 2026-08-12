import { Button, Drawer, Form, Input, Space, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState, type FC } from "react";
import type { Label } from "@shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getLabel, patchLabel } from "../../api";

type Props = {
  labelId: Label["id"];
};

export const EditLabelButton: FC<Props> = ({ labelId }) => {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const [form] = Form.useForm<Label>();

  const { data, isFetching, isError } = useQuery({
    queryKey: ["label", labelId],
    queryFn: () => getLabel(labelId),
    enabled: open,
    retry: 1,
  });

  const { mutate } = useMutation({
    mutationKey: ["update-label"],
    mutationFn: (updatedLabel: Partial<Label>) =>
      patchLabel(labelId, updatedLabel),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["labels"],
      });
      setOpen(false);
    },
  });

  const onFinish = (values: Partial<Label>) => {
    mutate(values);
  };

  return (
    <>
      <Tooltip title="Редактировать" color="white">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => setOpen(true)}
        />
      </Tooltip>
      <Drawer
        title="Редактирование записи"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => setOpen(false)}
        open={open}
      >
        {isFetching && <div>Loading...</div>}
        {isError && <div>Some error...</div>}
        {data && (
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              name: data?.name,
              bio: data?.bio,
            }}
            onFinish={onFinish}
          >
            <Form.Item name="name" label="Название лейбла">
              <Input />
            </Form.Item>
            <Form.Item name="bio" label="Описание лейбла">
              <Input.TextArea />
            </Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
              <Button onClick={() => setOpen(false)}>Отмена</Button>
            </Space>
          </Form>
        )}
      </Drawer>
    </>
  );
};
