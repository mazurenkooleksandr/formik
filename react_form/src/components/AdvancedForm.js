import { Form, Formik, Field } from "formik";
import CustomInput from "./CustomInput";

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: "jared" }}>
      {(props) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <Field type="text" name="name" placeholder="Name" />
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
