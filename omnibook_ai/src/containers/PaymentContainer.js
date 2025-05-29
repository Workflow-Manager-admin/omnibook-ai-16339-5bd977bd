import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * PaymentContainer – Mock UI for payment and refund/cancellation (stub logic),
 * demonstrates a payment step and a refund step using the app's style.
 */
function PaymentContainer() {
  const [step, setStep] = useState("pay"); // 'pay' or 'refund'

  return (
    <div
      className="container"
      style={{
        maxWidth: 410,
        margin: "48px auto 33px auto",
        background: "var(--surface)",
        borderRadius: 14,
        boxShadow: "0 1px 10px rgba(0,0,0,0.10)",
        padding: "2.3rem 2rem 2rem 2rem",
        minHeight: 330,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      {/* Payment Details UI */}
      {step === "pay" && (
        <>
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.19rem",
              color: "var(--kavia-orange)",
              marginBottom: 12
            }}
          >
            Complete Payment
          </div>
          <form
            style={{ display: "flex", flexDirection: "column", gap: 15 }}
            onSubmit={e => { e.preventDefault(); setStep("refund"); }}
          >
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Card Number
              <input
                type="text"
                inputMode="numeric"
                placeholder="1234 5678 9012 3456"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-color)",
                  marginTop: 5,
                  fontSize: "1rem",
                  background: "var(--secondary-bg)",
                  color: "var(--primary-text)",
                  letterSpacing: "1.8px"
                }}
                disabled
                value="---- ---- ---- ----"
                readOnly
              />
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              <label style={{ flex: 1, fontWeight: 500, color: "var(--text-secondary)" }}>
                Expiry
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM/YY"
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
                  disabled
                  value="--/--"
                  readOnly
                />
              </label>
              <label style={{ flex: 1, fontWeight: 500, color: "var(--text-secondary)" }}>
                CVV
                <input
                  type="password"
                  placeholder="***"
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
                  disabled
                  value="***"
                  readOnly
                />
              </label>
            </div>
            <label style={{ fontWeight: 500, color: "var(--text-secondary)" }}>
              Payment Method
              <select
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
                disabled
              >
                <option>Credit/Debit Card</option>
                <option>UPI (stub)</option>
                <option>Wallet (stub)</option>
              </select>
            </label>
            <button
              type="submit"
              className="btn btn-large"
              style={{ marginTop: 11, fontWeight: 600 }}
            >
              Pay ₹1999 (Demo)
            </button>
          </form>
          <div
            style={{
              marginTop: 19,
              color: "var(--text-secondary)",
              fontSize: ".97rem",
              textAlign: "center",
            }}
          >
            <span>Need to cancel?</span>{" "}
            <button
              type="button"
              onClick={() => setStep("refund")}
              style={{
                background: "none",
                color: "var(--accent)",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: ".98rem"
              }}
            >
              Request Refund
            </button>
          </div>
        </>
      )}
      {step === "refund" && (
        <>
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "var(--accent)",
              marginBottom: 11,
              marginTop: 6,
            }}
          >
            Refund/Cancellation
          </div>
          <div
            style={{
              background: "var(--sidebar-bg)",
              borderRadius: 10,
              border: "1.5px solid var(--border-color)",
              minHeight: 110,
              margin: "12px 0 18px 0",
              padding: "23px 12px",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "2.3rem" }} role="img" aria-label="refund">💸</div>
            <div style={{
              fontWeight: 600,
              color: "var(--primary-text)",
              margin: "8px 0"
            }}>
              Refund/Cancel Booking (stub)
            </div>
            <div style={{
              color: "var(--text-secondary)",
              marginBottom: 5,
              fontSize: ".98rem"
            }}>
              Simulate a booking refund or cancellation here.<br />
              Demo only — future: API + policy check.
            </div>
          </div>
          <button
            className="btn btn-large"
            style={{
              fontWeight: 600,
              background: "var(--kavia-orange)",
              color: "#fff"
            }}
            onClick={() => setStep("pay")}
          >
            Back to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default PaymentContainer;

