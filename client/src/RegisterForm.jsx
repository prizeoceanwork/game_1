import { useState } from "react";
import { registerForGame } from "./api";

const RegisterForm = ({ slug }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerForGame(slug, form);
      console.log("Form submitted:", form, "for", slug);
      setMessage("Registered Successfully");
    } catch (error) {
      setMessage("Registration Failed");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register for {slug}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="tel"
          placeholder="+123456"
          value={form.phone}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default RegisterForm;
