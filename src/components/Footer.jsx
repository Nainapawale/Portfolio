import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.socialSection}>You can find and connect with us at</p>
      <div style={styles.iconContainer}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaYoutube />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaTwitter />
        </a>
      </div>

      <div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Portfolio</th>
              <th>Works</th>
              <th>Blogs</th>
              <th>Github</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Gmail</td>
              <td>Feedback</td>
              <td>Certificates</td>
              <td>Help center</td>
            </tr>
            <tr>
              <td>Links</td>
              <td>e-Resume</td>
              <td>CV</td>
              <td>Hike</td>
            </tr>
            <tr>
              <td>Target</td>
              <td>COD</td>
              <td>Acheive</td>
              <td>Feedback</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr></hr>
      <p style={styles.copyright}> © 2025 Portfolio. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  socialSection: {
    marginBottom: "15px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px", // Space between icons
    fontSize: "24px", // Make icons bigger
  },
  table: {
    width: "100%",
    textAlign: "center",
    padding: "10px 0 20px",
  },
  copyright: {
    padding: "10px",
  },
};

export default Footer;
