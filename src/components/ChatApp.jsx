import React from 'react';
import Chatbot from 'react-best-chatbot';
import { Close, Refresh } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ModalImage from "react-modal-image";
import IBITS from '../assets/images/puporg/IBITS.jpg';
import ACES from '../assets/images/puporg/ACES.png';
import HRSS from '../assets/images/puporg/HRSS.png';
import JPIA from '../assets/images/puporg/JPIA.jpg';
import PIIE from '../assets/images/puporg/PIIE.jpg';
import CSC from '../assets/images/puporg/CSC.jpg';
import YES from '../assets/images/puporg/YES.png';
import OSAS from '../assets/images/puporg/OSAS.jpg';
import campus from '../assets/images/campus.png';
import ISKOM from '../assets/images/puporg/ISKOM.jpg';
import bot3 from '../assets/images/bot3.png';
import puplogo from '../assets/images/puplogo.png';


const theme = {
  primaryColor: "#a1051d",
  secondaryColor: "cornsilk",
  textPrimaryColor: "#FFFFFF",
  textSecondaryColor: "black",
  background: "whitesmoke",
  containerStyle: {
    position: "relative",
    display: 'flex',
    height: "99vh",
    width: "100%"
  },
};
const options = {
  header: (
    <div className='chatBotHeader'>
      Chat
    </div>
  ),
  hidden: false,
  open: true,
  endContent: "End of Conversation 👋",
  botAvatarSrc: "https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg",
  messageDelay: 600,
  loadingComponent: (
    <div>
      <img className='loading' src="https://cdn.dribbble.com/users/55974/screenshots/3967147/dribbble_still_2x.gif?compress=1&resize=400x300" alt='loading' width="75px" ></img>
    </div>
  ),
  refreshComponent: (
    <div className='refresh'>
      <Refresh />
    </div>
  ),
  closeComponent: (
    <div className='close'>
      <Close />
    </div>
  ),
  chatButtonComponent: (
    <div className='close-container' >
      <div className='chatHome'>
      <div className='returnQuotes'>
      "We're no longer teaching people how to communicate with systems, we're teaching systems to communicate with people."
        </div>
        
        <img src={(bot3)} className='botImage' width='150px' alt="botAvatar" ></img>

        <div className='chatNav'>
          <Link to="/homepage">
            <button className='returnBtn'><h3>GO TO HOME </h3></button>
          </Link>
          <button className='returnBtn'><h3>BACK TO CONVERSATION </h3></button>
        </div>
      </div>
    </div>
  ),
  openingCallback: () => { },
  closingCallback: () => { },
  endingCallback: () => { },
  sendingMessageCallback: () => { },
};

const admission = () => {
  return (
    <div className='nobubble'>
      <p>All admissions applications for new students are processed online through the PUP iApply. Applicants should meet the following requirements. See link for more information.</p><br />
      <p><h4 className='chatTitle'> Applying Online</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=62'>https://osssac.pup.edu.ph/knowledgebase.php?article=62 </a></p><br />
      <p><h4 className='chatTitle'> Admission to PUP</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=61'>https://osssac.pup.edu.ph/knowledgebase.php?article=61 </a></p><br />
      <p><h4 className='chatTitle'> PUP iApply</h4><a href='https://www.pup.edu.ph/iapply/caepup'>https://www.pup.edu.ph/iapply/caepup </a></p><br />
      <p><h4 className='chatTitle'>Admission Criteria for CAEPUP</h4><a href='https://drive.google.com/file/d/1WNusy51XI-eXNZPg7zBfTV4nkpBThD6x/view'> https://drive.google.com/file/d/1WNusy51XI-eXNZPg7zBfTV4nkpBThD6x/view</a></p><br />
      <p><h4 className='chatTitle'>Re-Admission to PUP</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=67'> https://osssac.pup.edu.ph/knowledgebase.php?article=67</a></p><br />
      <p><h4 className='chatTitle'>Transfer Admission</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=66'> https://osssac.pup.edu.ph/knowledgebase.php?article=66</a></p><br />
      <p><h4 className='chatTitle'>Claiming e-Permit</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=63'> https://osssac.pup.edu.ph/knowledgebase.php?article=63</a></p><br />
    </div>
  )
};
const qualified = () => {
  return (
    <div className='nobubble'>
      <p>If you are CAEPUP qualifiers and admitted to PUPBC Campus, you may submit your SAR Form and Application Form to PUP-Biñan Campus.</p><br />
      <p><h4 className='chatTitle'> SAR-Form</h4><a href='https://docs.google.com/document/d/1l64hmfF2L7JeKQ4w6pmgkluEHfSfi87s/edit?fbclid=IwAR13GBTs4atAZQ7Se-078hy0zCbKIDVUWWcfwqqWr1EPa4U6wbFDwrv-FDM'>https://docs.google.com/document/d/1l64hmfF2L7JeKQ4w6pmgkluEHfSfi87s/edit?fbclid=IwAR13GBTs4atAZQ7Se-078hy0zCbKIDVUWWcfwqqWr1EPa4U6wbFDwrv-FDM
      </a></p><br />

      <p><h4 className='chatTitle'>Application Form</h4><a href='https://docs.google.com/document/d/1oQX_jaaLTc_I4awJt6Hs7OEO2EQk3FUY/edit?fbclid=IwAR10l-cFsnhVQFNeDMlmb_giM4hHl_fPkucMWIVKx9ipLhhel4DqdZV9ddU'>https://docs.google.com/document/d/1oQX_jaaLTc_I4awJt6Hs7OEO2EQk3FUY/edit?fbclid=IwAR10l-cFsnhVQFNeDMlmb_giM4hHl_fPkucMWIVKx9ipLhhel4DqdZV9ddU </a></p><br />
    </div>
  );
};
const tuition = () => {
  return (
    <div className='nobubble'>
      <h4>There is no tuition fee in PUPBC</h4><br />
      <p>In accordance to the REPUBLIC ACT No. 10931 which state as "AN ACT PROMOTING UNIVERSAL ACCESS TO QUALITY TERTIARY EDUCATION BY PROVIDING FOR FREE TUITION AND OTHER SCHOOL FEES IN STATE UNIVERSITIES AND COLLEGES, LOCAL UNIVERSITIES AND COLLEGES AND STATE-RUN TECHNICAL-VOCATIONAL INSTITUTIONS, ESTABLISHING THE TERTIARY EDUCATION SUBSIDY AND STUDENT LOAN PROGRAM, STRENGTHENING THE UNIFIED STUDENT FINANCIAL ASSISTANCE SYSTEM FOR TERTIARY EDUCATION, AND APPROPRIATING FUND."</p><br />
      <p> TAKE NOTE: A State university is with 0 fees 0 tuition meaning no payment
        transaction. If there are delinquent students who failed the units, automatic failing students
        have correspond status that can be found in the student handbook, but 0 tuition fee after
        admitted to the University.
      </p>
    </div>
  );
};
const enrollment = () => {
  return (
    <div className='nobubble'>
      <p>Here's the link of how to enroll in PUP.</p>
      <a href='https://osssac.pup.edu.ph/knowledgebase.php?article=65'>https://osssac.pup.edu.ph/knowledgebase.php?article=65</a><br />
      <br /><p>If you are officially student of PUP Binan Campus, follow this step:</p>
      <p>1. Go to PUPSIS, login your account.</p>
      <p>2. Enroll in all the subjects allowed in your course per semester. </p>
      <p>3. Download the Slip Confirmation as your proof of online registration.</p>
      <p>4. You may now download your Certificate of Registration.</p>
    </div>
  );
};
const petition = () => {
  return (
    <div className='nobubble'>
      <p>Students with petitioned subjects may now also enroll through online ACE.</p><br />
      <p><h4 className='chatTitle'>Online Ace Procedure</h4><a href='https://www.facebook.com/CSCPUPBN/posts/pfbid02cxw3fjyb48kvMGSAkNk6Z2hiuRWJTnf93xd3EdT9q116nLXku6rGThNytJ4qx28Yl'>https://www.facebook.com/CSCPUPBN/posts/pfbid02cxw3fjyb48kvMGSAkNk6Z2hiuRWJTnf93xd3EdT9q116nLXku6rGThNytJ4qx28Yl</a></p><br />
      <p>For inquiries and other enrollment related concerns, please contact Sir Jhun Maravilla at jjbmaravilla@pup.edu.ph</p>

    </div>
  );
};
const puporg = () => {
  return (
    <div className='orgbubble'>
      You can visit their facebook page for more updates.
      <div className='orgSlide'>


        <div className='orgPage'>
          <img src={(IBITS)} width='80px' alt="ibits" ></img>
          <div className='orgName'>Institute of Bachelors in Information Technology Studies (IBITS)</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/iBITSPUPBC">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(ACES)} width='80px' alt='aces'></img>
          <div className='orgName'>Association of Computer Engineering Students (ACES) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/acespupbc">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(PIIE)} width='80px' alt='piie'></img>
          <div className='orgName'>Philippine Institute of Industrial Engineers (PIIE) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/PIIEPUPBSC">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(JPIA)} width='80px' alt='jpia'></img>
          <div className='orgName'> Junior Philippine Institute of Accountants (JPIA)</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/PUPJPIABinan"> Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(HRSS)} width='80px' alt='hrss'></img>
          <div className='orgName'>Human Resource Students Society (HRSS)</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/HRSSPUPBC">Visit Page</a> </button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(YES)} width='80px' alt='yes'></img>
          <div className='orgName'>Young Educators' Society (YES) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/pupbcyesorg"> Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(CSC)} width='80px' alt='csc'></img>
          <div className='orgName'>Central Student Council (CSC) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/CSCPUPBN"> Visit Page</a> </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const documents = () => {
  return (
    <div className='nobubble'>
      <p><h4>Here are the following procedures and requests forms from the Office of the Student Affairs and Services (OSAS) concerns and online transactions. </h4></p><br />
      <li>Requests will be INVALID if the steps are not followed and required attachments are not submitted or lacking. </li><br />
      <li>Transcript of Records, Certified True Copy of Grades, Certificate of Enrollment concerns and requests should be directly addressed to the Campus Registrar.</li><br />
      <p> You may contact the person in charge through:</p>
      <p>quintojocelyn10@yahoo.com.ph</p>
      <p>jqquinto@pup.edu.ph</p>
      <p>pupbinancampus@yahoo.com</p>
    </div>
  );
};
const request = () => {
  return (
    <div className='nobubble'>
      <p><h4>You can request forms from the Office of the Student Affairs and Services (OSAS) concerns and online transactions. </h4></p><br />
      <p><h4 className='chatTitle'>Office of the Student Affairs and Services Forms</h4><a href='https://docs.google.com/forms/d/e/1FAIpQLSfjNRQ7qpGlNJqq4S5dm77BjhuOSEkad1fuVMqg3Pxu-rIeEQ/viewform?usp=pp_url'>https://docs.google.com/forms/d/e/1FAIpQLSfjNRQ7qpGlNJqq4S5dm77BjhuOSEkad1fuVMqg3Pxu-rIeEQ/viewform?usp=pp_url</a></p><br />
      <p><h4 className='chatTitle'>Online Request Forms</h4><a href='https://docs.google.com/forms/d/e/1FAIpQLSe2agSc3Oh_AR7LqREp6Fhq3jBnmKHhICZoub5is6syVIBXPg/viewform?fbclid=IwAR0WlljF8QKP_26AWUWJM65SasR8v_pHzH_WoYGHLHMxsKHuECOuTGLxkr0'>https://docs.google.com/forms/d/e/1FAIpQLSe2agSc3Oh_AR7LqREp6Fhq3jBnmKHhICZoub5is6syVIBXPg/viewform?fbclid=IwAR0WlljF8QKP_26AWUWJM65SasR8v_pHzH_WoYGHLHMxsKHuECOuTGLxkr0</a></p>
    </div>
  );
};
const payments = () => {
  return (
    <div className='nobubble'>
      <p>You may pay to LANDBANK all your payables to PUP, or you may use fund transfer and follow  the instructions below.<br />
        <a href='https://web.facebook.com/HSASPUPBC/posts/for-your-information-you-may-pay-to-landbank-all-your-payables-to-pup-or-you-may/306832960710000/?_rdc=1&_rdr'>https://web.facebook.com/HSASPUPBC/posts/pfbid0t4N3SVPZf1mhfh93g84F3D8tDYSsRPGqTnHyZtxhwQCAkB615mtJQaGMqXQf1NhZl?_rdc=1&_rdr</a></p><br />
      <p>TAKE NOTE: No over the counter for payment transactions as of the moment. LANDBANK only is use for payment/online transaction. There are online transactions but they are not allowed in GCash.
      </p>
    </div>
  );
};
const president = () => {
  return (
    <div className='nobubble'>
      <h4>PUP President</h4><br />
      <ModalImage className='pres'
        small={"https://pbs.twimg.com/media/EQKE_RiVAAA_cCT.jpg"}
        large={"https://pbs.twimg.com/media/EQKE_RiVAAA_cCT.jpg"}
        hideDownload={true}
        alt="president"
      />
      <div className='pres-Info'><p>The Board of Regents voted in favor of Dr. Manuel M. Muhi as 13th President of the Polytechnic University of the Philippines. He is the incumbent Vice President for Academic Affairs (VPAA). <br />
        <br />Dr. Muhi, a licensed civil engineer, professional engineering manager and registered ASEAN engineer, is a proud alumnus of the university. He has since served the Sintang Paaralan in various capacities: as Chairperson of the Department of Civil Engineering, as Dean of the College of Engineering, and then as Vice President for Research, Extension, Planning and Development. During his stint as VPAA, he concurrently served as Executive Vice President.</p></div>
    </div>
  );
};
const pupsis = () => {
  return (
    <div className='nobubble'>
      <h4>PUP Student Information System (PUPSIS)</h4> <br />
      <p >Click the link to access or login your PUPSIS account. <br />
        <a href='https://sisstudents.pup.edu.ph/'>https://sisstudents.pup.edu.ph/</a></p>
      <br />
      <p>A student's guide on how to use the Student Information System.<br />
        <a href='https://www.youtube.com/embed/bYJWITVXMEc'>https://www.youtube.com/embed/bYJWITVXMEc</a></p>
    </div>
  )
};
const webpage = () => {
  return (
    <div className='orgbubble'>
      Here's the official PUPBC websites, you can visit:
      <div className='orgSlide'>

        <div className='orgPage'>
          <img src={(puplogo)} width='80px' alt="ibits" ></img>
          <div className='orgName'>PUPBC Official Facebook Page</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href='https://web.facebook.com/PUP-Bi%C3%B1an-Page-101117505176956'>Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(OSAS)} width='80px' alt='osas'></img>
          <div className='orgName'> PUPBC Student Affairs and Services</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/HSASPUPBC"> Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(CSC)} width='80px' alt='csc'></img>
          <div className='orgName'>Central Student Council</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/CSCPUPBN">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(campus)} width='80px' height={70} alt='pupbccom'></img>
          <div className='orgName'>PUPBC Community Page </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href='https://web.facebook.com/groups/pupbccommunity'>Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(ISKOM)} width='80px' height={70} alt='iskom'></img>
          <div className='orgName'>PUPBC ISKOMUNITY A.Y 2022-2023</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href='https://web.facebook.com/groups/519226440018420'>Visit Page</a></button>
          </div>
        </div>

      </div>
    </div>
  );
};
const courses = () => {
  return (
    <div className='nobubble'>
      <div className='courses'>
        <p><h4>Academic Program offerings in PUP Biñan, Laguna (Campus) </h4></p><br />
        <ul className='courseBullet'>
          <li>Bachelor in Elementary Education (BEED)</li>
          <li>Bachelor of Science in Accountancy (BSA)</li>
          <li>Bachelor of Science in Business Administration major in Human Resource Management (BSBA-HRM)</li>
          <li>Bachelor of Science in Computer Engineering (BSCpE)</li>
          <li>Bachelor of Science in Industrial Engineering (BSIE)</li>
          <li>Bachelor of Science in Information Technology (BSIT)</li>
          <li>Bachelor of Secondary Education major in English (BSEDEN)</li>
          <li>Bachelor of Secondary Education major in Social Studies (BSEDSS)</li>
          <li>Diploma in Computer Engineering Technology (DCET)</li>
          <li>Diploma in Information Communication Technology (DICT)</li>
        </ul>
        <p><h4>New Course Offered</h4></p>
        <ul><li>Bachelor of Science in Psychology</li></ul>
        <p>You can also visit our <a href='https://jodylicious.github.io/pupbcaskolar/'>PUPBC Askolar</a> website for more information. </p>
      </div>
    </div>
  );
};
const appointment = () => {
  return (
    <div className='nobubble'>
      <h4>For Appointment: </h4>
      <p>Directly send email through pupbinancampus@yahoo.com or contact 0967-550-4945 for the schedule of appointment. </p>
    </div>
  );
};
const lostID = () => {
  return (
    <div className='nobubble'>
      <p>Lost ID is handled by Ms. Jurado as well as the lost registration certificate, but will be processed by the campus
        registrar. The loss of ID and COR (Certificate of Registration) needs to request an affidavit of
        loss to the municipality to notarize that will present a note to reprocess a new application for a
        new ID or COR. Requesting COR cost 150 pesos and need to present an affidavit of loss. </p><br />
      <p>TAKE NOTE: Printing of ID is free and it will happen in the main campus because the university
        president's signatures are not allowed to be shared and must be on the main campus only.</p>
    </div>
  )
}

// ------------------- MESSAGE COVERSATION FLOW -------------------------
const steps = [
  {
    id: "greet",
    content: "Hi there! I'm Askolar, your virtual assistant and I am here to assists you. Please choose one of the options below. ",
    goTo: "choices",
  },
  {
    id: "choices",
    content: "What are your concerns?",
    options: [
      {
        content: "Admission",
        value: "admision",
        goTo: 1,
      },
      {
        content: "Enrollment",
        value: "enrollment",
        goTo: 2,
      },
      {
        content: "PUP Organization",
        value: "organization",
        goTo: 3,
      },
      {
        content: "Document Request / Certificates and Forms",
        value: "documents",
        goTo: 4,
      },
      {
        content: "Payments",
        value: "payments",
        goTo: 5,
      },
      {
        content: "Campus Information",
        value: "campus-info",
        goTo: "information",
      },
      {
        content: "PUP Student Information System",
        value: "pupsis",
        goTo: 7,
      },
      {
        content: "Appointments",
        value: "appointments",
        goTo: 8,
      },
      {
        content: "Other PUPBC Concerns",
        value: "concerns",
        goTo: 9,
      },


    ],
  },
  // *********** OTHER CONCERNS **********************
  {
    id: 9,
    content: "What are your concerns?",
    goTo: "choices2",
  },
  {
    id: "choices2",
    options: [
      {
        content: "Want to transfer in another PUP Branch?",
        value: "transfer",
        goTo: "puptransfer",
      },
      {
        content: "Want to re-admit in the PUPBC?",
        value: "readmit",
        goTo: "readmit",
      },
      {
        content: "I lost my school ID?",
        value: "lostID",
        goTo: "lostID",
      },
      {
        content: "I can't enroll this semester",
        value: "notenroll",
        goTo: "notenroll",
      },
      {
        content: "I have no grade yet in my subjects",
        value: "nograde",
        goTo: "nograde",
      },
      {
        content: "I have an INC grade in my subjects",
        value: "inc",
        goTo: "inc",
      },
// to be continued..
    ],
  },

  // other concerns answers//
  {
    id: "puptransfer",
    content: " Sorry this can be answered by the campus registrar and depends on the different cases by the transferring students. ",
    goTo: "others",
  },
  {
    id: "readmit",
    content: " Sorry this can be answered by the campus registrar and this is a case to case basis depends on the reasons of a returnee students.",
    goTo: "others",
  },
  {
    id: "lostID",
    component: {
      content: lostID,
      bubble: false,
    },
    goTo: "others",
  },
  {
    id: "nograde",
    content: "You might experience late encoding of grades by the professors especially those who have pre-requisite subjects or you have an INC grades. ",
    goTo: "others",
  },
  {
    id: "inc",
    content: "Sorry I can't answer that for now. It depends on your professors in what you can do. Please ask them about your INC grade.",
    goTo: "others",
  },
  {
    id: "notenroll",
    content: "You might experience late encoding of grades by the professors or SIS issue. You may ask Sir Jan Maravilla for your enrollment concerns.",
    goTo: "others",
  },

  // *********** ADMISSION CATEGORY **********************
  {
    id: 1,
    component: {
      content: admission,
      bubble: false,
    },
    goTo: 'admissionOptions',
  },
  {
    id: 'admissionOptions',
    options: [
      {
        content: "Tuition Fee",
        value: "tuition",
        goTo: 1.1,
      },
      {
        content: "Available Courses",
        value: "courses",
        goTo: 1.2,
      },
      {
        content: "CAEPUP Qualified",
        value: "qualified",
        goTo: 1.3,
      },
      {
        content: "PUP Organization",
        value: "puporg",
        goTo: 3,
      },
      {
        content: "Campus Information",
        value: "information",
        goTo: 'information',
      },
    ]
  },
  // *************** ADMISSION ANSWERS  ****************
  {
    id: 1.1,
    component: {
      content: tuition,
      bubble: false,
    },
    goTo: 'others',
  },
  {
    id: 1.2,
    component: {
      content: courses,
      bubble: false,
    },
    goTo: 'others',
  },
  {
    id: 1.3,
    component: {
      content: qualified,
      bubble: false,
    },
    goTo: 'others',
  },

  // ************** ENROLLMENT ****************
  {
    id: 2,
    component: {
      content: enrollment,
      bubble: false,
    },
    goTo: 'petition',
  },
  {
    id: "petition",
    component: {
      content: petition,
      bubble: false,
    },
    goTo: 'others',
  },

  // ************* PUP ORGANIZATION **************
  {
    id: 3,
    component: {
      content: puporg,
      bubble: false,
    },
    goTo: "others",
  },
  // ****************** DOCUMENT REQUEST **************
  {
    id: 4,
    component: {
      content: documents,
      bubble: false,
    },
    goTo: "request",
  },
  {
    id: "request",
    component: {
      content: request,
      bubble: false,
    },
    goTo: "others",
  },

  // *********** PAYMENTS ********************
  {
    id: 5,
    component: {
      content: payments,
      bubble: false,
    },
    goTo: "others",
  },

  // ************** CAMPUS INFORMATION CATEGORY ************************
  {
    id: "information",
    content: "Here's some information about the campus",
    options: [
      {
        content: "PUP Established",
        value: "established",
        goTo: 6.1,
      },
      {
        content: "PUPBC Official Websites",
        value: "webistes",
        goTo: 6.2,
      },
      {
        content: "Location",
        value: "location",
        goTo: 6.3,
      },
      {
        content: "Available Courses",
        value: "courses",
        goTo: 6.4,
      },
      {
        content: "PUPBC Organization",
        value: "organization",
        goTo: 6.5,
      },
      {
        content: "PUPBC Administrators",
        value: "admin",
        goTo: 6.6,
      },
      {
        content: "PUP President",
        value: "pup-president",
        goTo: 6.7,
      },
    ],
  },

  // *************CAMPUS INFORMATION ANSWERS *******************
  {
    id: 6.1,
    content: (
      <div>
        <p>The PUP Biñan Campus was established and created through a Memorandum of Agreement (MOA) between the University and the City Government of Biñan in 2010.</p>
      </div>
    ),
    goTo: 'others',
  },
  {
    id: 6.2,
    component: {
      content: webpage,
      bubble: false,
    },
    goTo: 'others',
  },
  {
    id: 6.3,
    content: (
      <div>
        <h4>Location</h4><br />
        <ModalImage className='pup'
          small={"https://philippinesgraphic.com.ph/wp-content/uploads/2021/02/pup12.jpg"}
          large={"https://philippinesgraphic.com.ph/wp-content/uploads/2021/02/pup12.jpg"}
          hideDownload={true}
          alt="pupcampus"
        />
        <p>Polytechnic University of the Philippines - Binan Campus is in Brgy. Zapote, City of Binan, Laguna. It is behind the Municipal Hall of Binan and Alonte Sports Arena. </p>
      </div>
    ),
    goTo: 'others',
  },
  {
    id: 6.4,
    component: {
      content: courses,
      bubble: false,
    },
    goTo: 'others',
  },
  {
    id: 6.5,
    component: {
      content: puporg,
      bubble: false,
    },
    goTo: 'others',
  },
  {
    id: 6.6,
    content: (
      <div className='admin'>
        <h4>PUPBC Administrators</h4><br />
        <h4>Dr. Margarita Sevilla</h4> <p>Campus Director</p>
        <h4>Ms. Cheryl Joyce Jurado</h4><p> Head of PUPBC Student Affairs and Services</p>
        <h4>Ms. Jocelyn Q. Quinto</h4><p>Campus Registrar</p>
        <h4>Ms. Maria Gemelyn S. Austria </h4><p>Head of Academic Programs</p>
        <h4>Mr. Manolo David Rivera</h4><p>Collecting and Disbursing Officer</p>
        <h4>Ms. Francheska Montanez</h4><p>Campus Librarian</p>
        <h4>Ms. Widonna Cuenca</h4><p>Admin Staff</p>
        <h4>Engr. Jan Maravilla</h4><p>Admin Staff</p>
      </div>
    ),
    goTo: 'others',
  },
  {
    id: 6.7,
    component: {
      content: president,
      bubble: false,
    },
    goTo: 'others',
  },

  // *************** PUP SIS *****************
  {
    id: 7,
    component: {
      content: pupsis,
      bubble: false,
    },
    goTo: 'others',
  },

  // *************** APPOINTMENTS************
  {
    id: 8,
    component: {
      content: appointment,
      bubble: false,
    },
    goTo: 'others',
  },

  // ************* ENDING QUESTION ***************
  {
    id: "others",
    content: "Is there anything else I can help you with?",
    options: [
      {
        id: 'yes',
        content: 'Yes, please ',
        goTo: "choices",
      },
      {
        id: "no",
        content: "No, thanks",
        goTo: "end",
      },
    ],
  },
  {
    id: "end",
    content: "Sorry to see you go ☹. I hope I gave you good service and assistance in answering your concern. This message will stop from now on. It's nice to chat with you.",
    goTo:"plug",
  },
  {
    id: "plug",
    content: "If your questions are not answered, you can write your concerns on our feedback and concern form. Thank you.",
    end: true,
  },
];

// CHATBOT MESSAGE CONFIG
const Chat = () => {
  return (
    <div>
      <Chatbot
        steps={steps}
        theme={theme}
        options={options}
      />
    </div>
  );
}
export default Chat;