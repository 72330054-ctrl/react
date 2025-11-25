import heroImg from '../assets/hero-img.svg';
import aboutimg1 from '../assets/l8.png';
import aboutimg2 from '../assets/l11.png';
import aboutimg3 from '../assets/budget_illustration.jpg'
import { BsGraphUpArrow } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsPiggyBank } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";
import { BsWallet2, BsCalendarCheck, BsShieldLock, BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
function Home() {
    const [state, setState] = useState({ name: "", email: "", subject: "", message: "" });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({ ...state, [name]: value });
    };
    const handleSubmit = e => {
        alert(JSON.stringify(state));
    };
    return (
        <div className='dark-background'>
            {/* hero section */}
            <section id="hero" className="hero section dark-background pt-5">
                <div className="container ">
                    <div className="row gy-4">
                        <div className="col-lg-7 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay="100">
                            <img src={heroImg} className="img-fluid animated p-4" alt="Hero Illustration" />
                            <div className="row text-center">
                                <div className="col-lg-3 col-4 px-2">
                                    <div className="floating-card card-1" data-aos="zoom-in" data-aos-delay="600">
                                        <div className="row p-2">
                                            <div className="col-4 d-flex justify-content-center align-items-center">
                                                <BsGraphUpArrow
                                                    style={{
                                                        fontSize: "60px",
                                                        color: "white",
                                                        // background: "transparent",

                                                    }}
                                                />
                                            </div>
                                            <div className="col-8 text-center">
                                                <span className="card-label">Growth Rate</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center" data-aos="fade-in">
                            <h1 className="custom-heading">Your Money Your Way</h1>

                            <p>Budget better, spend smarter, stress less.</p>
                            <div className="d-flex">
                                <Link to="/login" className="btn-get-started">Get Started</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* about section */}
            <section id="about" className="about section mt-0">
                <div className="container">
                    <div className="section-title">
                        <h2 className='fancy '>About Us</h2>
                    </div>
                    <div className="row gy-4 mt-3">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 position-relative align-self-start order-lg-last order-first" data-aos="fade-up"
                            data-aos-delay="200">
                            <img src={aboutimg1} className="img-fluid" alt="About illustration" />
                        </div>

                        <div className="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="mb-3"><i className="bi bi-people-fill me-2"></i>Who Are We?</h3>
                            <p>
                                We’re passionate about helping you take control of your finances. Our tools make budgeting simple, clear, and stress-free — turning complex expenses into manageable insights. With us, you can plan smarter, save more, and achieve your financial goals effortlessly.
                            </p>
                            <strong>Your budget, your future — made easy!</strong>
                        </div>
                    </div>

                    <div className="row gy-4 mt-5">
                        <div className="col-lg-5 position-relative align-self-start order-lg-first order-last pt-4" data-aos="fade-up"
                            data-aos-delay="200">
                            <img src={aboutimg2} className="img-fluid w-100" alt="About illustration" />

                        </div>
                        <div className="col-1"></div>
                        <div className="col-lg-6 content order-first order-lg-last" data-aos="fade-up" data-aos-delay="100">
                            <h3>Our Vision</h3>
                            <p >
                                To empower individuals and families to take control of their finances with smart, simple, and effective budgeting tools. By combining clear insights, intuitive design, and reliable tracking, we help you make informed financial decisions, save more, and achieve your goals with confidence.
                            </p>
                            <ul className="mt-3">
                                <li><i className="bi bi-check-circle"></i>
                                    <span> Smart, easy-to-use budgeting tools</span>
                                </li>
                                <li><i className="bi bi-check-circle"></i>
                                    <span>Clear insights and intuitive design</span>
                                </li>
                                <li><i className="bi bi-check-circle"></i>
                                    <span> Achieve your financial goals efficiently and confidently</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* challenges section */}
            <section id="faq" className="faq section dark-background">

                <div className="container section-title" data-aos="fade-up">
                    <h2 className='fancy '>Financial Challenges</h2>
                    <div><span>Common Money Management</span> <span className="description-title">Challenges We Solve</span></div>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-between">

                        <div className="col-lg-9">
                            <div className="faq-list">
                                <div className="row gy-4">

                                    <div className="col-lg-6">
                                        <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
                                            <h3>Overspending & Impulse Purchases</h3>
                                            <div className="faq-content">
                                                <p>Unplanned spending can drain savings quickly and make budgeting stressful.</p>
                                            </div>
                                            <i className="bi bi-plus faq-toggle"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                                            <h3>Difficulty Tracking Expenses</h3>
                                            <div className="faq-content">
                                                <p>Manually keeping track of bills, receipts, and daily spending is time-consuming and error-prone.</p>
                                            </div>
                                            <i className="bi bi-plus faq-toggle"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                                            <h3>Saving for Goals</h3>
                                            <div className="faq-content">
                                                <p>Without clear tracking, it’s hard to save for big goals like vacations, emergencies, or education.</p>
                                            </div>
                                            <i className="bi bi-plus faq-toggle"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                                            <h3>Unexpected Expenses</h3>
                                            <div className="faq-content">
                                                <p>Emergency costs like car repairs or medical bills can disrupt your budget and savings plans.</p>
                                            </div>
                                            <i className="bi bi-plus faq-toggle"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="faq-item" data-aos="fade-up" data-aos-delay="500">
                                            <h3>Lack of Financial Clarity</h3>
                                            <div className="faq-content">
                                                <p>Not knowing exactly where your money goes makes it difficult to plan ahead and stay on track.</p>
                                            </div>
                                            <i class="bi bi-plus faq-toggle"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="faq-item" data-aos="fade-up" data-aos-delay="600">
                                            <h3>Managing Multiple Accounts</h3>
                                            <div className="faq-content">
                                                <p>Juggling bank accounts, credit cards, and bills can be confusing and stressful without proper tracking.</p>
                                            </div>
                                            <i className="bi bi-plus faq-toggle"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <div className="faq-card">
                                <i className="bi bi-wallet2"></i>
                                <h3>Need Help Managing Your Money?</h3>
                                <p>Our budgeting tools help you track expenses, plan savings, and stay on top of your financial goals with ease.</p>
                                <a href="#dashboard" class="btn btn-primary">Start Budgeting</a>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* why us */}
            <section id="why-choose-us" className="why-choose-us section">


                <div className="container section-title" data-aos="fade-up">
                    <h2 className='fancy '>Why Use Smart Budgeting</h2>
                    <div>
                        <span>Why Choose</span> <span className="description-title">Our Budgeting Tools</span>
                    </div>
                </div>


                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row align-items-center">


                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="features-image">
                                <div className="stats-card ">
                                    <div className="stat-item">
                                        <h3>
                                            <span data-purecounter-start="0" data-purecounter-end="90" className="purecounter">90</span>%
                                        </h3>
                                        <p>Better Expense Tracking</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>
                                            <span data-purecounter-start="0" data-purecounter-end="85" className="purecounter">85</span>%
                                        </h3>
                                        <p>Savings Achieved</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>
                                            <span data-purecounter-start="0" data-purecounter-end="95" className="purecounter">95</span>%
                                        </h3>
                                        <p>Financial Clarity</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>
                                            <span data-purecounter-start="0" data-purecounter-end="100" className="purecounter">100</span>%
                                        </h3>
                                        <p>Goal Planning Ready</p>
                                    </div>
                                </div>

                                <img src={aboutimg3} alt="Budget Illustration" className="img-fluid main-image" />

                                <div className="experience-badge">
                                    <div className="badge-content">
                                        <span className="number">Smart</span>
                                        <span className="text">Budgeting Upgrade</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
                            <div className="features-content">

                                <div className="features-list">


                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <BsWallet2 />
                                        </div>
                                        <div className="feature-text">
                                            <h4>Track Every Expense</h4>
                                            <p>Know exactly where your money goes, every day, without manual spreadsheets or guesswork.</p>
                                        </div>
                                    </div>


                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <BsPiggyBank />
                                        </div>
                                        <div className="feature-text">
                                            <h4>Boost Your Savings</h4>
                                            <p>Automated tracking and smart insights help you save for goals faster and smarter.</p>
                                        </div>
                                    </div>

                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <BsBarChartLine />
                                        </div>
                                        <div className="feature-text">
                                            <h4>Plan Your Financial Goals</h4>
                                            <p>Create budgets, set limits, and visualize progress toward personal goals with ease.</p>
                                        </div>
                                    </div>

                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <BsShieldCheck />
                                        </div>
                                        <div className="feature-text">
                                            <h4>Secure & Accurate</h4>
                                            <p>Keep your financial data safe while enjoying accurate, real-time tracking of all accounts.</p>
                                        </div>
                                    </div>

                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <MdTrendingUp />
                                        </div>
                                        <div className="feature-text">
                                            <h4>Achieve Financial Freedom</h4>
                                            <p>Our tools empower you to make informed decisions and take control of your financial future.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            {/* our services */}
            <section id="features" className="services section dark-background">
                <div className="container section-title">
                    <h2 className='fancy '>Features of Our Budget Website</h2>
                    <p>Manage your finances smarter with tools that help you track, save, and plan efficiently.</p>
                </div>

                <div className="container">
                    <div className="row justify-content-center gy-4">


                        <div className="col-lg-4 col-sm-12">
                            <div className="service-item position-relative">
                                <div className="icon"><BsWallet2 size={40} color="#0dcaf0" /></div>
                                <h3>Expense Tracking</h3>
                                <p>Add and categorize your expenses easily, see monthly summaries, and track your spending patterns.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="service-item position-relative">
                                <div className="icon"><BsBarChartLine size={40} color="#20c997" /></div>
                                <h3>Budget Planning</h3>
                                <p>Set budgets for different categories and get alerts when you are close to exceeding limits.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="service-item position-relative">
                                <div className="icon"><BsPiggyBank size={40} color="#8e82fc" /></div>
                                <h3>Savings Goals</h3>
                                <p>Create and track your savings goals, like emergency funds, vacations, or big purchases.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="service-item position-relative">
                                <div className="icon"><BsGraphUpArrow size={40} color="#fd7e14" /></div>
                                <h3>Financial Insights</h3>
                                <p>Visual charts and reports show your spending trends and offer smart suggestions for saving.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="service-item position-relative">
                                <div className="icon"><BsCalendarCheck size={40} color="#ffc107" /></div>
                                <h3>Recurring Payments</h3>
                                <p>Track bills and subscriptions, get reminders, and never miss a payment again.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="service-item position-relative">
                                <div className="icon"><BsShieldLock size={40} color="#20c997" /></div>
                                <h3>Secure & Private</h3>
                                <p>All your financial data is safe with password protection and optional encryption.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* contact us */}

            <section id="contact" class="contact section">
                <div className='row'>
                    <div className='col-12'>
                        <div class="container section-title" data-aos="fade-up">
                            <h2 className='fancy '>Contact</h2>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        </div></div>
                    <div className='col-12'>
                        <div class="container" data-aos="fade" data-aos-delay="100">

                            <div className="row gy-4">

                                <div className="col-lg-4">
                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                        <i className="bi bi-geo-alt flex-shrink-0"><BsGeoAlt /></i>

                                        <div>
                                            <h3>Address</h3>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                        <i className="bi bi-telephone flex-shrink-0"><BsTelephone /></i>
                                        <div>
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                        <i className="bi bi-envelope flex-shrink-0"><BsEnvelope /></i>
                                        <div>
                                            <h3>Email Us</h3>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-8">
                                    <form className="php-email-form" data-aos="fade-up"
                                        data-aos-delay="200">
                                        <div className="row gy-4">

                                            <div className="col-md-6">
                                                <input type="text" name="name" class="form-control" placeholder="Your Name" required="" onChange={handleChange} />
                                            </div>

                                            <div className="col-md-6 ">
                                                <input type="email" class="form-control" name="email" placeholder="Your Email" required="" onChange={handleChange} />
                                            </div>

                                            <div className="col-md-12">
                                                <input type="text" class="form-control" name="subject" placeholder="Subject" required="" onChange={handleChange} />
                                            </div>

                                            <div className="col-md-12">
                                                <textarea className="form-control" name="message" rows="6" placeholder="Message" required="" onChange={handleChange}></textarea>
                                            </div>

                                            <div className="col-md-12 text-center">
                                                <div className="loading">Loading</div>
                                                <div className="error-message"></div>
                                                <div className="sent-message">Your message has been sent. Thank you!</div>

                                                <button type="submit" onClick={handleSubmit}>Send Message</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>





        </div>
    );
}

export default Home;
