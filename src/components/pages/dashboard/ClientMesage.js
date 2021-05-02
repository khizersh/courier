import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  addMessage,
  getAllMessage,
  changeStatus,
  removeMessage,
} from "../../data/httpService";
import CardLayout from "../../modules/dashboard/CardLayout";
import MessageModal from "../../modules/dashboard/MessageModal";

const ClientMessage = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [row, setRow] = useState([]);
  const [modal, setModal] = useState(false);
  const [singleData, setsingleData] = useState(null);

  const onClick = () => {
    addMessage(data)
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
  };

  const onClickEdit = (m) => {
    if (m.status == "Done") {
      return swal({
        title: "This message is already Done!",
        timer: 2500,
        icon: "warning",
      });
    }
    setData(m);
    changeStatus(m).then((re) => {
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
          icon: "error",
        });
      }
    });
  };

  const onClickRemove = (m) => {
    removeMessage(m.id).then((re) => {
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
          icon: "error",
        });
      }
    });
  };

  const setToggle = () => {
    setModal(!modal);
  };
  const onClickMessage = (m) => {
    console.log(m);
    setsingleData(m);
    setModal(!modal);
  };

  useEffect(() => {
    getAllMessage()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setRow(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {modal && (
        <MessageModal open={modal} setOpen={setToggle} data={singleData} />
      )}
      <CardLayout>
        <div className="mt-3">
          <table className="table table-sm table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col">Full name</th>
                <th scope="col">Email address</th>
                <th scope="col">Contact number</th>
                <th scope="col">Message</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.length &&
                row.map((m, i) => (
                  <tr key={i} className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{m.name}</td>
                    <td>{m.email}</td>
                    <td>{m.contact}</td>
                    <td>{m.message.slice(0, 30)}</td>
                    <td>
                      <span
                        class={`badge badge-${
                          m.status == "Pending" ? "primary" : "success"
                        }`}
                      >
                        {m.status}
                      </span>{" "}
                    </td>
                    <td className="">
                      <a
                        className="pl-3 text-primary"
                        onClick={() => onClickEdit(m)}
                        style={{ cursor: "pointer" }}
                      >
                        Change Status
                      </a>
                      <a
                        className="pl-3 text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickMessage(m)}
                      >
                        View Detail
                      </a>
                      <a
                        className="pl-3 text-danger"
                        style={{ cursor: "pointer" }}
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

export default ClientMessage;
