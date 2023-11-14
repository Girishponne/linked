import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Popup from './Popup'; 
import './Profile.css';
import Header from './Header';
import { addSkill, deleteSkill, addExperience, deleteExperience, addEducation, deleteEducation } from './Redux/Action'; // Import deleteEducation
import Educationpopup from './Educationpopup.jsx';



const Profile = () => {
  const skills = useSelector((state) => state.skills); 
  console.log(skills)
  const experiences = useSelector((state) => state.experiences);
  const educations = useSelector((state) => state.educations);
  const dispatch = useDispatch();

  const [popupOpen, setPopupOpen] = useState(false);
  const [experienceDetails, setExperienceDetails] = useState({
    role: '',
    companyName: '',
    startMonth: '',
    endMonth: '',
  });
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();

    const skill = event.target.skill.value.trim();

    if (skill !== '') {
      dispatch(addSkill(skill));
      event.target.reset();
    }
  };

  const handleAddExperience = () => {
    togglePopup(); // Open the popup
  };

  const handleSaveExperience = () => {
    dispatch(addExperience(experienceDetails));
    setExperienceDetails({
      role: '',
      companyName: '',
      startMonth: '',
      endMonth: '',
    });
    togglePopup(); // Close the popup
  };
  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  const [educationDetails, setEducationDetails] = useState({
    collegeName: '',
    branch: '',
    startYear: '',
    endYear: '',
  });

  const handleAddEducation = () => {
    toggleEducationPopup(); // Open the education popup
  };

  const handleSaveEducation = () => {
    dispatch(addEducation(educationDetails));
    setEducationDetails({
      collegeName: '',
      branch: '',
      startYear: '',
      endYear: '',
    });
    toggleEducationPopup(); // Close the education popup
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const [educationPopupOpen, setEducationPopupOpen] = useState(false);

  const toggleEducationPopup = () => {
    setEducationPopupOpen(!educationPopupOpen);
  };

  return (
    <div>
    <Header />
    
    <div className='profile'>
      <div className='profile__top'>
        <img src='https://wallpapercave.com/wp/1IldCgG.jpg' alt='' />
        <Avatar className='profile__avatar' />
        <h1>Ponne Girish</h1>
        <p>Profile</p>
        <h2>ponneGirish2001@gmail.com</h2>
        <div className='profile__buttons'>
          <button>Open to</button>
          <button>Add profile section</button>
          <button>More</button>
        </div>
      </div>
      <div className="profile__below">
        <div className='profile_below-skills'>
          <h2>Skills</h2>
          <form onSubmit={handleAddSkill}>
            <input type="text" name="skill" placeholder="Add Skill" />
            <button type="submit">Add Skill</button>
          </form>
          <ul>
            <div>
            {skills.map((skill, index) => (
              <div className='skills__button'>
              <li key={index}>
                {skill}
                <button onClick={() => dispatch(deleteSkill(index))}>Delete</button>                
              </li>
             <hr/>
             </div>
            ))} 
            </div>     
          </ul>          
        </div>
        </div>
        <div className='profile__experience'>
          <div className='profile__header'>
          <h1>Experiences</h1>
          <button onClick={handleAddExperience}>Add Experience</button>
          <ul>
            <div>
            {experiences.map((experience, index) => (
            <div className='experience__button'>
            <li key={index}>
              <p>Role: {experience.role}</p>
              <p>Company: {experience.companyName}</p>
              <p>Start Month: {experience.startMonth}</p>
              <p>End Month: {experience.endMonth}</p>
              <button onClick={() => handleDeleteExperience(index)}>Delete</button>
            </li>
            <hr/>
            </div>
           ))}
          </div> 
          </ul>
        </div>
        </div>
            <Popup
                isOpen={popupOpen}
                onClose={togglePopup}
                onSave={handleSaveExperience}
                onChange={setExperienceDetails}
                experienceDetails={experienceDetails}
            />
             <div className='profile__education'>
          <div className='profile__header'>
            <h1>Education</h1>
            <button onClick={handleAddEducation}>Add Education</button>
            <ul>
              <div>
                {educations.map((education, index) => (
                  <div className='education__button'>
                    <li key={index}>
                      <p>College: {education.collegeName}</p>
                      <p>Branch: {education.branch}</p>
                      <p>Start Year: {education.startYear}</p>
                      <p>End Year: {education.endYear}</p>
                      <button onClick={() => handleDeleteEducation(index)}>Delete</button>
                    </li>
                    <hr/>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <Educationpopup
          isOpen={educationPopupOpen}
          onClose={toggleEducationPopup}
          onSave={handleSaveEducation}
          onChange={setEducationDetails}
          details={educationDetails}
        />
      </div>
    </div>
  );
};

export default Profile;
