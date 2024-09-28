import { useState, useEffect, useContext } from "react";
import { AppStore } from "../Store/AppStore";

export const EditForm = ({ editingService, SeteditStart }) => {
  const [formData, setFormData] = useState({
    name: editingService?.name || "",
    des: editingService?.des || "",
    price: editingService?.price || "",
  });
  const { Edit } = useContext(AppStore);

  useEffect(() => {
    setFormData({
      name: editingService?.name || "",
      des: editingService?.des || "",
      price: editingService?.price || "",
    });
  }, [editingService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Updatedata = {
      ...editingService,
      ...formData,
    };

    Edit(Updatedata);
    SeteditStart(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="des"
          value={formData.des}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
