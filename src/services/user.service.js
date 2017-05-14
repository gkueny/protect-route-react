import * as firebase from 'firebase';

/**
 * Check user statut in firebase
 * @return {Promise} return users's status type
 */
export const checkUserStatus = () => {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

/**
 * Firebase log in
 * @param  {String} email    user's mail
 * @param  {String} password users's password
 * @return {Promise}         Success or not and Error message if false
 */
export const logIn = (email, password) => {
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
export const logOut = () => {
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
