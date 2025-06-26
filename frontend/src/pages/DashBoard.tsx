import { useEffect, useState } from "react";
import "../css/DashBoard.css";
import type { ProfileData } from "../types/type";
import { BASE_URL } from "../configs/common";

const DashBoard = () => {
  const [formData, setFormData] = useState<ProfileData>({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    city: "",
    pincode: "",
    name: "",
    picture: "",
  });

  // Fetch user data from CRUDCRUD
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUserEmail = localStorage.getItem("userEmail");
        if (!currentUserEmail) return;

        const response = await fetch(`${BASE_URL}/users`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();

        const userData = data.find((user: ProfileData) => {
          return user.email === currentUserEmail;
        });

        if (userData) {
          setFormData(userData);
          console.log("User data:", userData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "pincode" ? (value === "" ? null : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/user/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to trigger workflow");

      const result = await response.json();
      console.log("Workflow started:", result);
      alert("Profile update initiated successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="dashboard two-column">
      {/* Left Card - Profile Info */}
      <div className="card info-card">
        <div className="profile-header">
          <img
            src={
              formData.picture?.trim()
                ? formData.picture
                : "https://placehold.co/100"
            }
            alt="avatar"
            className="avatar"
            referrerPolicy="no-referrer"
          />
          <div className="user-info">
            <h1 className="user-name">
              {formData.name || `${formData.first_name} ${formData.last_name}`}
            </h1>
            <p className="user-email">{formData.email}</p>
          </div>
        </div>

        <div className="info-details">
          <p>
            <strong>Phone:</strong> {formData.phone_number}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>Pincode:</strong> {formData.pincode ?? "—"}
          </p>
        </div>
      </div>

      {/* Right Card - Edit Form */}
      <div className="card form-card">
        <form className="profile-form" onSubmit={handleSubmit}>
          {[
            { label: "First Name", name: "first_name" },
            { label: "Last Name", name: "last_name" },
            { label: "Phone", name: "phone_number" },
            { label: "City", name: "city" },
            { label: "Pincode", name: "pincode" },
          ].map(({ label, name }) => (
            <div className="form-group" key={name}>
              <label className="form-label">{label}</label>
              <input
                type={name === "pincode" ? "number" : "text"}
                className="form-input"
                placeholder={label}
                name={name}
                value={
                  formData[name as keyof ProfileData] !== null
                    ? String(formData[name as keyof ProfileData])
                    : ""
                }
                onChange={handleChange}
              />
            </div>
          ))}

          <button type="submit" className="save-btn">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashBoard;
