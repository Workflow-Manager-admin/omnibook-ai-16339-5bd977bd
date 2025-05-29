import React from "react";

// PUBLIC_INTERFACE
/**
 * ProfilePage – displays user profile details (mock data for demo).
 */
function ProfilePage() {
  // Mock user data (could be replaced in future from ProfileContext or API)
  const user = {
    name: "Alexandra Ramesh",
    email: "alex.ramesh@example.com",
    phone: "+91 90000 12345",
    joined: "2023-11-10",
    status: "Active",
    location: "Bengaluru, India",
    preferences: "Concerts, Movies, Travel",
    avatar: null, // placeholder: set image url for avatar, or null for emoji
  };

  return (
    <div className="container" style={{ marginTop: 32, maxWidth: 480 }}>
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
          marginBottom: 27,
        }}
      >
        View and manage your account details and preferences.
      </div>

      {/* Profile Card */}
      <div
        style={{
          background: "var(--sidebar-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: 13,
          padding: "26px 29px 22px 29px",
          maxWidth: 400,
          marginBottom: 22,
          boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 82,
            height: 82,
            borderRadius: "50%",
            background: "var(--primary-bg)",
            border: "2.5px solid var(--kavia-orange)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.7rem",
            fontWeight: 700,
            color: "var(--kavia-orange)",
            marginBottom: 16,
            overflow: "hidden",
            boxShadow: "0 1px 5px rgba(0,0,0,0.07)",
          }}
        >
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span role="img" aria-label="User">
              👤
            </span>
          )}
        </div>
        <div style={{ fontWeight: 700, fontSize: "1.23rem", color: "var(--primary-text)" }}>
          {user.name}
        </div>
        <div style={{ fontSize: ".98rem", color: "var(--text-secondary)", fontWeight: 500, marginBottom: 10 }}>
          {user.email}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%", marginTop: 8 }}>
          <ProfileDetail label="Phone" value={user.phone} />
          <ProfileDetail label="Location" value={user.location} />
          <ProfileDetail label="Joined" value={new Date(user.joined).toLocaleDateString()} />
          <ProfileDetail label="Status" value={
            <span style={{
              color: user.status === "Active" ? "var(--kavia-orange)" : "var(--text-secondary)",
              fontWeight: 600,
              letterSpacing: ".04em"
            }}>{user.status}</span>
          } />
          <ProfileDetail label="Preferences" value={user.preferences} />
        </div>
      </div>

      <div style={{
        color: "var(--text-secondary)",
        fontSize: ".97rem",
        textAlign: "center",
        marginTop: 9
      }}>
        Profile management features coming soon.
      </div>
    </div>
  );
}

// Simple reusable row for profile field/values
function ProfileDetail({ label, value }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      color: "var(--primary-text)",
      fontWeight: 500,
      fontSize: ".99rem",
      background: "var(--surface)",
      borderRadius: 7,
      padding: "6.5px 12px",
      margin: "0 0 0 0",
      border: "1px solid var(--border-color)",
    }}>
      <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{label}:</span>
      <span style={{ marginLeft: 12 }}>{value}</span>
    </div>
  );
}

export default ProfilePage;
