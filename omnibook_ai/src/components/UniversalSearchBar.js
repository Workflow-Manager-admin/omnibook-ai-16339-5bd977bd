import React, { useState } from "react";
import { useMultiLang } from "../contexts/MultiLangProvider";

/**
 * PUBLIC_INTERFACE
 * UniversalSearchBar enables users to perform global, cross-domain search.
 * Refactored for extra prominence, clarity, and mobile accessibility
 * with black-orange accent, improved layout and accessibility.
 */
// PUBLIC_INTERFACE
function UniversalSearchBar() {
  const [query, setQuery] = useState("");
  const { t } = useMultiLang();
  const [focused, setFocused] = useState(false);

  // Illustrative suggestions (stub)
  const suggestions = [
    "Movies in Mumbai",
    "Book cricket tickets",
    "Rock concerts near me",
    "Best family resorts",
    "Next weekend events"
  ];

  return (
    <div
      className="universal-searchbar-hero"
      style={{
        width: "100%",
        maxWidth: 720,
        margin: "0 auto",
        zIndex: 21,
        // Sits at top of main/homepage
        position: "relative",
        padding: "clamp(22px,4vw,30px) clamp(7vw, 0.3rem, 23px) 0 clamp(7vw, 0.3rem, 23px)"
      }}
    >
      <form
        style={{
          // Prominent, glassy surround
          background: "linear-gradient(99deg, var(--primary-bg) 92%, var(--kavia-orange) 107%)",
          borderRadius: "19px",
          border: "2px solid var(--kavia-orange)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.14), 0 1.5px 9px rgba(255,106,0,0.06)",
          padding: focused
            ? "2.1rem 1.2rem 1.6rem 1.18rem"
            : "1.5rem 1.2rem 1.25rem 1.18rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          position: "relative",
          width: "100%",
          minHeight: "auto"
        }}
        role="search"
        aria-label={t("searchLabel")}
        tabIndex={0}
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          // Could invoke real search action
        }}
      >
        <label
          htmlFor="universal-search-input"
          style={{
            color: "var(--kavia-orange)",
            fontSize: "1.08rem",
            fontWeight: 700,
            marginBottom: 9,
            letterSpacing: 0.16,
            cursor: "pointer"
          }}
        >
          {t("searchLabel")}
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "var(--kavia-black)",
            borderRadius: "12px",
            border: focused
              ? "2.2px solid var(--kavia-orange)"
              : "2px solid var(--border-color)",
            width: "100%",
            boxShadow: focused
              ? "0 0 0 2px #e87a417d"
              : "0 0 0 1px var(--border-color)",
            transition: "border .17s, box-shadow .17s"
          }}
        >
          <input
            id="universal-search-input"
            name="universalSearch"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchLabel")}
            autoComplete="off"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "1.21rem",
              background: "transparent",
              padding: "15px 14px 15px 13px",
              color: "var(--text-color)",
              borderRadius: "12px",
              fontWeight: 500,
              letterSpacing: '.01em',
              minWidth: 0
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-autocomplete="both"
            aria-describedby="universal-search-help"
          />
          <button
            type="submit"
            aria-label={t("searchButton")}
            style={{
              background: focused
                ? "linear-gradient(98deg,#ff9900 60%,#ff6600 100%)"
                : "var(--kavia-orange)",
              color: "white",
              border: "none",
              borderRadius: "9px",
              padding: "11px 22px",
              marginRight: 7,
              marginLeft: 7,
              fontWeight: 700,
              fontSize: "1.12rem",
              boxShadow: focused
                ? "0 4px 16px #ff980033"
                : "0 2px 8px #ffae0044",
              cursor: "pointer",
              transition: "background .14s"
            }}
          >
            {t("searchButton")}
          </button>
        </div>
        {/* Accessible help for search field */}
        <span
          id="universal-search-help"
          style={{
            color: "var(--text-secondary)",
            fontSize: ".99rem",
            marginTop: 6,
            marginLeft: 1
          }}
        >
          {t("searchPlaceholder")}
        </span>

        {/* Suggestions (intent chips), always visible for prominence */}
        <div
          style={{
            marginTop: 14,
            display: "flex",
            flexWrap: "wrap",
            gap: "9px",
            width: "100%",
            minHeight: 0
          }}
        >
          {suggestions.map((s, idx) => (
            <span
              key={idx}
              style={{
                background: "var(--sidebar-bg)",
                padding: "7px 18px 7px 13px",
                borderRadius: "20px",
                color: "var(--kavia-orange)",
                fontWeight: 600,
                fontSize: "1.03em",
                cursor: "pointer",
                border: "1.1px solid var(--border-color)",
                boxShadow: "0 1px 4px rgba(255,106,0, 0.06)",
                transition: "background .13s, color .16s"
              }}
              tabIndex={0}
              role="button"
              aria-label={s}
              onClick={() => setQuery(s)}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") setQuery(s);
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </form>
      {/* Mobile style tweaks */}
      <style>
        {`
          @media (max-width: 690px) {
            .universal-searchbar-hero {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .universal-searchbar-hero form {
              border-radius: 14px !important;
              padding: 1.12em .2em 1em .2em !important;
              box-shadow: 0 3px 16px #0002, 0 1.5px 7px #FFA50010 !important;
            }
          }
          @media (max-width: 480px) {
            .universal-searchbar-hero {
              max-width: 99vw !important;
              padding-top: 10px !important;
            }
            .universal-searchbar-hero form {
              border-radius: 11px !important;
              padding: 0.88em 0.1em 0.7em 0.1em !important;
            }
            .universal-searchbar-hero input {
              font-size: 1.06rem !important;
              padding: 11px 7px 11px 7px !important;
            }
            .universal-searchbar-hero button {
              font-size: .99rem !important;
              padding: 9px 13px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default UniversalSearchBar;
