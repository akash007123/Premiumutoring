import { useState } from "react";

function CompleteForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "India",
    termsAccepted: false,
    bio: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const generateUniqueId = () => {
    return `ID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const submittedData = { id: generateUniqueId(), ...formData };

    try {
      const response = await fetch("https://reqres.in/api/users/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: data.message, type: "success" });
        setFormData(initialState); // Reset form after successful submission
      } else {
        setMessage({ text: data.message, type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Error submitting form!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <br /><br /><br /><br /><br />
    
    <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Complete Form</h2>

      {message && (
        <div
          className={`p-2 text-center rounded-md mb-4 ${
            message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block font-medium">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Email Input */}
        <div>
          <label className="block font-medium">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Password Input */}
        <div>
          <label className="block font-medium">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Age Input */}
        <div>
          <label className="block font-medium">Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} min="18" max="99"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Gender Radio Buttons */}
        <div>
          <label className="block font-medium">Gender:</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange}
                className="mr-2" /> Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange}
                className="mr-2" /> Female
            </label>
          </div>
        </div>

        {/* Country Dropdown */}
        <div>
          <label className="block font-medium">Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div>
          <label className="flex items-center">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}
              className="mr-2" /> I accept the terms and conditions
          </label>
        </div>

        {/* Bio Textarea */}
        <div>
          <label className="block font-medium">Bio:</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} rows="3"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about yourself..." />
        </div>

        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    
    <br /><br /><br /><br /><br />
    </>
  );
}

export default CompleteForm;
