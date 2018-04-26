import skygear from "skygear";
import { config } from "../ducks/auth";

/*function statusHelper(response) {
  if (response.status >= 400) {
    return Promise.reject(response)
  }
  return Promise.resolve(response)
}*/

export const signUpAnonymously = () => {
  return new Promise(resolve => {
      config.then(() => skygear.auth.signupAnonymously()
        .then(response => resolve({response}))
        .catch(error => resolve({error})))
    });
};

export const getCurrentUserData = () => {
  const Note = skygear.Record.extend('catalog');
  const query = new skygear.Query(Note);
  query.equalTo('_created_by', localStorage.getItem('repairBoxID'));
  skygear.publicDB.query(query).then((notes) => {
    // notes is an array of Note records that has its "title" equals "First note"
  }, (error) => {
    console.error(error);
  });

  skygear.publicDB.query(query).then((r) => {
    console.log(r);
  });

  /*let Test = skygear.Record.extend('catalog');
  return skygear.publicDB.save(new Test({
    'name': 'iPhone 8',
    'price': '40 000'
  }))*/
}
