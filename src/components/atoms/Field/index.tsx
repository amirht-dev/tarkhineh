import { InfoCircle_Outline } from "../icons/Essential/InfoCircle";
import Input from "../Input";
import { FieldProps } from "./index.types";

const Field = ({ error, wrapperClassName, ...props }: FieldProps) => {
  return (
    <div className={wrapperClassName}>
      <Input {...props} error={!!error} />
      {!!error && (
        <div className="text-status-error mt-1 flex items-center gap-1">
          <InfoCircle_Outline className="size-4" />
          <p className="text-caption-sm font-normal">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Field;
