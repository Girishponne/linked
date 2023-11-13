
export const loginUser = (userData) => {
  return {
    type: 'LOGIN_USER',
    payload: userData,
  };
};

export const registerUser = (userData) => {
  return {
    type: 'REGISTER_USER',
    payload: userData,
  };
};

export const logoutUser = (userData) => {
  return {
    type: 'LOGOUT_USER',
    payload: userData,
  };
};

export const addSkill = (skill) => {
  return {
    type: 'ADD_SKILL',
    payload: skill,
  };
};

export const deleteSkill = (index) => {
  return {
    type: 'DELETE_SKILL',
    payload: index,
  };
};

export const addExperience = (experience) => {
  return {
    type: 'ADD_EXPERIENCE',
    payload: experience,
  };
};

export const deleteExperience = (index) => {
  return {
    type: 'DELETE_EXPERIENCE',
    payload: index,
  };
};

export const addEducation = (education) => {
  return {
    type: 'ADD_EDUCATION',
    payload: education,
  };
};

export const deleteEducation = (index) => {
  return {
    type: 'DELETE_EDUCATION',
    payload: index,
  };
};
