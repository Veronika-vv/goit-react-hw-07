import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().min(3).max(50).required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputGroup}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.inputGroup}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field type="text" name="number" id="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
