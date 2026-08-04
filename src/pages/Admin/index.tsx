import { getAllLabels } from "@features";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const Admin = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["labels"], queryFn: getAllLabels });

  return (
    <div>
      Hello from Admin!{" "}
      {query.data?.map((label) => (
        <div key={label.id}>{label.name}</div>
      ))}
    </div>
  );
};
