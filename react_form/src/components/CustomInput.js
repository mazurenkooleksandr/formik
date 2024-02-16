import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input {...props} />
    </>
  );
};

export default CustomInput;
