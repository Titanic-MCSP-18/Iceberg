import React, { forwardRef } from "react";
import "./Profile.css";
import { useRef, useState, useEffect, useContext } from "react";
import ProfileContext from "../context/ProfileContext";
function Profile() {
  return (
    <section className="entire-profile-section">
      <div className="live-video-hero-image" tabIndex="-1">
        <div className="profile-background-image__image-container">
          <img
            className="profile-background-image__image"
            loading="lazy"
            src="https://media.licdn.com/dms/image/D5616AQGTHMmUqEJEYQ/profile-displaybackgroundimage-shrink_350_1400/0/1675449763296?e=1683763200&v=beta&t=BuJTa8QuZqxC_ce10i-8XNJpVvJ6Ck1WJicumkcjDM4"
          />
        </div>
      </div>
      <ProfilePhoto />
      <ProfileFooter />
    </section>
  );
}

function ProfilePhoto() {
  return (
    <div className="ph5">
      <div className="display-flex">
        <div className="profile-photo-container text-align-left">
          <div className="photo-wrapper">
            <button className="profile-photo-button" type="button">
              <img
                className="profile-image"
                width="200"
                height="200"
                title="Jacob Linson, #OPEN TO WORK"
                src="https://media.licdn.com/dms/image/D5635AQHJ_F92_uKKwQ/profile-framedphoto-shrink_200_200/0/1675903807084?e=1678838400&v=beta&t=Qm2b0lbKvR-mGCjYYs-jfZAxoLnLJ_7AFSKk9zIppzY"
              />
            </button>
            <div className="presence-indicator">
              <span className="visually-hidden">Status is online</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-column">
          <div className="badges">
            <span
              className="individual-badge premium-color"
              title="Jacob is a Bad Ass"
            >
              <li-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 21"
                  data-supported-dps="21x21"
                  fill="currentColor"
                  className="mercado-match"
                  width="21"
                  height="21"
                  focusable="false"
                >
                  <g>
                    <path
                      // className="background-mercado"
                      d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25a1.75 1.75 0 110-3.5 1.75 1.75 0 110 3.5zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0011 13v5H8V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4z"
                    ></path>
                  </g>
                </svg>
              </li-icon>
            </span>
            <span className="individual-badge relative">
              <button className="notify-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
              </button>
              <div
                tabIndex="-1"
                role="tooltip"
                placement="bottom"
                className="hoverable-notify absolute"
              >
                <div className="padding-8-12">
                  <div>Only get notified about Jacob's top posts.</div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <ProfileInformation />
      <ProfileConnections />
      <ProfileMessageButtons />
    </div>
  );
}
function ProfileInformation() {
  const { users, isLoading } = useContext(ProfileContext);
  return (
    <div className="mt2 relative">
      <div className="profile-headline">
        <div className="user-name-title">
          <h1 className="inline break-words v-align-middle text-heading-large">
            {isLoading
              ? "loading"
              : users[0].first_name + " mathafakin " + users[0].last_name}
          </h1>
          <span className="distance-badge  text-body-small">
            <span className="dist-value details-separator">
              {" "}
              <span>1st</span>
            </span>
          </span>
          <div className="user-headline break-words">
            {isLoading ? "loading" : users[0].headline}
          </div>
        </div>
      </div>
      <ul className="company-details">
        <li>
          <button className="company-button" type="button">
            <a href="#education" className="anchor-jump-to-education">
              <img
                className="company-details-img"
                src="https://media.licdn.com/dms/image/C560BAQFKNxOZ4X0g8Q/company-logo_100_100/0/1670610916338?e=1686182400&v=beta&t=xVibPYIeMo9ioMrLZ6IaktH1Y3cyyIX32ZRHGTx7Ju8"
              />
              <span className="company-details-text break-words">
                Galvanize Inc
              </span>
            </a>
          </button>
        </li>
      </ul>
      <div className="location-details">
        <span>{isLoading ? "loading" : users[0].location} </span>{" "}
        <span className="details-separator">
          <a href="" className="link-text">
            Contact Info
          </a>
        </span>
      </div>
    </div>
  );
}
function ProfileConnections() {
  return (
    <>
      <ul>
        <li>
          <a href="">
            <span className="link-text">41 connections</span>
          </a>
        </li>
      </ul>
      <a className="anchor-connections inline-flex align-items-center">
        <div className="connections-img-container">
          <ul className="stack-list display-flex list-style-none justify-center">
            <li className="stacked">
              <div className="connections-img-wrapper">
                <img
                  className="connections-img"
                  src="https://media.licdn.com/dms/image/D4E35AQFrxTuJ5vwV2w/profile-framedphoto-shrink_100_100/0/1675714804846?e=1678867200&v=beta&t=N8REj-RNhGpEikqin2a3EIzBb1NtvN1pCnw-nq1X8aE"
                />
              </div>
            </li>
            <li className="stacked">
              <div className="connections-img-wrapper">
                <img
                  className="connections-img second-img"
                  src="https://media.licdn.com/dms/image/D5603AQHlpZDtNhXkVA/profile-displayphoto-shrink_100_100/0/1670595086348?e=1683763200&v=beta&t=dRu5k3hdDcsm6ORaBLXED_KohX0uyV_z8qdacUrQYsg"
                />
              </div>
            </li>
          </ul>
        </div>
        <span className="t-normal connections-text">
          <strong>Moises Martinez</strong>, <strong>Chase Shertzer</strong>, and
          20 other mutual connections
        </span>
      </a>
    </>
  );
}
function ProfileMessageButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div className="profile-buttons-container">
      <div className="message-button">
        <a href="" className="anchor-button profile-button" role="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match paper-airplane"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
          </svg>
          Message
        </a>
      </div>
      <div className="dropdown-div">
        <button
          tabIndex="0"
          className="button--circle profile-button"
          onClick={toggleVisibility}
        >
          <span>More</span>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
          </svg> */}
        </button>
        <MoreButtonDropDown
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          ref={ref}
        />
      </div>
    </div>
  );
}
const MoreButtonDropDown = forwardRef(({ isVisible, setIsVisible }, ref) => {
  return (
    <div
      ref={ref}
      style={{ display: isVisible ? "block" : "none" }}
      onBlur={() => setIsVisible(false)}
      tabIndex="-1"
      aria-hidden="true"
      className="dropdown-content"
    >
      <ul>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
            </svg>
            <span className="display-flex flex-1">
              Send profile in a message
            </span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
            </svg>
            <span>Save to PDF</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M16.88 13a7 7 0 10-9.76 0l-2.48 7.31a.52.52 0 00.48.69h.15l2.54-.68 1.6 2.09a.52.52 0 00.91-.15L12 17.3l1.69 4.94a.5.5 0 00.49.35.52.52 0 00.42-.2l1.6-2.09 2.54.7h.15a.52.52 0 00.48-.69zm-10-5A5.13 5.13 0 1112 13.13 5.13 5.13 0 016.88 8zm2.48 11.24l-.83-1.07-1.31.35 1.48-4.34a7 7 0 002.12.72zm6.11-1.07l-.82 1.07-1.49-4.34a7 7 0 002.14-.72l1.48 4.34zM12 5.88A2.13 2.13 0 119.88 8 2.13 2.13 0 0112 5.88M12 5a3 3 0 103 3 3 3 0 00-3-3z"></path>
            </svg>

            <span>Give Kudos</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M11 9.5a4.4 4.4 0 01-1 2.75L4.54 19 3 17.73 6.08 14A4.49 4.49 0 1111 9.5zM17.5 5a4.5 4.5 0 00-.42 9L14 17.73 15.54 19 21 12.25a4.4 4.4 0 001-2.75A4.49 4.49 0 0017.52 5z"></path>
            </svg>
            <span>Request a recommendation</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
            </svg>
            <span>Recommend</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"></path>
            </svg>
            <span>Unfollow</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M20.42 13L23 15.58 21.58 17 19 14.42 16.42 17 15 15.58 17.58 13 15 10.42 16.42 9 19 11.58 21.58 9 23 10.42zM9 2a5 5 0 105 5 5 5 0 00-5-5zm2 12H7a3 3 0 00-3 3v5h10v-5a3 3 0 00-3-3z"></path>
            </svg>
            <span>Remove connection</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M17.9 4.38a5.82 5.82 0 01-1.9.31 6.1 6.1 0 01-1.9-.31l-3.2-1.07A6.41 6.41 0 009 3a5.57 5.57 0 00-1.9.31L6 3.67V2H4v20h2v-8l1.1-.37a6.41 6.41 0 011.9-.32 5.82 5.82 0 011.9.31l3.2 1.07a6 6 0 003.8 0L20 14V3.68z"></path>
            </svg>
            <span>Report / Block</span>
          </div>
        </li>
        <li>
          <div className="display-flex align-items-center full-width dropdown-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match margin-right-12"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-4 15h-1a3 3 0 01-3-3 3.22 3.22 0 01.1-.75L11.2 10h2.07L12 14.75A1 1 0 0013 16h1zm-1-9.75A1.25 1.25 0 1114.25 7 1.25 1.25 0 0113 8.25z"></path>
            </svg>
            <span>About this profile</span>
          </div>
        </li>
      </ul>
    </div>
  );
});
function ProfileFooter() {
  return (
    <div className="pv-open-to-carousel">
      <section className="margins-24 footer-section">
        <div className="display-flex open-to-work">
          <a className="footer-anchor">
            <h3 className="footer-h3">Open to Work</h3>
            <p className="footer-p">Software Engineer roles</p>
            <p className="footer-p link-text">Show details</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Profile;
