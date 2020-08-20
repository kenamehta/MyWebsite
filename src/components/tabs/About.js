import React, { Component } from 'react';
class About extends Component {
    state = {}
    render() {
        return (
            <div id="aboutme_section" className="aboutme-bg">
                <div className="" style={{ padding: "50px" }}>
                    <h1 className="tabs-heading">
                        <u>About Me</u>
                    </h1>
                </div>
                <div className="mt-2 aboutme-inner-bg">
                    <div className="container">
                        <div className="row" align="center">
                            <div className="col-lg-6 col-xs-12 mb-3">
                                <h3>Education</h3>
                                <a
                                    href="https://www.linkedin.com/in/kenamehta/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="e_style" src="education.png" alt="" />
                                </a>
                                <div style={{ paddingTop: "20px" }} align="left">
                                    <ul>
                                        <li>
                                            <a href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">San Jose State University</a>
                                            <div style={{ color: "gray", fontSize: "13px" }}><i>Master's in Software Engineering (Jan 2020 - Expected Dec 2021)</i></div>
                                            <div style={{ fontSize: "13px" }}>Related Courses:
                                                <ul>
                                                    <li>Enterprise Distributed Systems</li>
                                                    <li>Web Application Development</li>
                                                    <li>Software Security</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="http://www.djsce.ac.in/" target="_blank" rel="noopener noreferrer">University of Mumbai</a>
                                            <div style={{ color: "gray", fontSize: "13px" }}><i>Bachelor's in Information Technology (Jun 2013 - Jun 2017)</i></div>
                                            <div style={{ fontSize: "13px" }}>Related Courses:
                                                <ul>
                                                    <li>Data Mining and Business Intelligence</li>
                                                    <li>Cloud Computing</li>
                                                    <li>Distributed Systems</li>
                                                    <li>Object Oriented Programming</li>
                                                    <li>Big Data Analytics</li>
                                                    <li>Data Structures and Algorithms</li>
                                                    <li>Advanced Database Management System</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xs-12 mb-3">
                                <h3>Experience</h3>
                                <a
                                    href="https://www.linkedin.com/in/kenamehta/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="e_style" src="linkedin_black.png" alt="" />
                                </a>
                                <div style={{ paddingTop: "20px" }} align="left">
                                    <ul>
                                        <li>
                                            <a href="https://www.lamresearch.com/" target="_blank" rel="noopener noreferrer">Lam Research</a>
                                            <div style={{ color: "gray", fontSize: "13px" }}><i>Research Assistant (Jun 2020 - Aug 2020)</i></div>
                                            <ul style={{ fontSize: "13px" }}>
                                                <li>Developed a comprehensive full-stack web application for LAM Research to visualize the log data generated every hour from semi-conductor making machines</li>
                                                <li>Made REST APIs in Node.js to process the data stored in HBase and SolrDB</li>
                                                <li>Created the front-end using React.js. Also used the Plotly library for creating the graphs.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="https://group.bnpparibas/en/" target="_blank" rel="noopener noreferrer">BNP Paribas - Bank of the West</a>
                                            <div style={{ color: "gray", fontSize: "13px" }}><i>Software Engineer (Jun 2017 - Jan 2020)</i></div>
                                            <ul style={{ fontSize: "13px" }}>
                                                <li>Created REST APIs in JAVA SpringBoot MVC framework.</li>
                                                <li>Automated the health-check process to ensure that data was loaded correctly across different layers of the Enterprise Data Warehouse using Python.</li>
                                                <li>Developed an ETL framework using Informatica Powercenter to pull data from multiple heterogeneous sources, modeled these projections and delivered it to the users using Tableau for data visualization.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="https://www.zaubacorp.com/company/TRIPLETAP-TECHNOLOGIES-PRIVATE-LIMITED/U72900MH2015PTC265102" target="_blank" rel="noopener noreferrer">TripleTap Technologies</a>
                                            <div style={{ color: "gray", fontSize: "13px" }}><i>Software Engineer Intern(Feb 2016 - Mar 2016)</i></div>
                                            <ul style={{ fontSize: "13px" }}>
                                                <li>Implemented Google and Facebook OAuth module under the Login and Register module of the website.</li>
                                                <li>Developed buying and selling automobile parts functionality using React JS, Node and Express JS.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row recomm_center">
                            <h3 className="mt-5">Recommendations</h3>
                            <a className="ml-3 mt-4"
                                href="https://www.linkedin.com/in/kenamehta/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img className="e_style" src="recommendation.png" alt="" />
                            </a>
                        </div>
                        <div className="row mt-5" align="left">
                            <div className="col-lg-6 col-xs-12 mb-3" style={{ fontSize: "13px" }}>
                                <ul>
                                    <div className="recommendations"><a className="name_a" target="_blank" href="https://www.linkedin.com/in/reeya-vani/" rel="noopener noreferrer">
                                        <div style={{ color: "black" }}>Kena worked with me on developing a full-stack data visualization web application for Lam Research. Her task was to build the Drilldown module for the tool. She exhibited tremendous ownership in her work. Her coding skills in React.js and Node.js are remarkable. She quickly learned new platforms like Apache Solr and was able to deliver an entire module within 2 months of her Assistantship. Apart from her work, she was always willing to fix bugs and help other team members if needed. I would highly recommend Kena for her technical skills and teamwork.</div>
                                        <div style={{ color: "gray", fontSize: "13px" }}>
                                            <i><span style={{ color: "#007bff" }}>Reeya Vani</span> - Software Engineer at LAM Research (USA)</i>
                                        </div></a>
                                    </div>
                                    <div className="recommendations mt-5"><a className="name_a" target="_blank" href="https://www.linkedin.com/in/sridhar-esampalli-88087a18/" rel="noopener noreferrer">
                                        <div style={{ color: "black" }}>Kena and I worked together for Bank Of The West(BNPP)Treasury IT Team, she was a very creative and supporting Team member, She is Tenacious , intelligent and hugely passionate, She always stood out of one of the most creative minded, She leans into solving the problem not just defining it well, Myself and team enjoyed working with Kena and highly recommend her skills in development I would very much hope to work together with her in future</div>
                                        <div style={{ color: "gray", fontSize: "13px" }}>
                                            <i><span style={{ color: "#007bff" }}>Sridhar Esampalli</span> - Sr Data Engineer at BNP Paribas (USA)</i>
                                        </div></a>
                                    </div>
                                    <div className="recommendations mt-5"><a className="name_a" target="_blank" href="https://www.linkedin.com/in/hardik-gosalia-31669a19/" rel="noopener noreferrer">
                                        <div style={{ color: "black" }}>Kena worked with me on a project related to Financial Projections. Being a Junior developer few of the things that stood out for her were Ownership, Dedication, Focus and her ability to work efficiently using her prescience. In a short span of time, she developed a strong command over technologies and tools that we used. I highly recommend her</div>
                                        <div style={{ color: "gray", fontSize: "13px" }}>
                                            <i><span style={{ color: "#007bff" }}>Hardik Gosalia</span> - Technical Lead at BNP Paribas (India)</i>
                                        </div></a>
                                    </div>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-xs-12 mb-3" style={{ fontSize: "13px" }}>
                                <ul>
                                    <div className="recommendations"><a className="name_a" target="_blank" href="https://www.linkedin.com/in/dhiraj-kadam-b4001438/" rel="noopener noreferrer">
                                        <div style={{ color: "black" }}>Kena worked under me during the Data Quality Health Check project. She was instrumental in automating the conversion of legacy PLSQL based checks to Informatica based ones. This came as a surprise to me as this was the first project she worked on after joining as a fresher. I greatly endorse her automation skills and her ability to spot inefficiencies in the system</div>
                                        <div style={{ color: "gray", fontSize: "13px" }}>
                                            <i><span style={{ color: "#007bff" }}>Dhiraj Kadam</span> - Technical Lead at BNP Paribas (India)</i>
                                        </div></a>
                                    </div>
                                    <div className="recommendations mt-5"><a className="name_a" target="_blank" href="https://www.linkedin.com/in/viralspatel21/" rel="noopener noreferrer">
                                        <div style={{ color: "black" }}>I know Kena since the past 1 and half years. She has proved herself to be an outstanding performer at BNP Paribas ISPL. Her dedication, hardwork and ability to grasp on any given module or a business requirement has made her stand out and a go to person. She is really good at understanding client requirements and providing quick solutions. She always accepted new challenges with enthusiasm and committed to the timeline of the project. Kena is a good team player and very supportive to the team members when it comes to knowledge sharing. She will definitely fit into challenging environments</div>
                                        <div style={{ color: "gray", fontSize: "13px" }}>
                                            <i><span style={{ color: "#007bff" }}>Viral Patel</span> - Sr. Software Engineer at BNP Paribas (India)</i>
                                        </div></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="row recomm_center">
                            <h3 className="mt-5">Some Adventures</h3><img className="mt-2" src="happy.png" alt="" />
                        </div>
                        <div className="adventure_bg">
                            <div className="row mt-5">
                                <div className="img-border-style col-lg-4 col-md-6 col-sm-12">
                                    <img alt="" className="adv-img-style" height="200vh" src="bungee.gif"></img>
                                </div>
                                <div className="img-border-style col-lg-4 col-md-6 col-sm-12">
                                    <img alt="" className="adv-img-style" height="200vh" src="skydive1.jpg"></img>
                                </div>
                                <div className="img-border-style col-lg-4 col-md-6 col-sm-12">
                                    <img alt="" className="adv-img-style" height="200vh" src="kayak.gif"></img>
                                </div>
                                <div className="img-border-style col-lg-4 col-md-6 col-sm-12">
                                    <img alt="" className="adv-img-style" height="200vh" src="navratri.jpg"></img>
                                </div>
                                <div className="img-border-style col-lg-4 col-md-6 col-sm-12">
                                    <img alt="" className="adv-img-style" height="200vh" src="paris.jpg"></img>
                                </div>
                                <div className="img-border-style col-lg-4 col-md-6 col-sm-12">
                                    <img alt="" className="adv-img-style" height="200vh" src="Aseema.jpg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >);
    }
}

export default About;