import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * AuthContainer – Provides a stub authentication flow (Login, Register, Biometric/2FA) with app styling.
 */
function AuthContainer() {
  const [step, setStep] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  // Change step helper
  function goTo(newStep) {
    setStep(newStep);
  }

  return (
    <div
      className="container"
      style={{
        maxWidth: 400,
        margin: "48px auto 32px auto",
        background: "var(--surface)",
        borderRadius: 14,
        boxShadow: "0 1px 9px rgba(0,0,0,0.11)",
        padding: "2.6rem 2rem 2.1rem 2rem",
        minHeight: 390,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      {/* AUTH STEPS */}
      {step === "login" && (
        <>
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.22rem",
              color: "var(--kavia-orange)",
              marginBottom: 7,
            }}
          >
            Login to OmniBook AI
          </div>
          <form
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
            onSubmit={e => { e.preventDefault(); goTo("2fa"); }}
          >
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Email
              <input
                type="email"
                value={loginData.email}
                onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-color)",
                  marginTop: 5,
                  fontSize: "1rem",
                  background: "var(--secondary-bg)",
                  color: "var(--primary-text)"
                }}
                autoFocus
                placeholder="user@email.com"
              />
            </label>
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Password
              <input
                type="password"
                value={loginData.password}
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-color)",
                  marginTop: 5,
                  fontSize: "1rem",
                  background: "var(--secondary-bg)",
                  color: "var(--primary-text)",
                }}
                placeholder="Password"
              />
            </label>
            <button
              type="submit"
              className="btn btn-large"
              style={{ marginTop: 8, fontWeight: 600 }}
            >
              Login
            </button>
          </form>
          <div
            style={{
              marginTop: 18,
              color: "var(--text-secondary)",
              fontSize: ".98rem",
              textAlign: "center",
            }}
          >
            <span>Don&apos;t have an account?{" "}</span>
            <button
              onClick={() => goTo("register")}
              style={{
                background: "none",
                color: "var(--kavia-orange)",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: ".98rem"
              }}
              type="button"
            >
              Register
            </button>
          </div>
        </>
      )}

      {step === "register" && (
        <>
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.18rem",
              color: "var(--accent)",
              marginBottom: 7,
            }}
          >
            Register for OmniBook AI
          </div>
          <form
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
            onSubmit={e => { e.preventDefault(); goTo("2fa"); }}
          >
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Full Name
              <input
                type="text"
                value={registerData.name}
                onChange={e => setRegisterData({ ...registerData, name: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-color)",
                  marginTop: 5,
                  fontSize: "1rem",
                  background: "var(--secondary-bg)",
                  color: "var(--primary-text)",
                }}
                placeholder="Your Name"
              />
            </label>
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Email
              <input
                type="email"
                value={registerData.email}
                onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-color)",
                  marginTop: 5,
                  fontSize: "1rem",
                  background: "var(--secondary-bg)",
                  color: "var(--primary-text)"
                }}
                placeholder="user@email.com"
              />
            </label>
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Password
              <input
                type="password"
                value={registerData.password}
                onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-color)",
                  marginTop: 5,
                  fontSize: "1rem",
                  background: "var(--secondary-bg)",
                  color: "var(--primary-text)"
                }}
                placeholder="Create a password"
              />
            </label>
            <button
              type="submit"
              className="btn btn-large"
              style={{ marginTop: 8, fontWeight: 600 }}
            >
              Register
            </button>
          </form>
          <div
            style={{
              marginTop: 18,
              color: "var(--text-secondary)",
              fontSize: ".98rem",
              textAlign: "center",
            }}
          >
            <span>Already have an account?{" "}</span>
            <button
              onClick={() => goTo("login")}
              style={{
                background: "none",
                color: "var(--kavia-orange)",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: ".98rem"
              }}
              type="button"
            >
              Login
            </button>
          </div>
        </>
      )}

      {step === "2fa" && (
        <>
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.17rem",
              color: "var(--kavia-orange)",
              marginBottom: 13,
              marginTop: 6,
            }}
          >
            Security Check
          </div>
          {/* 2FA/biometric stub */}
          <div style={{
            background: "var(--sidebar-bg)",
            borderRadius: 11,
            border: "1.5px solid var(--border-color)",
            margin: "0 auto 18px auto",
            padding: "28px 14px",
            textAlign: "center"
          }}>
            <div>
              <span style={{ fontSize: "2.6rem" }} role="img" aria-label="fingerprint">🔒</span>
            </div>
            <div style={{ color: "var(--primary-text)", margin: "17px 0 6px 0", fontWeight: 500 }}>
              2FA & Biometric (stub)
            </div>
            <div style={{ color: "var(--text-secondary)", marginBottom: 8 }}>
              Enter the OTP sent to your email, or tap below for biometric login.
            </div>
            <input
              type="text"
              maxLength={6}
              inputMode="numeric"
              placeholder="Enter 6-digit OTP"
              style={{
                width: 130,
                marginRight: 8,
                padding: "8px 10px",
                borderRadius: 7,
                border: "1.4px solid var(--border-color)",
                fontSize: "1.02em"
              }}
              disabled
              value="------"
              readOnly
            />
            <div>
              <button
                className="btn"
                style={{
                  background: "var(--kavia-orange)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 8,
                  margin: "14px 0 2px 0",
                  padding: "9px 30px",
                  cursor: "pointer",
                }}
                onClick={() => goTo("complete")}
              >
                Mock Verify
              </button>
            </div>
            <button
              className="btn"
              style={{
                background: "var(--secondary-bg)",
                color: "var(--kavia-orange)",
                border: "1.3px solid var(--kavia-orange)",
                fontWeight: 600,
                borderRadius: 8,
                margin: "8px 0 0 0",
                padding: "8px 20px",
                cursor: "pointer",
              }}
              type="button"
              onClick={() => goTo("complete")}
            >
              Authenticate via Biometric
            </button>
          </div>

        </>
      )}

      {step === "complete" && (
        <div style={{ textAlign: "center", padding: "35px 8px", color: "var(--primary-text)" }}>
          <div style={{
            fontSize: "2.9rem",
            color: "var(--kavia-orange)"
          }}>
            ✔️
          </div>
          <div style={{
            fontWeight: 700,
            fontSize: "1.2rem",
            marginTop: 13,
            marginBottom: 9
          }}>
            Authentication Success!
          </div>
          <div style={{
            color: "var(--text-secondary)",
            fontSize: ".99rem"
          }}>
            You&apos;re now securely logged in. Continue to explore booking or your profile.
          </div>
          <button
            className="btn btn-large"
            style={{ marginTop: 17, fontWeight: 600 }}
            onClick={() => goTo("login")}
          >
            Back to Login
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthContainer;

