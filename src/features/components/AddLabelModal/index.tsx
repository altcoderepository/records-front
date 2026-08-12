import { createLabel } from "@features/api";
import type { LabelPayload } from "@shared/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { FC } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

// TODO add notification
export const AddLabelModal: FC<Props> = ({ open, onClose }) => {
  const [form] = Form.useForm<LabelPayload>();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create-label"],
    mutationFn: createLabel,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["labels"],
      });
      onReset();
      onClose();
    },
  });

  const onHandleSubmit = () => {
    mutate(form.getFieldsValue());
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Modal title="Добавить лэйбл" open={open} onCancel={onClose} footer={null}>
      <Form
        form={form}
        name="create-label"
        onFinish={onHandleSubmit}
        onReset={onReset}
      >
        <Form.Item
          name="name"
          label="Название лейбла"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="bio"
          label="Описание лейбла"
          rules={[
            { required: true },
            { min: 15, message: "Описание должно быть не менее 15 символов" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" disabled={isPending}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form>
    </Modal>
  );
};
