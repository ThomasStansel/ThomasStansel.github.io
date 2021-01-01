import React from 'react'
import './Footer.css'
import resume from "../Thomas_Stansel_Resume.pdf";

function Footer() {
    return (
        <div className="footer-container" id="footer">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Thanks for checking out my site!
                </p>
                <p className="footer-subscription-text">
                    I'm always looking to meet new people, so feel free to connect with me below.
                </p>
                <div className="footer-icons">
                    <a target="_blank" href="https://github.com/TStansel">
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/thomas-stansel/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="mailto:thomas.s.stansel@gmail.com">
                        <i className="fas fa-envelope-square"></i>
                    </a>
                    <a target="_blank" href={resume}>
                        <i className="fas fa-file-alt"></i>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Footer
