import BasicButton from "@/components/admin/BasicButton";
import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();
  return pending ? (
    <div className="py-2">Updating...</div>
  ) : (
    <BasicButton type="submit">
      <div className="py-2">Update Page</div>
    </BasicButton>
  );
};
