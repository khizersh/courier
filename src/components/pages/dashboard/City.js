import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  addCity,
  editCity,
  removeCity,
  getAllCity,
  getAllzones,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";

const City = () => {
  const [data, setData] = useState({
    id: "",
    city: "",
    cityId: "",
    zone: "",
    zoneId: "",
  });
  const [row, setRow] = useState([]);
  const [zone, setZone] = useState([]);
  const [edit, setEdit] = useState(false);

  const onClick = () => {
    if (edit) {
      if (data.id) {
        editCity(data)
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
      if (!data.zoneId) {
        return swal({
          title: "please select zone",
          timer: 2500,
          icon: "error",
        });
      }
      addCity(data)
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
    removeCity(m.id).then((re) => {
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

  const onChangeZone = (m) => {
    setData({ ...data, zoneId: m.target.value });
  };



  
  useEffect(() => {
    getAllCity()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setRow(r.data.data);
        }
      })
      .catch((e) => console.log(e));

    getAllzones()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setZone(r.data.data);
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
              <label>City</label>
              <input
                className="form-control"
                placeholder="Enter City"
                name="city"
                value={data.city}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Select Zone</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  onChange={onChangeZone}
                >
                  <option>Select Zone</option>
                  {zone.length &&
                    zone.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.zone}
                      </option>
                    ))}
                </select>
              </div>
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
                <th scope="col">City</th>
                <th scope="col">Zone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{m.city}</td>
                    <td>{m.zone}</td>
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

export default City;
