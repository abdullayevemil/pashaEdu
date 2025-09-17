/* eslint-disable */

export default function Home() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <div
        dangerouslySetInnerHTML={{
          __html: `
       <div class="container">
      <header>
        <div>
          <img
            src="../dependencies/assets/logo_white.png"
            alt="AI Student Guidance Logo"
            class="logo"
          />
        </div>
        <ul class="page-sections">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">See Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="profile">
          <div class="lang">
            <i class="bi bi-globe2"></i>
            <select>
              <option value="en">EN</option>
              <option value="az">AZ</option>
              <option value="tr">TR</option>
            </select>
          </div>
          <div class="signin">
            <a href="/signin" class="btn-signin">Sign In</a>
          </div>
          <div class="signout">
            <a href="/signout" class="btn-signout">Sign Out</a>
          </div>
        </div>
      </header>

      <main>
        <div class="info-general">
          <div class="info-content">
            <h1>AI Student Guidance Platform</h1>
            <p>
              Our AI-powered platform helps students discover personalized
              career paths, improve learning outcomes, and access scholarship
              opportunities through data-driven insights.
            </p>
            <div class="buttons">
              <a href="#" class="btn-demo">Request a Demo</a>
              <a href="assets/app-download.zip" class="btn-download"
                >Download App</a
              >
            </div>
          </div>
          <div class="info-image">
            <img
              src="../dependencies/assets/product-image.png"
              alt="Product Image"
              class="product-image"
            />
          </div>
        </div>

        <section class="section-partners">
          <div class="partners-wrapper">
            <ul class="partners">
              <li>
                <img
                  src="../dependencies/assets/partners-logos/coursera.png"
                  alt="Coursera"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/edtech.png"
                  alt="EdTech"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/linkedinlearning.png"
                  alt="LinkedIn Learning"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/maestroschool.png"
                  alt="Maestro School"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/mediarubic.png"
                  alt="Media Rubic"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/socar.png"
                  alt="SOCAR"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/udemy.png"
                  alt="Udemy"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/coursera.png"
                  alt="Coursera"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/edtech.png"
                  alt="EdTech"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/linkedinlearning.png"
                  alt="LinkedIn Learning"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/maestroschool.png"
                  alt="Maestro School"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/mediarubic.png"
                  alt="Media Rubic"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/socar.png"
                  alt="SOCAR"
                />
              </li>
              <li>
                <img
                  src="../dependencies/assets/partners-logos/udemy.png"
                  alt="Udemy"
                />
              </li>
            </ul>
          </div>
        </section>

        <section class="info-roadmap section-cards">
          <h1 class="info-quote">
            Achieve Your Dream Career <br />With Correct Learning Path
          </h1>
          <div class="roadmap">
            <img src="../dependencies/assets/roadmap.png" alt="roadmap" />
          </div>
          <p class="description">
            pashaEdu's well designed roadmap guides you from defining your dream
            career to gaining the skills,<br />
            resources, and confidence needed to achieve it.
            <span>
              <a href=""> Learn More <i class="bi bi-arrow-right"></i> </a>
            </span>
          </p>
        </section>
        <section class="section-features section-cards">
          <div class="feature display-left">
            <div>
              <h1>Stay Updated on Scholarships and Opportunities</h1>
              <p class="feature-description">
                Receive timely alerts about scholarships, exchange programs, and
                learning opportunities tailored to your interests and goals.
              </p>
            </div>
            <div>
              <img
                src="../dependencies/assets/stayupdated.jpeg"
                alt="Scholarship notifications"
              />
            </div>
          </div>

          <div class="feature display-right">
            <div>
              <h1>Connect With Industry Experts</h1>
              <p class="feature-description">
                Gain insights from professionals in your dream field through
                mentorship, webinars, and expert-led sessions that help guide
                your career path.
              </p>
            </div>
            <div>
              <img
                src="../dependencies/assets/connect.jpeg"
                alt="Expert mentorship"
              />
            </div>
          </div>

          <div class="feature display-left">
            <div>
              <h1>Master the Skills You Need</h1>
              <p class="feature-description">
                Discover the most in-demand skills for your chosen career and
                access curated courses, resources, and practice materials to
                build them with confidence.
              </p>
            </div>
            <div>
              <img
                src="../dependencies/assets/masterskills.jpg"
                alt="Learning skills"
              />
            </div>
          </div>
        </section>
        <section class="our-benefits">
          <ul>
            <li>
              <div class="benefit-percentage">50%</div>
              <h3>Higher Chance of Being Job-Ready</h3>
            </li>
            <li>
              <div class="benefit-percentage">60%</div>
              <h3>Better Prepared for the Job Market</h3>
            </li>
            <li>
              <div class="benefit-percentage">40%</div>
              <h3>More Opportunities Discovered for Students</h3>
            </li>
          </ul>
        </section>

        <section class="section-pricing">
          <h1>See Our Plans</h1>
          <div class="pricing-card basic">
            <h2>Basic</h2>
            <p class="price">Free</p>
            <ul>
              <li>Limited Access to Courses</li>
              <li>Scholarship Notifications</li>
              <li>Community Support</li>
            </ul>
            <a href="#" class="btn-pricing">Get Started</a>
          </div>

          <div class="pricing-card premium">
            <h2>Premium</h2>
            <p class="price">$29/month</p>
            <ul>
              <li>Full Access to Courses</li>
              <li>Scholarship & Program Alerts</li>
              <li>Mentorship from Experts</li>
              <li>Certificates of Completion</li>
            </ul>
            <a href="#" class="btn-pricing">Upgrade Now</a>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="footer-top">
          <div class="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#benefits">Benefits</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#helpdesk">Help Desk</a></li>
            </ul>
          </div>

          <div class="footer-section contact-us">
            <h4>Contact Us</h4>
            <p>
              Email:
              <a href="mailto:support@pashaedu.com">support@pashaedu.com</a>
            </p>
            <p>Phone: +994 55 980 44 00</p>
            <p>Address: Sumgait, Azerbaijan</p>
            <div class="social-icons">
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="#"><i class="bi bi-twitter"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 PashaEdu. All rights reserved.</p>
        </div>
      </footer>
    </div>

    <!-- Chatbot Icon -->
    <div class="chatbot-icon">🤖</div>

    <!-- Chat Window -->
    <div class="chatbot-window">
      <div class="chat-header">AI Chatbot</div>
      <div class="chat-messages"></div>
      <div class="chat-input-area">
        <input type="text" id="chat-input" placeholder="Type a message..." />
        <button id="send-btn">Send</button>
      </div>
    </div>
      `,
        }}
      />
      <script src="/script.js"></script>
    </>
  );
}
