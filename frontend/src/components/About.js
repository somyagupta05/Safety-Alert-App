import React from "react";
import EmergencyAlertButton from "./EmergencyAlertButton";

const About = () => {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>SafetyAlert</h1>
        <ul style={styles.navLinks}>
          <li><a href="#guidelines" style={styles.navItem}>Home</a></li>
          <li><a href="#about" style={styles.navItem}>About</a></li>
          <li><a href="/" style={styles.navItem}>Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.overlay}>
          <h2 style={styles.heading}>Stay Safe, Stay Alert</h2>
          <div style={styles.buttonContainer}>
            <EmergencyAlertButton />
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div id="guidelines"  style={styles.section}>
        <h3 style={styles.sectionTitle}>Guidelines to Stay Safe</h3>

        <div style={styles.guidelineItem}>
          <img src="/awareness.jpg" alt="Awareness" style={styles.image} />
          <div style={styles.textBlock}>
            <p>
              <strong>Stay aware of your surroundings:</strong> It's crucial to stay alert, especially when you're in unfamiliar environments. Avoid getting lost in your phone or music. Observe people, exits, and lighting around you. Awareness is your first line of defense.
            </p>
          </div>
        </div>

        <div style={{ ...styles.guidelineItem, ...styles.guidelineItemReverse }}>
          <img src="/share-location.jpeg" alt="Share Location" style={styles.image} />
          <div style={styles.textBlock}>
            <p>
              <strong>Share your location with trusted contacts:</strong> Always let a close friend or family member know where you're headed, especially at night or to isolated places. With our app, you can share your live location instantly, giving your loved ones peace of mind and the ability to react fast if needed.
            </p>
          </div>
        </div>

        <div style={styles.guidelineItem}>
          <img src="/alarm.jpg" alt="Alarm Device" style={styles.image} />
          <div style={styles.textBlock}>
            <p>
              <strong>Carry a personal safety alarm or device:</strong> Simple tools like a keychain alarm or whistle can make a huge difference in emergencies. They are easy to carry, loud enough to attract attention, and can potentially deter threats. Don't underestimate their effectiveness.
            </p>
          </div>
        </div>

        <div style={{ ...styles.guidelineItem, ...styles.guidelineItemReverse }}>
          <img src="/instinct.jpg" alt="Trust Instincts" style={styles.image} />
          <div style={styles.textBlock}>
            <p>
              <strong>Trust your instincts and avoid isolated areas:</strong> If you ever feel uncomfortable in a situation—even if there's no clear reason—listen to that inner voice. Instincts are your natural alert system. Take a different path, find a safer space, or reach out for help.
            </p>
          </div>
        </div>

        <div style={styles.guidelineItem}>
          <img src="/alert.jpeg" alt="Emergency Alert" style={styles.image} />
          <div style={styles.textBlock}>
            <p>
              <strong>Use the SafetyAlert app to notify contacts instantly:</strong> Our app is designed to respond fast in dangerous situations. A single tap sends an SMS with your live location to your emergency contacts. It's reliable, fast, and could make all the difference in a critical moment.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" style={styles.section}>
        <h3 style={styles.sectionTitlee}>About the App</h3>
        <p>
          <strong>SafetyAlert</strong> is a personal emergency companion designed to provide peace of mind and rapid action when you need it most. Whether you're walking alone, commuting late at night, or simply want to feel secure—SafetyAlert helps you stay connected and safe.
        </p>
        <p>
          With a single tap, your current live location is sent via SMS to your selected emergency contacts. The alert is instant, discreet, and effective. Our mission is to empower individuals, especially women and youth, by providing them with a smart tool to call for help anytime, anywhere.
        </p>
        <p>
          Future updates will include real-time tracking, community alerts, and personalized safety tips. Stay strong, stay connected—with SafetyAlert.
        </p>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SafetyAlert. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "white",
    // backgroundImage: "url('/safety-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#fff",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7C0A02",
    padding: "10px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(255, 0, 0, 0.3)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  heroSection: {
    height: "400px",
    backgroundImage: "url('/OIP.jpg')",
    // backgroundColor: "blackc:\Users\dell\Downloads\stayy.webp",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  overlay: {
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    height: "400px",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop:"80px",
    color: "white",
  },
  buttonContainer: {
    transform: "scale(1.2)",
    display: "inline-block",
  },
  sectionTitle: {
    fontSize: "48px",
    marginBottom: "15px",
    color: "#7C0A02",
    textAlign: "center",
    marginTop:"1px",
  },
  sectionTitlee: {
    fontSize: "48px",
    // marginBottom: "15px",
    color: "#7C0A02",
    textAlign: "center",
    marginTop:"-100px",
  },
  section: {
    padding: "80px 100px",
    color: "black",
  },
  guidelineItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
    gap: "30px",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "10px",
    flexWrap: "wrap",
  },
  guidelineItemReverse: {
    flexDirection: "row-reverse",
  },
  image: {
    width: "40%",
    minWidth: "250px",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  textBlock: {
    width: "55%",
    minWidth: "250px",
    fontSize: "16px",
    lineHeight: "1.6",
  },
  footer: {
    backgroundColor: "#7c0a02",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    color: "white",
  },
};

export default About;
