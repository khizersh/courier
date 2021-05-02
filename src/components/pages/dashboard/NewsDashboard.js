import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  addNews,
  getAllNews,
  editNews,
  removeNews,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";

const NewsDashboard = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [row, setRow] = useState([]);
  const [edit, setEdit] = useState(false);
  const onClick = () => {
    if (data.description && data.description.length > 245) {
      return swal({
        title: "Description limit is 255 character",
        timer: 2500,
        icon: "error",
      });
    }

    if (edit) {
      if (data.id) {
        editNews(data)
          .then((res) => {
            if (res) {
              if (res.data.statusCode == 1) {
                return swal({
                  title: res.data.message,
                  timer: 2500,
                  icon: "success",
                }).then((e) => window.location.reload());
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
      } else {
        swal({ title: "Select please!", timer: 2500, icon: "error" });
      }
    } else {
      addNews(data)
        .then((res) => {
          if (res) {
            if (res.data.statusCode == 1) {
              return swal({
                title: res.data.message,
                timer: 2500,
                icon: "success",
              }).then((e) => window.location.reload());
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
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onClickEdit = (m) => {
    setEdit(true);
    setData(m);
  };

  const onClickRemove = (m) => {
    removeNews(m.id).then((re) => {
      if (re) {
        if (re.data && re.data.statusCode == 1) {
          return swal({
            title: re.data.message,
            timer: 2500,
            icon: "success",
          }).then((e) => window.location.reload());
        }
      } else {
        return swal({
          title: re.data.message,
          timer: 2500,
          icon: "erro",
        });
      }
    });
  };
  useEffect(() => {
    getAllNews()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setRow(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <CardLayout>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>News Title</label>
              <input
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={data.title}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Subtitle</label>
              <input
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={data.description}
                onChange={onChange}
              />
            </div>
          </div>
          <div className=" col-12 text-center">
            <button type="submit" className="btn" onClick={onClick}>
              Submit
            </button>
          </div>
        </div>
        {/* table */}
        <div className="mt-3">
          <table className="table table-sm table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col">News Title</th>
                <th scope="col">News Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{m.title}</td>
                    <td>{m.description}</td>
                    <td className="">
                      <a
                        className="pl-3 text-primary"
                        onClick={() => onClickEdit(m)}
                      >
                        Edit
                      </a>
                      <a
                        className="pl-3 text-danger"
                        onClick={() => onClickRemove(m)}
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </CardLayout>
    </div>
  );
};

export default NewsDashboard;
