import * as firebase from 'firebase';

/**
 * Check user statut in firebase
 * @return {Promise} return users's status type (true, false or null)
 */
export const checkUserStatus = () => {
  return new Promise(resolve => {
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
      unsuscribe();
    });
  });
};

/**
 * Firebase log in
 * @param  {String} email    user's mail
 * @param  {String} password users's password
 * @return {Promise}         Success or not and Error message if false
 */
export const signInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(e => {
        resolve(true);
      })
      .catch(error => {
        reject(error.message);
      });
  });
};

/**
 * Firebase log out
 * @return {Promise} Success or not
 */
export const signOutUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(
      () => {
        resolve();
      },
      error => {
        reject();
      },
    );
  });
};
