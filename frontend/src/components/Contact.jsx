import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.fname.trim()) return "First name is required";
    if (!form.lname.trim()) return "Last name is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.phone.trim()) return "Phone number is required";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }
    alert("Thanks! Your message was submitted.");
    setForm({ fname: "", lname: "", email: "", phone: "", comments: "" });
  };

  return (
    <div className="container">
      <h1 className="contact-title">Contact Us</h1>

      <form
        className="form"
        id="contact-form"
        name="myForm"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="field">
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            type="text"
            placeholder="First name"
          />
        </div>

        <div className="field">
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            name="lname"
            value={form.lname}
            onChange={handleChange}
            type="text"
            placeholder="Last name"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="you@email.com"
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="123-456-7890"
            pattern="\d{3}-\d{3}-\d{4}"
          />
        </div>

        <div className="field">
          <label htmlFor="comments">Message</label>
          <textarea
            id="comments"
            name="comments"
            value={form.comments}
            onChange={handleChange}
            placeholder="How can we help?"
          />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
