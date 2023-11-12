interface ILabel {
  text?: string | undefined;
  errors?: any;
  htmlFor: string;
}

export default function Label({
  htmlFor,
  text = undefined,
  errors = undefined,
}: ILabel) {
  const hasError = errors !== undefined && errors[htmlFor] !== undefined;
  return (
    <label
      htmlFor={htmlFor}
      className={`${hasError ? "text-error" : "text-gray-600"} text-sm`}
    >
      {text ?? htmlFor}
    </label>
  );
}
