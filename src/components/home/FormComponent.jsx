import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const FormComponent = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, lastName, email, phone, subject } = formData;

    if (!name || !email || !phone || !subject || !lastName) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/saveUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, subject, lastName }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        resetForm();
        closeForm();
      } else {
        alert(`Error: ${data.error || "Something went wrong!"}`);
      }
    } catch (error) {
      alert("Error connecting to the server.");
      console.error(error);
    }
  };

  return (
    <div className="relative bg-white mt-10 mx-14 p-6 py-10 rounded shadow-md">
      <button
        onClick={() => closeForm()}
        aria-label="Close form"
        className="p-1 border flex  items-end ml-auto z-50"
      >
        <IoClose size={18} className="text-red-500" />
      </button>

      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <div className="flex-1 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 mt-1"
              placeholder="Name"
            />
          </div>
          <div className="flex-1 mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 mt-1"
              placeholder="Company/Institute"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <div className="flex-1 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 mt-1"
              placeholder="Email ID"
            />
          </div>
          <div className="flex-1 mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 mt-1"
              placeholder="Contact No."
            />
          </div>
        </div>

        <div className="flex mb-4">
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full md:w-[48%] text-left border border-gray-300 rounded px-4 py-3 mt-1"
          >
            <option value="" disabled>
              Subject
            </option>
            <option value="training">Training</option>
            <option value="consulting">Consulting</option>
            <option value="queries">LMS Queries</option>
          </select>
        </div>

        <div className="flex justify-center mt-14">
          <button
            type="submit"
            className="bg-orange-400 text-white font-bold py-3 px-10 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
