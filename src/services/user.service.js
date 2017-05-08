import * as firebase from 'firebase';

/**
 * Check user statut in firebase
 * @param  {Function} callback callback to call when we have firebase's response
 * @return {Boolean}           return users's status type
 */
export const checkUserStatus = callback => {
  firebase.auth().onAuthStateChanged(user => {
    const statut = user ? true : false;

    callback(statut);
  });
};

/**
 * Firebase sign in
 * @param  {String}   email          user's mail
 * @param  {String}   password       users's password
 * @param  {Function} callbackSucces function to call after signin
 * @return {Boolean & String}        Success or not and Error message if false
 */
export const signInUser = (email, password, callbackSucces) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(e => {
      callbackSucces(true);
    })
    .catch(error => {
      callbackSucces(false, error.message);
    });
};

/**
 * Firebase sign out
 * @param  {Function} callbackSucces function to call after sign out
 * @return {Boolean}                 true if its ok, false otherwise
 */
export const signOutUser = callbackSucces => {
  firebase.auth().signOut().then(
    () => {
      callbackSucces(true);
    },
    error => {
      callbackSucces(false);
    },
  );
};

/**
 * Firebase register
 * @param  {String} email            user's mail
 * @param  {String} password         users's password
 * @param  {Function} callbackSucces function to call after register
 * @return {Boolean & String}        Success or not and Error message if false
 */
export const registerUser = (email, password, callbackSucces) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(e => {
      callbackSucces(true);
    })
    .catch(error => {
      callbackSucces(false, error.message);
    });
};
