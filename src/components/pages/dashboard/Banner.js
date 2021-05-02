import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  addBanner,
  getAllBanner,
  editBanner,
  removeBanner,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";

const Banner = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
    url: "",
  });
  const [image, setImage] = useState(null);
  const [row, setRow] = useState([]);
  const [edit, setEdit] = useState(false);
  const onClick = () => {
    var form = new FormData();
    form.append("banner", JSON.stringify(data));
    if (edit) {
      if (data.id) {
        if (image) {
          form.append("file", image);
        }
        editBanner(form)
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
      if (!image) {
        return swal({ title: "Select image!", timer: 2500, icon: "error" });
      }
      form.append("file", image);
      addBanner(form)
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
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const onClickRemove = (m) => {
    removeBanner(m.id).then((re) => {
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
    getAllBanner()
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
              <label>Title</label>
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
              <label>Description</label>
              <input
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={data.description}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Redirect Link</label>
              <input
                className="form-control"
                placeholder="Enter Redirect Link"
                name="url"
                value={data.url}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Select Banner image</label>
              <input
                className="form-control"
                placeholder="Enter image"
                type="file"
                onChange={onChangeImage}
              />
            </div>
          </div>

          <div className=" col-lg-12 col-12 text-center">
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
                <th scope="col">Banner Title</th>
                <th scope="col">Banner Description</th>
                <th scope="col">Banner Redirect Link</th>
                <th scope="col">Banner Image</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th className="pt-4" scope="row">{i + 1}</th>
                    <td className="pt-4">{m.title}</td>
                    <td className="pt-4">{m.description}</td>
                    <td className="pt-4">{m.url}</td>
                    <td>
                      <img src={m.image} alt={m.title} width="80px" height="60px"/>
                    </td>
                    <td className="pt-4">
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

export default Banner;
