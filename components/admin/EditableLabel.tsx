import TrashIcon from "../TrashIcon";
import BasicButton from "./BasicButton";

export default function EditableLabel({
  htmlFor,
  name,
  removeCb,
  children,
}: {
  htmlFor: string;
  name: string;
  removeCb: () => void;
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="flex justify-between items-top w-full mb-5">
      <label
        htmlFor={htmlFor}
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        {name}
      </label>
      {children}
      <BasicButton onClick={removeCb}>
        <TrashIcon width={24} height={24} />
      </BasicButton>
    </div>
  );
}
