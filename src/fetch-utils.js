import request from 'superagent';
//const URL = 'https://dog-match-be.herokuapp.com/';
const URL = 'http://localhost:7890/';

// Login
export async function login(email, password){
  const response = await request 
    .post(`${URL}auth/signin`)
    .send({ email, password });  
  return response.body;
}

// Sign Up
export async function signUp(email, password){
  const response = await request 
    .post(`${URL}auth/signup`)
    .send({ email, password });  
  return response.body;
}

// Get Profile
//  Does URL/api work or route to profilePage.js?
export async function getProfile(token){
  /*
  const response = await request 
    .get(`${URL}api`)
    .set('Authorization', token);
  return response.body;
  */
  return {};
}

// Create (update) Profile
// check .post url
export async function createProfile(state, token){
  /*
  const response = await request 
    .post (`${URL}api/`)
    .send ({ userData: state })
    .set('Authorization', token);
  return response.body;
  */
  return {};
}

//  ^^ what about isLoading?