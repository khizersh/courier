import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  addService,
  getAllService,
  editService,
  removeService,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";

const Service = () => {
  const [data, setData] = useState({
    id: "",
    service: "",
  });
  const [row, setRow] = useState([]);
  const [edit, setEdit] = useState(false);
  const onClick = () => {
    if (edit) {
      if (data.id) {
        editService(data)
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
      addService(data)
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
    removeService(m.id).then((re) => {
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
    getAllService()
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
          <div className="col-lg-12 col-12">
            <div className="form-group">
              <label>Service</label>
              <input
                className="form-control"
                placeholder="Enter Service"
                name="service"
                value={data.service}
                onChange={onChange}
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
                <th scope="col">Service</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{m.service}</td>
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

export default Service;
