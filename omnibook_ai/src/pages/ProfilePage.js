import React from "react";

// PUBLIC_INTERFACE
/**
 * ProfilePage – stub profile page for user account details/settings.
 */
function ProfilePage() {
  return (
    <div className="container" style={{ marginTop: 40 }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "var(--kavia-orange)",
          margin: "16px 0 12px 0",
        }}
      >
        Profile
      </div>
      <div
        style={{
          color: "var(--text-secondary)",
          fontSize: "1.07rem",
          marginBottom: 32,
        }}
      >
        This is your profile page. Manage your account details and preferences here.
      </div>
      <div
        style={{
          background: "var(--sidebar-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: 10,
          padding: "18px 22px",
          maxWidth: 420,
        }}
      >
        <span role="img" aria-label="user" style={{ fontSize: "1.3em", marginRight: 7 }}>
          👤
        </span>
        Profile management coming soon!
      </div>
    </div>
  );
}
export default ProfilePage;
