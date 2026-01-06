"use client";
import Image from "next/image";
import contactImg from "@/assets/img/tri/team3.JPG";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import "./ContactSectionOne.css";

export default function ContactSectionOne() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    suburb: string;
    service_type: string;
    project_details: string;
    attachment: File | null;
    client_id: number;
  }>({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service_type: "",
    project_details: "",
    attachment: null,
    client_id: 8,
  });

  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/leads";
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.suburb) newErrors.suburb = "Suburb is required";
    if (!formData.service_type)
      newErrors.service_type = "Service Type is required";
    if (!formData.project_details)
      newErrors.project_details = "Project details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});

    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("phone_number", formData.phone);
    dataToSend.append("suburb", formData.suburb);
    dataToSend.append("service_type", formData.service_type);
    dataToSend.append("project_details", formData.project_details);
    dataToSend.append("client_id", formData.client_id.toString());
    if (formData.attachment) {
      dataToSend.append("attachment", formData.attachment);
    }
    if (captchaToken) {
      dataToSend.append("g-recaptcha-response", captchaToken);
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: dataToSend,
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        else if (data.error?.message) setErrors({ submit: data.error.message });
        return;
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        suburb: "",
        service_type: "",
        project_details: "",
        attachment: null,
        client_id: 2,
      });
      setCaptchaToken("");
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="contact-section section-padding modern-section"
    >
      <div className="container">
        <div className="row align-items-stretch mt-5">
          {/* Left Image Column */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="image-container">
              <Image
                src={contactImg}
                alt="Contact Team"
                fill
                className="img-fluid"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Form Column */}
          <div className="col-lg-6">
            <div className="modern-card">
              <div className="section-header">
                <h2 className="visible-slowly-right">Request a Quote</h2>
                <p>
                  Fill out the form below and we'll get back to you with a
                  custom plan.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="modern-input-group">
                      <label className="modern-label" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="modern-input"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="error-text">{errors.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modern-input-group">
                      <label className="modern-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="modern-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="error-text">{errors.email}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="modern-input-group">
                      <label className="modern-label" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="modern-input"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <span className="error-text">{errors.phone}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modern-input-group">
                      <label className="modern-label" htmlFor="suburb">
                        Suburb
                      </label>
                      <input
                        type="text"
                        name="suburb"
                        id="suburb"
                        className="modern-input"
                        placeholder="Suburb"
                        value={formData.suburb}
                        onChange={handleChange}
                      />
                      {errors.suburb && (
                        <span className="error-text">{errors.suburb}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="modern-input-group">
                  <label className="modern-label" htmlFor="service_type">
                    Service Type
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="service_type"
                      id="service_type"
                      className="modern-select"
                      value={formData.service_type}
                      onChange={handleChange}
                    >
                      <option value="">Select Service Type</option>
                      <option value="Window replacement">
                        Window replacement
                      </option>
                      <option value="Architectural or bespoke window">
                        Architectural or bespoke window
                      </option>
                      <option value="New build">New build</option>
                      <option value="Renovation">Renovation</option>
                    </select>
                    <div
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "#666",
                      }}
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="#666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.service_type && (
                    <span className="error-text">{errors.service_type}</span>
                  )}
                </div>

                {/* <div className="modern-input-group">
                  <label className="modern-label" htmlFor="attachment">
                    Upload plans (optional)
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    id="attachment"
                    className="modern-input modern-file-input"
                    onChange={handleFileChange}
                  />
                </div> */}

                <div className="modern-input-group">
                  <label className="modern-label" htmlFor="project_details">
                    Project details
                  </label>
                  <textarea
                    name="project_details"
                    id="project_details"
                    className="modern-textarea"
                    placeholder="Tell us about what you need..."
                    value={formData.project_details}
                    onChange={handleChange}
                  />
                  {errors.project_details && (
                    <span className="error-text">{errors.project_details}</span>
                  )}
                </div>

                <div className="my-4">
                  {RECAPTCHA_SITE_KEY ? (
                    <ReCAPTCHA
                      style={{ zIndex: 10}}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setCaptchaToken(token || "")}
                    />
                  ) : (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      Recaptcha Key Missing
                    </div>
                  )}
                  {errors["g-recaptcha-response"] && (
                    <span className="error-text">
                      {errors["g-recaptcha-response"]}
                    </span>
                  )}
                </div>

                {errors.submit && (
                  <p className="error-text" style={{ fontSize: "1rem" }}>
                    {errors.submit}
                  </p>
                )}

                <div className="submit-container">
                  <button id="submit-btn" type="submit" disabled={submitting}>
                    <span>
                      {submitting ? "Sending Request..." : "Request a Quote"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
