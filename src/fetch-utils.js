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
export async function getProfile(token){
  const response = await request 
    .get(`${URL}api/profile`)
    .set('Authorization', token);
  return response.body;
}

// Update Profile
export async function updateProfile(state, token){
  const response = await request 
    .put (`${URL}api/profile`)
    .send ({ profile: state })
    .set('Authorization', token);
  return response.body;
}

export async function getFavorites(token) {
  
  const response = await request
    .get(`${URL}api/favorites`)
    .set('Authorization', token);  
  return response.body;
}

export async function getBreedByName(breed, token) {
  const response = await request
    .get(`${URL}api/breed-details/${breed}`)
    .set('Authorization', token);

  return response;
}

export async function getRecommendations(token) {
  const response = await request
    .get(`${URL}api/recommendations`)
    .set('Authorization', token);

  return response.body;
}

export async function postFavorite(breed, token) {
  const response = await request
    .post(`${URL}api/favorites`)
    .set('Authorization', token)
    .send(breed);

  return response;
}