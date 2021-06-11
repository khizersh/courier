import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  addWeight,
  getAllWeight,
  editWeight,
  removeWeight,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";

const Weight = () => {

  const [data, setData] = useState({
    id: "",
    startWeight: 0,
    endWeight: 0,
    defaultCheck: false,
    defaultWeight: 0,
  });
  const [row, setRow] = useState([]);
  const [edit, setEdit] = useState(false);

  const onClick = () => {
    console.log("data ", data);
    if (+data.startWeight > +data.endWeight) {
      return swal({ title: "Invalid number", icon: "error", timer: 2500 });
    }
    if (edit) {
      if (data.id) {
        editWeight(data)
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
      addWeight(data)
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
  const onChangeDefault = (e) => {
    setData({ ...data, defaultCheck: !data.defaultCheck });
  };
  const onClickEdit = (m) => {
    setEdit(true);
    setData(m);
  };

  const onClickRemove = (m) => {
    removeWeight(m.id).then((re) => {
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
    getAllWeight()
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
              <label>Start Weight</label>
              <input
                className="form-control"
                placeholder="Enter weight"
                type="number"
                name="startWeight"
                value={data.startWeight}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Start Weight</label>
              <input
                className="form-control"
                placeholder="Enter weight"
                type="number"
                name="endWeight"
                value={data.endWeight}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div class="form-check mt-5">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                onChange={onChangeDefault}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Default Weight
              </label>
            </div>
          </div>
          {data && data.defaultCheck ? (
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Default Weight</label>
                <input
                  className="form-control"
                  placeholder="Enter weight"
                  type="number"
                  name="defaultWeight"
                  value={data.defaultWeight}
                  onChange={onChange}
                />
              </div>
            </div>
          ) : null}

          <div className="col-12 text-center">
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
                <th scope="col">Start Weight</th>
                <th scope="col">End Weight</th>
                <th scope="col">Default</th>
                <th scope="col">Default Weight</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{m.startWeight ? m.startWeight  : m.startWeight == 0 ? "0" : "--"}</td>
                    <td>{m.endWeight || "--"}</td>
                    <td>{m.defaultCheck ? "Yes" : "No" }</td>
                    <td>{m.defaultWeight || "--"}</td>
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

export default Weight;
