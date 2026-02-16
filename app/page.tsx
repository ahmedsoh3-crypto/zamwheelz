"use client";

import Image from "next/image";
import { useState } from "react";

type FormData = { name: string; email: string; phone: string };

function SuccessMessage() {
  return (
    <div className="success-box">
      <div className="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#5DA844" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h2 style={{ color: "#2E7D32", marginBottom: "12px", fontSize: "1.8rem" }}>Thank You!</h2>
      <p style={{ color: "#555", marginBottom: "8px", fontSize: "1rem" }}>You&apos;ve been added to our exclusive list.</p>
      <p style={{ fontSize: "0.85rem", color: "#888" }}>We will notify you the moment ZamWheelz launches!</p>
    </div>
  );
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");

      setIsSubmitted(true);
    } catch (err: any) {
      alert(err?.message || "No internet connection or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="card-container">
      <Image src="/ZamWheelz.png" alt="ZamWheelz Logo" className="app-logo" width={180} height={180} priority />

      {!isSubmitted && (
        <>
          <span className="badge">Launch Incoming</span>
          <p className="subtitle">
            The ultimate platform to buy &amp; sell cars is arriving. <strong>Join the waitlist for exclusive benefits.</strong>
          </p>

          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input className="input-field" name="name" placeholder="Full Name" value={formData.name} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="input-field" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={onChange} required />
            </div>
            <div className="input-group">
              <input className="input-field" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={onChange} required />
            </div>

            <button className="submit-btn" disabled={loading}>
              {loading ? "Securing your spot..." : "Get Early Access"}
            </button>
          </form>
        </>
      )}

      {isSubmitted && <SuccessMessage />}
    </main>
  );
}