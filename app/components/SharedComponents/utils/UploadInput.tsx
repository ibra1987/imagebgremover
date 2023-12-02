import { InputProps } from "@/types";

function UploadInput(props: InputProps) {
  return (
    <input
      id={props.id}
      type={props.type}
      className={props.cssClass}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default UploadInput;
