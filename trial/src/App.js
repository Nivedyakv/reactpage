import React, { useState } from "react";

import './App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    class: "",
    division: "",
    gender: ""
  });  

  const [errors, setErrors] = useState({});
  const [admissionNumber, setAdmissionNumber] = useState("R-001");
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }
    
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    }

    if (!formData.class) {
      newErrors.class = "Class is required.";
    }

    if (!formData.division) {
      newErrors.division = "Division is required.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(formData);
      setAdmissionNumber(`R-${parseInt(admissionNumber.split("-")[1]) + 1}`);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Student registration Form</h1>
    
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p>{errors.dob}</p>}
      </div>

            <div>
        <label htmlFor="class">Class:</label>
        <select
          name="class"
          value={formData.class}
          onChange={handleChange}
        >
          <option value="X1">X1</option>
          <option value="X2">X2</option>
          <option value="X3">X3</option>
          <option value="X4">X4</option>
          <option value="X5">X5</option>
          <option value="X6">X6</option>
          <option value="X7">X7</option>
          <option value="X8">X8</option>
          <option value="X9">X9</option>
          <option value="X10">X10</option>
          <option value="X11">X11</option>
          <option value="X12">X12</option>
        </select>
      </div>
      <div>
        <label htmlFor="division">Division:</label>
        <select
          id="division"
          name="division"
          value={formData.division}
          onChange={handleChange}
        >
          <option value="">Select a division</option>
          <option value="A">A</option>
          <option value="B">B</option>
          
        </select>
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={formData.gender === "Other"}
          onChange={handleChange}
          
        />
       Other
        {errors.gender && <p>{errors.gender}</p>}
      </div>

      <button type="submit">Submit</button>
      {Object.keys(errors).length === 0 && <p>Admission Number: {admissionNumber}</p>}
      
    </form>
    </>
  );
};

export default Form;

