import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivacyList from "../components/PrivacyList";

function PrivacyPolicy() {
  return (
    <>
      <section className="privacy">
        <div className="privacy__top">
          <div className="privacy__top-header">
            <span>Effective Date: 12/30/2024</span>
            <h4>Welcome to Nova School!</h4>
          </div>
          <div className="privacy__divider"></div>
          <div className="privacy__top-text">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal data when you use our
            website,{" "}
            <a href="#" className="privacy-link">
              www.novaschool.com
            </a>
            , in compliance with the General Data Protection Regulation (GDPR).
          </div>
        </div>
        <PrivacyList />
        <div className="privacy__contact">
          <div className="privacy__top-header">
            <h4>Contact Us</h4>
          </div>
          <div className="privacy__divider"></div>
          <p className="privacy__top-text">
            If you have questions, concerns, or complaints about this Privacy
            Policy or how your data is handled, please contact us at:{" "}
            <a href="mailto:nova.school@gmail.com" className="privacy-link">
              nova.school@gmail.com
            </a>
          </p>
        </div>
        <div className="privacy__footer">
          <p>
            We are committed to resolving your concerns and ensuring the
            protection of your data.
          </p>
          <br />
          <p>
            By using our website, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
          <br />
          <p>Thank you for trusting NovaSchool!</p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
