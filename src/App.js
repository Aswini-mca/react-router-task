import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import logo from './images/Guvi-blog-logo.png';
import guviLogo from './images/blog-header-2048x315.png';
import pic1 from './images/image-blz-blog-gui-testing-introduction_0.png';
import pic2 from './images/images.jpg';
import pic3 from './images/images1.png';
import pic4 from './images/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023.png';
import pic5 from './images/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications.png';
import pic6 from './images/best-way-to-learn-full-stack-development.png';
import pic7 from './images/feature-image-Best-Data-Science-Online-Courses-for-Beginners.png';
import pic8 from './images/Everything-about-Data-Scientist-Salary-in-India-2023.png';
import pic9 from './images/best-data-science-frameworks.png';
import pic10 from './images/Yellow-Blue-Illustration-Business-Blog-Banner.png';
import pic11 from './images/cybersecuity-.gif';
import pic12 from './images/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png';
import pic13 from './images/featured-image-how-to-become-ui-ux-designer.png';
import pic14 from './images/Game-Development-Career-101.jpg';
import pic15 from './images/feature-image-Skills-Required-to-Become-a-Digital-Marketer.webp';


//course details array of objects
const courseDetails = [{
  image: pic1,
  courseName: "Automation Test Engineer Roles and Responsibilities in 2023",
  courseDescription: "A web developer develops the application to its best, but what happens after that? Who takes care of the quality of the applications?",
},
{
  image:pic2,
  courseName: "7 Best Automation Testing Project Ideas",
  courseDescription: "Are you an automation testing enthusiast looking for some exciting project ideas to enhance your skills?",
},
{
  image: pic3,
  courseName: "How Long Would it Take to Learn Motion Graphics?",
  courseDescription: "Motion graphics is like creating moving pictures with design and animation. It’s a cool way to make things look lively and interesting.",
}]

 const courseFullstack =[{
  image: pic4,
  courseName: "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
  courseDescription: "As a full stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development,",
 },
 {
  image: pic5,
  courseName: "The Ultimate Guide to Real-World Full Stack Development Applications",
  courseDescription: "Full stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.",
 },
 {
  image: pic6,
  courseName: "Best Ways to Learn Full Stack Development in 2023",
  courseDescription: "Full stack development is and will be a promising and an in-demand career in the upcoming years. According to Stack Overflow,",
 }
]

const courseDatascience =[{
  image: pic7,
  courseName: "10 Best Data Science Online Courses for Beginners | 2023",
  courseDescription: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most sought-after Technical fields.",
 },
 {
  image: pic8,
  courseName: "Everything about Data Scientist Salary in India | 2023",
  courseDescription: "Are you curious about the highly sought-after field of data science and the potential it holds for your career?",
 },
 {
  image: pic9,
  courseName: "10 Best Data Science Frameworks in 2023",
  courseDescription: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks. These frameworks are used by data scientists to easier their work",
 }]

 const courseCybersecurity = [{
  image: pic10,
  courseName: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
  courseDescription: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
 },
 {
  image: pic11,
  courseName: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
  courseDescription: "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, ",
 },
 {
  image: pic12,
  courseName: "Top 10 Ethical Hacking Books for Beginner to Advanced",
  courseDescription: "Before jumping into the list of the top 10 ethical hacking books, let’s speak a bit about cybersecurity. I’m sure you already know “what cybersecurity is” but here’s a refresher.",
 }]

 const courseCareer = [{
  image: pic13,
  courseName: "How to Become a UI/UX Designer: 10 Steps to Master the Craft",
  courseDescription: "Have you ever wondered what it takes to create captivating designs that leave users delighted and eager for more? Are you fascinated by the user experience of your favorite apps or websites?",
 },
 {
  image: pic14,
  courseName: "Game Development Career 2023: The Ultimate Beginners Guide",
  courseDescription: "The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes with each passing moment.",
 },
 {
  image: pic15,
  courseName: "Top Skills Required to Become a Digital Marketer",
  courseDescription: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect with their target audience. ",
 }]

export default function App() {
  return (
    <div className="App">
    {/* navbar */}
 
      <nav className="navbar navbar-expand-sm bg-body-tertiary ">
        <img src={logo} alt='' />

        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">COURSES</Link>
              </li>
              <li className="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LIVE CLASSES
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="#">Full Stack Devolpment</Link></li>
                  <li><Link class="dropdown-item" to="#">IIT-M Advanced Programming</Link></li>
                  <li><Link class="dropdown-item" to="#">Automation & Testing Program</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRACTICE
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="#">Codekata</Link></li>
                  <li><Link class="dropdown-item" to="#">Webkata</Link></li>
                  <li><Link class="dropdown-item" to="#">IDE-Online Compiler</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  RESOURCES
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="#">REWARDS</Link></li>
                  <li><Link class="dropdown-item" to="#">REFERRAL</Link></li>
                  <li><Link class="dropdown-item" to="#">FORUM SUPPORT</Link></li>
                  <li><Link class="dropdown-item" to="#">BLOGS</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OUR PRODUCTS
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="#">HackerKid</Link></li>
                  <li><Link class="dropdown-item" to="#">GUVI for Corporates</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <div className='container-fluid text-center'>
      <img height={"200px"} width={"1000px"} src={guviLogo} alt='' />
      </div>
      <Navigation />
      
      <Routes>
        <Route path="/all" element={<Allcourse />} />
        <Route path="/fullstackdevelopment" element={<Fullstacknav />} />
        <Route path="/datascience" element={<Datasciencenav />} />
        <Route path="/cybersecurity" element={<Cybersecuritynav/>} />
        <Route path="/career" element={<Careernav />} />
      </Routes>

    </div>

  );
}

//navigation component
function Navigation() {
  return (
    <div className='container-fluid'>
      <ul class="nav justify-content-center mt-2">
        <li class="nav-item">
          <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/all">ALL</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/datascience">DATA SCIENCE</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/cybersecurity">CYBER SECURITY</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/career">CAREER</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}

// All course card component
function Allnav({ course }) {
  return (
    <div className="card m-3" style={{ width: "300px" }}>
      <img src={course.image} className="card-img-top" height="200px" width="200px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{course.courseName}</h5>
        <p className="card-text">{course.courseDescription}</p>
        <Link style={{ color: "green" }} class="nav-link active" aria-current="page" to="#">Read more &#62;&#62;</Link>
      </div>
    </div>

  )
}
//all course mapping
function Allcourse() {
  return (
    
      <div className='card-container'>
        {courseDetails.map((course) => (
          <Allnav course={course} />
        ))}
      </div>
    
  )
}

//Fullstack course card component
function Fullstack({fsd}){
  return(
    <div className="card m-3" style={{ width: "300px" }}>
    <img src={fsd.image} className="card-img-top" height="200px" width="200px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{fsd.courseName}</h5>
        <p className="card-text">{fsd.courseDescription}</p>
        <Link style={{ color: "green" }} class="nav-link active" aria-current="page" to="#">Read more &#62;&#62;</Link>
      </div>
    </div>
  )
}
//Fullstack course mapping
function Fullstacknav(){
  return(
    <div className='card-container'>
        {courseFullstack.map((course) => (
          <Fullstack fsd={course} />
        ))}
      </div>
  )
}

//Datascience course card component
function Datascience({datascience}){
  return(
    <div className="card m-3" style={{ width: "300px" }}>
    <img src={datascience.image} className="card-img-top" height="200px" width="200px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{datascience.courseName}</h5>
        <p className="card-text">{datascience.courseDescription}</p>
        <Link style={{ color: "green" }} class="nav-link active" aria-current="page" to="#">Read more &#62;&#62;</Link>
      </div>
    </div>
  )
}
//Fullstack course mapping
function Datasciencenav(){
  return(
    <div className='card-container'>
        {courseDatascience.map((course) => (
          <Datascience datascience={course} />
        ))}
      </div>
  )
}

//Cybersecurity course card component
function Cybersecurity({cyber}){
  return(
    <div className="card m-3" style={{ width: "300px" }}>
    <img src={cyber.image} className="card-img-top" height="200px" width="200px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cyber.courseName}</h5>
        <p className="card-text">{cyber.courseDescription}</p>
        <Link style={{ color: "green" }} class="nav-link active" aria-current="page" to="#">Read more &#62;&#62;</Link>
      </div>
    </div>
  )
}
//Cybersecurity course mapping
function Cybersecuritynav(){
  return(
    <div className='card-container'>
        {courseCybersecurity.map((course) => (
          <Cybersecurity cyber={course} />
        ))}
      </div>
  )
}

//Carrer course card component
function Career({career}){
  return(
    <div className="card m-3" style={{ width: "300px" }}>
    <img src={career.image} className="card-img-top" height="200px" width="200px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{career.courseName}</h5>
        <p className="card-text">{career.courseDescription}</p>
        <Link style={{ color: "green" }} class="nav-link active" aria-current="page" to="#">Read more &#62;&#62;</Link>
      </div>
    </div>
  )
}
//Career course mapping
function Careernav(){
  return(
    <div className='card-container'>
        {courseCareer.map((course) => (
          <Career career={course} />
        ))}
      </div>
  )
}