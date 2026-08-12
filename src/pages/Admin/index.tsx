import { useQuery } from "@tanstack/react-query";

import { getAllLabels } from "@features/api";
import { ViewData } from "@features/components";

export const Admin = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: ["labels"],
    queryFn: getAllLabels,
    retry: false,
    staleTime: 1000,
  });

  if (isPending) {
    return <div>Pending...</div>;
  }
  if (isError) {
    return <div>Server error!</div>;
  }
  if (data) {
    return <ViewData data={data} />;
  }
};
