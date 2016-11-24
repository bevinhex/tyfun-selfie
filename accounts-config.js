import {AccountsTemplates} from 'meteor/useraccounts:core';
import {browserHistory} from 'react-router';

/*
let pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id:"username",
    type:"text",
    displayName:"username",
    required:true,
    minLength:5
  },
  pwd
]);
*/
let submitForm = function(error,state){
  console.log(error,state);
  if(!error){
    if(state==="signIn"){
      //login successful
      browserHistory.push('camera');
    }
    if(state==="signUp"){
      //register successful
      browserHistory.push('camera');
    }
  }
};
AccountsTemplates.configure({
  forbidClientAccountCreation:false,
  overrideLoginErrors:false,
  negativeValidation: true,
  positiveValidation: true,
  showValidating:true,
  onSubmitHook:submitForm,
  homeRoutePath:'/camera',
});
