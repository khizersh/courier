import React, { useState } from "react";
import swal from "sweetalert";
import { addMessage } from "../../data/httpService";
import "./service.css";

const QuestionSide = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const onClick = () => {
    addMessage(data)
      .then((res) => {
        if (res) {
          if (res.data.statusCode == 1) {
            return swal({
              title: res.data.message,
              text:'We will contact you soon!',
              timer: 2500,
              icon: "success",
            }).then((e) =>
              setData({
                id: "",
                name: "",
                email: "",
                contact: "",
                message: "",
              })
            );
          } else {
            return swal({
              title: res.data.message,
              timer: 2500,
              icon: "error",
            });
          }
        }
      })
      .catch((e) => console.log(e));
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="question-section">
      <h6>Have any Question?</h6>
      <div>
        <input
          type="text"
          className="form-control"
          name="name"
          value={data.name}
          placeholder="Full Name"
          required
          onChange={onChange}
        />
        <input
          type="email"
          className="form-control"
          name="email"
          value={data.email}
          placeholder="Email"
          required
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control"
          name="contact"
          value={data.contact}
          placeholder="Phone No."
          required
          onChange={onChange}
        />
        <textarea
          name="message"
          value={data.message}
          className="form-control"
          rows="3"
          cols="15"
          required=""
          placeholder="Enter your message here."
          onChange={onChange}
        ></textarea>
        <button className="btn btn-primary" type="submit" onClick={onClick}>
          Your Question
        </button>
      </div>
    </div>
  );
};

export default QuestionSide;
