import { combineReducers } from 'redux';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};




const skillReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [...state, action.payload];
    case 'DELETE_SKILL':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const experienceReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE':
      return [...state, action.payload];
    case 'DELETE_EXPERIENCE':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const educationReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EDUCATION':
      return [...state, action.payload];
    case 'DELETE_EDUCATION':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user:userReducer,
  skills: skillReducer,
  experiences: experienceReducer,
  educations: educationReducer, 
});

export default rootReducer;
