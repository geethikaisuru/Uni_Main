import React from "react";
import { ActionExplore } from "../../components/ActionExplore";
import { ActionSearch } from "../../components/ActionSearch";
import { Button } from "../../components/Button";
import { ContriButton } from "../../components/ContriButton";
import { Endore } from "../../components/Endore";
import { Input } from "../../components/Input";
import { LinearAstronomy } from "../../components/LinearAstronomy";
import { NavigationMenu } from "../../components/NavigationMenu";
import { SocialIconsIc } from "../../components/SocialIconsIc";
import { SocialNotifications } from "../../components/SocialNotifications";
import { SocialPublicon } from "../../components/SocialPublicon";
import { Status } from "../../components/Status";
import { ActionStarRate } from "../../icons/ActionStarRate";
import { BioLogo } from "../../icons/BioLogo";
import { EdutHat } from "../../icons/EdutHat";
import { SkillsLogo } from "../../icons/SkillsLogo";
import "./style.css";

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="my-profile-wrapper">
        <div className="my-profile">
          <div className="frame">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">Bio</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap">
                <div className="text-wrapper-4">Education</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap">
                <div className="text-wrapper-4">Projects</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap">
                <div className="text-wrapper-5">Awards &amp; Honours</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap">
                <div className="text-wrapper-5">Resume</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap">
                <div className="text-wrapper-5">Contact Info</div>
              </div>
            </div>
          </div>
          <div className="bio-top-skills">
            <div className="top-skills">
              <SkillsLogo className="skills-logo" />
              <img
                className="line"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/line-2.svg"
              />
              <div className="text-wrapper-6">Top Skills</div>
              <p className="p">
                Leadership, Machine Learning, Video editing, Data Analytics, Social Media Marketing...
              </p>
            </div>
            <div className="bio">
              <BioLogo className="bio-logo" />
              <p className="i-m-a-simple-and">
                I&#39;m a simple and driven human being with a mission to leave this world a little better than I found
                it😇. A self learning student. Also an Undergraduate following BSc in Physics and ICT.
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Completed
                college at Taxila Central College with a ton of skills and experiences to help in my future endeavors.
                I&#39;m skilled in many areas and making the days count to be skilled in much more. Let&#39;s say
                &#34;Cheers to the future!&#34;😎
              </p>
              <div className="text-wrapper-7">Bio</div>
              <img
                className="line-2"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/line-1-1.svg"
              />
            </div>
          </div>
          <div className="posts">
            <div className="small-post">
              <div className="group">
                <div className="text-wrapper-8">What is Software Engi..</div>
                <div className="element-upvotes">
                  86K Upvotes
                  <br />
                  500+ Answers
                </div>
              </div>
              <img
                className="rectangle-2"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/rectangle-29852-3@2x.png"
              />
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/vector-370-3.svg"
              />
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-3" />
                <div className="group-2">
                  <p className="text-wrapper-8">How to make a websi...</p>
                </div>
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/rectangle-29852-2@2x.png"
                />
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/vector-370-2.svg"
                />
                <div className="element-k-upvotes">
                  80K Upvotes
                  <br />
                  450+ Answers
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle-4" />
                <div className="group-3">
                  <p className="text-wrapper-8">In react how do we m..</p>
                </div>
                <img
                  className="rectangle-5"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/rectangle-29852-1@2x.png"
                />
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/vector-370-1.svg"
                />
                <div className="element-upvotes-2">
                  66K Upvotes
                  <br />
                  500+ Answers
                </div>
              </div>
            </div>
            <div className="small-post-2">
              <div className="overlap-2">
                <div className="rectangle-4" />
                <div className="group-4">
                  <p className="text-wrapper-8">What is the best fram...</p>
                </div>
                <img
                  className="rectangle-5"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/rectangle-29852@2x.png"
                />
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/vector-370.svg"
                />
                <div className="element-upvotes-2">
                  48K Upvotes
                  <br />
                  500+ Answers
                </div>
              </div>
            </div>
            <div className="p-opular">
              <div className="overlap-3">
                <div className="text-wrapper-9">Popular</div>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="content">
              <div className="overlap-4">
                <div className="text-wrapper-10">see more</div>
                <p className="taxila-central">
                  &nbsp;&nbsp; Taxila Central College - Horana
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GCE O/L : A6 B1 C2
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GCE A/L : BCC in Physical Stream
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clubs and activities :<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~Vice President and Sounds/Lighting/IT person at
                  Radio and Technical Society,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~President and Photographer at Photographic Arts
                  Society,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~Senior Prefect at Taxila Prefects Board...
                </p>
                <div className="text-wrapper-11">School/ College</div>
              </div>
              <div className="overlap-group-3">
                <div className="text-wrapper-12">Education</div>
                <img
                  className="line-3"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/line-1.svg"
                />
              </div>
              <div className="text-wrapper-13">University</div>
              <EdutHat className="edut-hat" />
            </div>
            <div className="text-wrapper-14">University Of Sri Jayewardenepura</div>
          </div>
          <div className="top-frame">
            <Input
              className="search-bar-ribbon"
              corner="rounded"
              inputClassName="input-instance"
              label={false}
              override={
                <ActionSearch icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-7.svg" />
              }
              size="default"
              style="light"
              text="Search your things here..."
              type="left-icon"
            />
            <div className="frame-2">
              <Button
                className="starred"
                corner="rounded"
                override={<ActionStarRate className="action-star-rate" color="#424242" />}
                size="default"
                style="light"
                type="icon"
              />
              <Button
                className="options"
                corner="rounded"
                override={
                  <NavigationMenu
                    className="design-component-instance-node"
                    icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-5.svg"
                    iconClassName="navigation-menu-instance"
                  />
                }
                size="default"
                style="light"
                type="icon"
              />
              <div className="overlap-group-4">
                <Button
                  className="notific"
                  corner="rounded"
                  override={
                    <SocialNotifications
                      className="design-component-instance-node"
                      icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-4.svg"
                      iconClassName="social-notifications-instance"
                    />
                  }
                  size="default"
                  style="light"
                  type="icon"
                />
                <Status border="two" className="status-instance" style="light" type="color-border" />
                <div className="text-wrapper-15">99</div>
              </div>
              <div className="overlap-5">
                <Button
                  className="msgs"
                  corner="rounded"
                  override={
                    <SocialIconsIc
                      className="design-component-instance-node"
                      icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-3.svg"
                      iconClassName="icon-7"
                    />
                  }
                  size="default"
                  style="light"
                  type="icon"
                />
                <Status border="two" className="status-2" style="light" type="color-border" />
                <div className="text-wrapper-16">2</div>
              </div>
              <Button
                className="navigator"
                corner="rounded"
                override={
                  <ActionExplore
                    className="design-component-instance-node"
                    icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-2.svg"
                    iconClassName="icon-7"
                  />
                }
                size="default"
                style="light"
                type="icon"
              />
              <Button
                className="home-feed"
                corner="rounded"
                override={
                  <SocialPublicon
                    className="design-component-instance-node"
                    icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-1.svg"
                    iconClassName="icon-7"
                  />
                }
                size="default"
                style="light"
                type="icon"
              />
            </div>
            <div className="logo" />
            <img
              className="ribbon-profile-pic"
              alt="Ribbon profile pic"
              src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/ribbon-profile-pic-1@2x.png"
            />
          </div>
          <div className="top-cover">
            <div className="overlap-6">
              <img
                className="cover"
                alt="Cover"
                src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/cover.png"
              />
              <div className="edit-button">
                <div className="text-wrapper-17">Edit</div>
              </div>
              <div className="name-and-info">
                <div className="overlap-7">
                  <div className="overlap-group-wrapper-2">
                    <div className="overlap-group-5">
                      <div className="rectangle-6" />
                      <div className="text-wrapper-18">3000+ Contributions</div>
                      <ContriButton className="contri-button-instance" />
                    </div>
                  </div>
                  <div className="postings">
                    <div className="overlap-8">
                      <div className="overlap-group-wrapper-2">
                        <div className="overlap-group-5">
                          <div className="rectangle-6" />
                          <div className="text-wrapper-18">1000+ Starred Posts</div>
                        </div>
                      </div>
                      <LinearAstronomy className="linear-astronomy-stars-minimalistic" />
                    </div>
                  </div>
                  <div className="endoresmenta">
                    <div className="overlap-9">
                      <div className="rectangle-6" />
                      <div className="endorements">
                        <div className="text-wrapper-19">400+ Endorsements</div>
                      </div>
                      <Endore className="endore-instance" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-20">86K followers</div>
                <div className="text-wrapper-21">2K friends</div>
                <div className="text-wrapper-22">Geethika Isuru</div>
                <div className="overlap-10">
                  <div className="text-wrapper-23">University of Sri Jayawardenepura</div>
                  <p className="element-year">
                    <span className="span">&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span className="text-wrapper-24">1st Year</span>
                  </p>
                  <p className="bsc-in-physics-ICT">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BSc In Physics &amp; ICT
                  </p>
                </div>
                <p className="AI-ML-student-a">AI / ML Student |&nbsp;&nbsp;A Driven human being</p>
              </div>
              <img
                className="ribbon-profile-pic-2"
                alt="Ribbon profile pic"
                src="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/ribbon-profile-pic@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
