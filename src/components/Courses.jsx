import React from "react";

const Courses = () => {
    return (
        <div className="container">
            <div className="row">
                <h3 className="courseTitle">COURSES</h3>
                {/* bsit */}
                <div className="column">
                    <h4 className="courseList">Bachelor of Science in Information Technology</h4>
                    <img className="poster" src="http://www.hallmarksconsultancy.com/uploads/9/7/7/1/97716354/information-technology-hallmarks_orig.jpg" alt='courseImage'></img>

                    <p className="courseInfo">It provides the student with the knowledge to successfully apply information technology theory and principles to address real world business opportunities and challenges.</p>
                </div>

                {/* bscpe */}
                <div className="column">
                    <h4 className="courseList"> Bachelor of Science in Computer Engineering</h4>
                    <img className="poster" src="https://mdbf.atlas.edu.tr/uploads/bolumler/bilgisayar-muhendisligi-688471.jpg" alt='courseImage'></img>

                    <p className="courseInfo">It is a program that embodies the science and technology of design, development, implementation, maintenance, and integration of software and hardware.</p>
                </div>
                {/* dcet */}
                <div className="column">
                    <h4 className="courseList"> Diploma in Computer Engineering Technology </h4>
                    <img className="poster" src="https://www.itnewsafrica.com/wp-content/uploads/2022/05/Comp-engine.jpg" alt='courseImage'></img>

                    <p className="courseInfo"> It prepares the student to use basic engineering principles and technical skills for installing, servicing, and maintaining computers, peripherals, networks, and microprocessor and computer-controlled equipment.</p>
                </div>
                {/* dict */}
                <div className="column">
                    <h4 className="courseList"> Diploma in Information Communication Technology  </h4>
                    <img className="poster" src="https://lh3.googleusercontent.com/igd2OV76U_lDE_VAtvYWXShVuyodVdDA8R9VLHwCKR9V5g5kDrTtDwfGvzCmcnuxWhE9VB9EISDD6jp4VwGagr0ePOJojS6NeAQp3g" alt='courseImage'></img>

                    <p className="courseInfo"> It intends equip learners with wide range of software, technical, and technological ICT skills. The students is expected to develop and apply ICT solutions to solve practical business issues.</p>
                </div>
                {/* beed */}
                <div className="column">
                    <h4 className="courseList"> Bachelor of Elementary Education </h4>
                    <img className="poster" src="https://dailytimes.com.pk/assets/uploads/2017/10/23/education-copy-1280x720.jpg " alt='courseImage'></img>

                    <p className="courseInfo"> It provides academic and appropriate training for future elementary school teachers of Grades 1 - 6 through the general education courses, professional education, and specialization courses. </p>
                </div>
                {/* bsedss */}
                <div className="column">
                    <h4 className="courseList"> Bachelor of Secondary Education Major in Social Studies </h4>
                    <img className="poster" src="https://julieharrison6.weebly.com/uploads/8/5/2/1/85211642/social-studies_2.jpg " alt='courseImage'></img>

                    <p className="courseInfo">It provides the student with the knowledge and skills in teaching secondary students about the complex, culturally rich world of the 21st century.</p>
                </div>
                {/* bseden */}
                <div className="column">
                    <h4 className="courseList">  Bachelor of Secondary Education Major in English </h4>
                    <img className="poster" src="http://www.pathstodream.org/wp-content/uploads/2022/01/13.jpg " alt='courseImage'></img>

                    <p className="courseInfo">It provides the students with the necessary foundations, principles, and current strategies that they can apply in teaching English as a second language. </p>
                </div>
                {/* bsie */}
                <div className="column">
                    <h4 className="courseList">Bachelor of Science in Industrial Engineering  </h4>
                    <img className="poster" src="https://d2n4wb9orp1vta.cloudfront.net/cms/brand/pm/2022-pm/0121-pm-ayb-gettyimages-1263390703.jpg" alt='courseImage'></img>

                    <p className="courseInfo"> It provides the students with knowledge and skills needed for designing, installing, managing, and maintaining production/manufacturing systems. </p>
                </div>

                {/* bsa */}
                <div className="column">
                    <h4 className="courseList">Bachelor of Science in Accountancy </h4>
                    <img className="poster" src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/unr/2020/08/10171857/unr-macc-what-is-the-difference-between-accounting-and-accountancy-image.jpg " alt='courseImage'></img>

                    <p className="courseInfo">It provides general accounting education to learners who wish to pursue a professional career as accountants.</p>
                </div>
                {/* bsba */}
                <div className="column">
                    <h4 className="courseList">Bachelor of Science in Business Administration </h4>
                    <img className="poster" src="https://www.husson.edu/online/_images/iStock-1213744660v3.jpg" alt='courseImage'></img>

                    <p className="courseInfo">It provides students with training in core principles of business and with critical and analytical skills.</p>
                </div>
                {/* bspsy */}
                <div className="column">
                    <h4 className="courseList">Bachelor of Science in Psychology  </h4>
                    <img className="poster" src="https://www.mooc.org/hubfs/psych-fields-jpg.jpeg " alt='courseImage'></img>

                    <p className="courseInfo">It is designed to prepare students towards a scientific understanding of human behavior. Students will have the experiences in psychological evaluation, research work and community involvement. It also prepares the student for graduate work.</p>
                </div>

            </div>
        </div>
    );
};

export default Courses;