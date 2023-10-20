import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Events from "views/IndexSections/Events.js";
import Signin from "views/IndexSections/Signin.js";
import Share from "views/IndexSections/Share.js";
import Contact from "views/IndexSections/Contact.js";
import Features from "views/IndexSections/Features.js";
import About from "views/IndexSections/About.js";
import Team from "views/IndexSections/Team.js";
import Courses from "./IndexSections/Courses";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            {
              localStorage.getItem('currentMember') ?
              <></>
              :
              <Signin />
            }
            <About />
            <Features />
            <Team />
            <Events />
            <Courses />
            <Contact />
            <Share />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
