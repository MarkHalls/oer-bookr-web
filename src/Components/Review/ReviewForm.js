import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ReviewForm = ({ values, touched, errors }) => {
  if (!values.username) {
    return <p>You must be logged in to submit a review.</p>;
  }

  return (
    <Form>
      <Field
        component="textarea"
        name="review"
        placeholder="Review"
        value={values.review}
      />
      {touched.review && errors.review && <p>{errors.review}</p>}

      <button type="submit">Submit Review</button>
    </Form>
  );
};

const FormikReviewForm = withFormik({
  mapPropsToValues({ review }) {
    return {
      username: localStorage.getItem("username") || null,
      review: review || ""
    };
  },

  validationSchema: Yup.object().shape({
    review: Yup.string().required("Review can't be empty")
  }),

  handleSubmit({ username, review }, { props }) {
    console.log(props);
    axios
      .post(
        `https://samirlilienfeld-oer-bookr.herokuapp.com/review/book/${props.match.params.id}`,
        {
          reviewer: username,
          review: review
        }
      )
      .then(res => {
        console.log(res);
        props.setNewReview(!props.newReview);
      });
  }
})(ReviewForm);

export default FormikReviewForm;