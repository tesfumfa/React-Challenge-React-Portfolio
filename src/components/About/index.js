import React from 'react';
import ProfilePic from '../../assets/images/tesfa.jpg';

function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={ProfilePic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                    Hi I'm TESFALEM - an aspiring full-stack web developer based out of ottawa, Canada. My journey into tech started at  2008 when I shift from chemistry teacher to it instractor when i finish learning informatics from addis ababa university . I took the opportunity to reinvent myself and pursue a new and challenging career in teaching technology and web development.
                </p>
                <p>
                    I'm leveraging my teaching   background to build a more intuitive user experience on information technology teaching. I recently will  earn  a certificate in full-stack web development from the University of carleton , with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on the MERN technology stack. I’m excited to apply my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                </p>
                <p>
                    When I'm not coding I enjoy reading technology books, spending time with my family . 
                      </p>
            </div>
        </section>
    );
}

export default About;