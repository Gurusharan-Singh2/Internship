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
    <div className="formContainer">
 <form onSubmit={handleSubmit}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name :</label>
    <div class="col-sm-10">
      <input type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
         required class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Description:</label>
    <div class="col-sm-10">
      <input  type="text"
          name="des"
          value={formData.des}
          onChange={handleChange}
          required class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPrice" class="col-sm-2 col-form-label">Price:</label>
    <div class="col-sm-10">
      <input  type="number"
         
         name="price"
         value={formData.price}
         onChange={handleChange}
         requiredclass="form-control" id="inputPrice"/>
    </div>
  </div>
 

  <button type="submit" class="btn btn-primary">Edit</button>
</form>
    </div>




    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Name:</label>
    //     <input
    //       type="text"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>Description:</label>
    //     <input
         
    //     />
    //   </div>
    //   <div>
    //     <label>Price:</label>
    //     <input
          
    //     />
    //   </div>
    //   <button type="submit">Save</button>
    // </form>
  );
};
