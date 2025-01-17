import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name is too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number is too long")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: Date.now(),
        name: values.name,
        number: values.number,
      })
    );
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
