import React from 'react';
import './App.css';
import Navbar from './Comp/Navbar';
import Header from './Comp/home-header';
import Software from './Comp/Software';
import Projects from './Comp/project-home';
import Contact from './Comp/contact-home';
import Footer from './Comp/footer';


function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
    </div>
  );
}

export default HomePage;
