import React from "react";
import "./About.css";
import SecurePageSection from "./../SecurePageSection";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-container">
        <div className="about-box">
          <h2>Organisation Structure</h2>
          <p>
            The Jain Social Group (JSG) movement started in 1965 and was
            organised through its Jain Social Groups International Federation
            (JSGIF) in 1980 by Shri C. N. Sanghvi, Founder President. It covers
            more than 400 Groups at molecular level, spread across the world.
            The principal motto of JSG is to :
          </p>
          <h3>"WALK TOGETHER, TALK TOGETHER, ACT WITH ONE MIND"</h3>
          <p>
            This is the motivation for us to attain social and cultural
            objectives by spreading the feeling of friendship and brother-hood
            amongst all members, imparting the teaching of Lord Mahaveera, and
            to create a healthy Socialist, Secular and Democratic society and
            help in Nation building. The organisation structure constitutes of
            different bodies, each holding its own unique position in the
            structure, but with one binding slogan "Bandautvasee Prem" that
            provides a forum for social interaction to 65000+ Members.
          </p>
        </div>
        <div className="about-box">
          <h2>Activities of Federation</h2>
          <p>
            Jain Social Groups International Federation (JSGIF) contributes
            tremendously by bringing about a sense of unity amongst different
            sects (Firkas) of Jainism like Swetamber, Digambar, Sthanakwasi,
            Terapanthi, etc. and to active the object of "Bandhutvase Prem". To
            this objective, the Federation conducts various activities and
            programs at Group level, Region level and Federation level, like
          </p>
          <ul>
            <li>Workshops and Camps</li>
            <li>Samuhika Vivah & Lagna Mela</li>
            <li>Celebration of Utsavs</li>
            <li>Publication of Monthly magazine "Mangal Yatra"</li>
            <li>Conference & Seminar</li>
            <li>Cultural Activities</li>
            <li>Film Show</li>
            <li>Drama</li>
            <li>Picnic</li>
            <li>Cricket etc.</li>
          </ul>
        </div>
        <div className="about-box">
          <h2>JSG Movement on Internet</h2>
          <p>
            Federation has developed database website and maintained by
            Authorised Site Administrator for providing globally three types of
            information, 24 hours a day and 365 days a year as under :
          </p>
          <h3>General Information of Federation :</h3>
          <p>
            Database information of Federation Post, General Council Members,
            Groups of Federation, Members of Groups.
          </p>
          <h3>Current News of Federation :</h3>
          <p>
            Mangalyatra, Letter of President, Kal Aaj Aur Kal, Glimpsing of
            Activities etc.
          </p>
          <h3>Matrimonial Information of Jain Candidates : </h3>
          <p>
            Collection and Display of Jain Matrimonial Data with Quick Search
            option.
          </p>
          <h3>Jain Social Groups International Federation Headed by</h3>
          <ul>
            <li>Federation President and Team</li>
            <li>Regional Committee</li>
            <li>Zone Coordinator</li>
            <li>Activity Committee</li>
            <li>Regionwise General Council Committee and also YUVA Forums</li>
            <li>Supported by Couple Members</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
