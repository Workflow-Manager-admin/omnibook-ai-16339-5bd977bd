import React from "react";
import { useMultiLang } from "../../contexts/MultiLangProvider";
import { Link } from "react-router-dom";
import AILogo from "./AILogo";

/** PUBLIC_INTERFACE
 * NavBar component for main navigation.
 * Uses CSS class 'navbar' styled with theme variables for auto black-orange theme support.
 * Now supports multilingual switching and accessibility enhancements.
 */
function NavBar() {
  const { lang, setLang, t, supported } = useMultiLang();

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Main navigation"
      tabIndex={0}
      style={{ outline: "none" }}
    >
      <div className="logo" style={{display: "flex", alignItems: "center"}}>
        <AILogo size={30} style={{ display: "block", marginRight: 0, flexShrink: 0 }} />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link
          to="/"
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
            fontWeight: 500,
            marginRight: 16,
          }}
          aria-label={t("home")}
        >
          {t("home")}
        </Link>
        <Link
          to="/bookings"
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
            fontWeight: 500,
            marginRight: 16,
          }}
          aria-label={t("bookings")}
        >
          {t("bookings")}
        </Link>
        <Link
          to="/dashboard"
          style={{
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 600,
            marginRight: 16,
          }}
          aria-label={t("dashboard")}
        >
          {t("dashboard")}
        </Link>
        <Link
          to="/profile"
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
            fontWeight: 500,
            marginRight: 16,
          }}
          aria-label="Profile"
        >
          Profile
        </Link>
        {/* Language Switcher */}
        <form
          role="form"
          aria-label={t("selectLanguage")}
          style={{
            marginLeft: 18,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "var(--nav-bg)",
            borderRadius: 7,
            padding: "3.5px 7px",
          }}
          onSubmit={e => e.preventDefault()}
        >
          <label
            htmlFor="nav-lang-select"
            style={{
              color: "var(--text-secondary)",
              fontWeight: 500,
              fontSize: ".97em",
              marginRight: 2,
              cursor: "pointer",
            }}
            aria-label={t("language")}
          >
            🌐
          </label>
          <select
            id="nav-lang-select"
            value={lang}
            onChange={e => setLang(e.target.value)}
            aria-label={t("selectLanguage")}
            style={{
              border: "none",
              outline: "none",
              background: "none",
              color: "var(--text-color)",
              fontWeight: 600,
              fontSize: ".97em",
              cursor: "pointer",
            }}
          >
            {supported.map((lng) => (
              <option key={lng} value={lng}>
                {lng.toUpperCase()}
              </option>
            ))}
          </select>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
