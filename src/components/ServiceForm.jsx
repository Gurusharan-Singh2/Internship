import { useContext, useRef, useState } from "react";
import { AppStore } from "../Store/AppStore";

export const ServiceForm = ({ setList }) => {
  const { Edit, Add } = useContext(AppStore);
  const [data, setData] = useState();
  const Sname = useRef("");
  const Sdes = useRef("");
  const Snumber = useRef("");
  const btnHandle = (event) => {
    event.preventDefault();

    const name = Sname.current.value;
    const des = Sdes.current.value;
    const price = Snumber.current.value;
    if (!name || !des || !price) {
      alert("Please Fill ");
    } else {
      Add(name, des, price);

      if (Add) {
        alert("Service Added");
        Sname.current.value = "";
        Sdes.current.value = "";
        Snumber.current.value = "";
        setList("0");
        return;
      }
    }
  };
  return (
    <>
      <div className="formContainer">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Service Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              ref={Sname}
            />
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="textarea"
              className="form-control"
              id="description"
              name="description"
              ref={Sdes}
            />
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              ref={Snumber}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={btnHandle}>
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => setData("0")}
          >
            Back
          </button>
        </form>
      </div>
    </>
  );
};
