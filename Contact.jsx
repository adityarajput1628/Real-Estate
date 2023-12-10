import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">We always ready to help bt providing the best services
          We beleive a good place to live can make your life better</span>
        
        <div className="flexColStart contactModes">
        {/*First Row*/}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCeneter icon">
                  <MdCall size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Call</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>

            {/*second mode*/}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCeneter icon">
                  <BsFillChatDotsFill size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="flexCenter button">Chat Now</div>
            </div>
          </div>

          {/*second row*/}

          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCeneter icon">
                  <BsFillChatDotsFill size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Vedio Call</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="flexCenter button">Vedio Call Now</div>
            </div>

            {/*Fourth mode*/}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCeneter icon">
                  <HiChatBubbleBottomCenter size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="flexCenter button">Message Now</div>
            </div>
          </div>

        </div>

        </div>
        {/*right side*/}
        <div className="r-left">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
