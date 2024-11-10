import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Import an icon from react-icons

const CustomNotification = ({ title, body, onClose }) => {
  return (
    <div style={styles.notificationContainer}>
      <div style={styles.notificationContent}>
        <div style={styles.header}>
          <AiOutlineInfoCircle size={24} style={styles.icon} />
          <h4 style={styles.title}>{title}</h4>
          <button onClick={onClose} style={styles.closeButton}>✕</button>
        </div>
        <p style={styles.body}>{body}</p>
      </div>
    </div>
  );
};

const styles = {
  notificationContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease-out, fadeOut 0.3s ease-in 4s',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  },
  notificationContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    color: '#fff',
    marginRight: '10px',
  },
  title: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
  },
  body: {
    marginTop: '10px',
    fontSize: '14px',
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

// CSS animation for fade-in and fade-out
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`, styleSheet.cssRules.length);

export default CustomNotification;
