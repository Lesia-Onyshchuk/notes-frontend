import { Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../redux/operations";
import toast from "react-hot-toast";

export const AddModal = ({ onClick }) => {
  const dispatch = useDispatch();

  // const title = useSelector((state) => state.notes.title);
  // const content = useSelector((state) => state.notes.content);

  const initialValues = {
    title: "",
    content: "",
  };

  const handleSubmit = (values) => {
    const jsonData = {
      title: values.title,
      content: values.content,
    };

    dispatch(addNote(jsonData))
      .unwrap()
      .then(() => {
        toast.success("Successfully added a note!");
        onClick();
      })
      .catch((error) => {
        console.error("Error adding note:", error);
        toast.error("Something went wrong. Try again!", {
          duration: 2000,
          style: {
            background: "rgb(206, 84, 84)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
          },
        });
      });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <button type="button" onClick={onClick}>
            Close
          </button>
          <label htmlFor="title" />
          <Field id="title" type="text" name="title" />
          <label htmlFor="content" />
          <Field as="textarea" id="content" name="content" />
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  );
};
