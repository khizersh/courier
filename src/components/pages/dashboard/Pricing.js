import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  getAllPrice,
  addPrice,
  editPrice,
  removePrice,
  getAllCity,
  getAllService,
  getAllWeight,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";

const Pricing = () => {
  const [data, setData] = useState({
    id: "",
    city: "",
    cityId: "",
    service: "",
    serviceId: "",
    weight: "",
    weightId: "",
    rate: "",
  });
  const [row, setRow] = useState([]);
  const [city, setCity] = useState([]);
  const [service, setService] = useState([]);
  const [weight, setWeight] = useState([]);
  const [edit, setEdit] = useState(false);

  const onClick = () => {
    if (edit) {
      if (data.id) {
        editPrice(data)
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
      if (!data.serviceId || !data.weightId || !data.cityId || !data.rate) {
        return swal({
          title: "Enter all fields!",
          timer: 2500,
          icon: "error",
        });
      }
      addPrice(data)
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
    setData({ ...data, rate: e.target.value });
  };
  const onClickEdit = (m) => {
    setEdit(true);
    setData(m);
  };

  const onClickRemove = (m) => {
    swal({
      title: "Are you sure to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removePrice(m.id).then((re) => {
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
      }
    });
  };

  const onChangeService = (m) => {
    setData({ ...data, serviceId: m.target.value });
  };
  const onChangeCity = (m) => {
    setData({ ...data, cityId: m.target.value });
  };
  const onChangeWeight = (m) => {
    setData({ ...data, weightId: m.target.value });
  };

  useEffect(() => {
    getAllPrice()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setRow(r.data.data);
        }
      })
      .catch((e) => console.log(e));

    //   get all city
    getAllCity()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setCity(r.data.data);
        }
      })
      .catch((e) => console.log(e));

    //   get all service
    getAllService()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setService(r.data.data);
        }
      })
      .catch((e) => console.log(e));

    getAllWeight()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setWeight(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <CardLayout>
        <div className="row">
          {/* service */}
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Select Service</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  onChange={onChangeService}
                >
                  <option>Select Service</option>
                  {service.length &&
                    service.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.service}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Select City</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  onChange={onChangeCity}
                >
                  <option>Select City</option>
                  {city.length &&
                    city.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.city}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Select Weight</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  onChange={onChangeWeight}
                >
                  <option>Select Weight</option>
                  {weight.length &&
                    weight.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.weight}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label>Price</label>
              <input
                className="form-control"
                placeholder="Enter Price"
                type="number"
                value={data.rate}
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
                <th scope="col">Service</th>
                <th scope="col">City</th>
                <th scope="col">Weight (Kg)</th>
                <th scope="col">Price (Rs)</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{m.service}</td>
                    <td>{m.city}</td>
                    <td>{m.weight}</td>
                    <td>{m.rate} </td>
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

export default Pricing;
