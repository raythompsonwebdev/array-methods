// Import stylesheets
import './style.css';

// Write Javascript code!
// Write Javascript code!
const appDiv = document.getElementById('app');

// Create a title dynamically
const title = document.createElement('H1');
title.innerText = 'Submit Here';

// Create a title dynamically
const Answer = document.createElement('H2');
Answer.setAttribute('id', 'User');
Answer.innerText = '';

// Create a form dynamically
const form = document.createElement('FORM');
form.setAttribute('id', 'myform');

// Create an input element for Full Name
const FN = document.createElement('input');
FN.setAttribute('id', 'text');
FN.setAttribute('type', 'text');
FN.setAttribute('name', 'tester');

//radio buttons
const mapfunc = document.createElement('input');
mapfunc.setAttribute('id', 'mapfunc');
mapfunc.setAttribute('type', 'radio');
mapfunc.setAttribute('name', 'mapfunc');
const mapfunclabel = document.createElement('label');
mapfunclabel.setAttribute('for', 'mapfunc');
mapfunclabel.innerText = 'Map';

//radio buttons
const filterfunc = document.createElement('input');
filterfunc.setAttribute('id', 'filterfunc');
filterfunc.setAttribute('type', 'radio');
filterfunc.setAttribute('name', 'filterfunc');
const filterfunclabel = document.createElement('label');
filterfunclabel.setAttribute('for', 'filterfunc');
filterfunclabel.innerText = 'Filter';

// radio buttons
const everyfunc = document.createElement('input');
everyfunc.setAttribute('id', 'everyfunc');
everyfunc.setAttribute('type', 'radio');
everyfunc.setAttribute('name', 'everyfunc');
const everyfunclabel = document.createElement('label');
everyfunclabel.setAttribute('for', 'everyfunc');
everyfunclabel.innerText = 'Every';

// radio buttons
const somefunc = document.createElement('input');
somefunc.setAttribute('id', 'somefunc');
somefunc.setAttribute('type', 'radio');
somefunc.setAttribute('name', 'somefunc');
const somefunclabel = document.createElement('label');
somefunclabel.setAttribute('for', 'somefunc');
somefunclabel.innerText = 'Some';

const radioset = document.createElement('fieldset');
const radiosetlegend = document.createElement('legend');
radiosetlegend.innerText = '';

// create a submit button
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');

form.appendChild(title);
form.appendChild(FN);
form.appendChild(radioset);

radioset.appendChild(radiosetlegend);
radioset.appendChild(mapfunclabel);
mapfunclabel.appendChild(mapfunc);
radioset.appendChild(filterfunclabel);
filterfunclabel.appendChild(filterfunc);
radioset.appendChild(everyfunclabel);
everyfunclabel.appendChild(everyfunc);
radioset.appendChild(somefunclabel);
somefunclabel.appendChild(somefunc);

form.appendChild(submitBtn);

appDiv.appendChild(form);
appDiv.appendChild(Answer);

const formForm = document.querySelector('#myform');
const User = document.querySelector('#User');

const mapFuncRadio = document.getElementById('mapfunc').checked;
const filterFuncRadio = document.getElementById('filterfunc').checked;
const someFuncRadio = document.getElementById('somefunc').checked;

formForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // initiate empty value
  let valueP = ' ';
  //get form data to get input value.
  const formData = new FormData(formForm);

  // deconstruct form data object
  const data = formData;

  // check if string contains numbers
  const hasNumber = (myString) => {
    return /\d/.test(myString);
  };
  //convert object to array and map over values
  Array.from(data).forEach((elem) => {
    //decontruct object and get value of form input
    const [name, value] = elem;
    //assign value to empty variable
    valueP = value;
  });

  if (mapFuncRadio) {
    return hasNumber(valueP)
      ? (User.innerText = mapFunc(valueP))
      : (User.innerText = mapFunc(valueP));
  }

  if (filterFuncRadio) {
    return hasNumber(valueP)
      ? (User.innerText = filterFunc(valueP))
      : (User.innerText = filterFunc(valueP));
  }

  // if (hasNumber(valueP)) {
  //   //User.innerText = mapFunc(valueP);
  //   User.innerText = filterFunc(valueP);
  // } else {
  //   //User.innerText = mapFunc(valueP);
  //   User.innerText = filterFunc(valueP);
  // }
});

// test if string contains at least on upper and lowercase letter.
const mapFunc = (value) => {
  const test = [...value];
  const result = test.map((el) => {
    if (/\d/.test(el)) {
      return +el * 2;
    } else {
      return el.toUpperCase();
    }
  });

  console.log(result);
  return result;
  //return result === Number ? result : result.join('');
};

// test if string contains at least two numbers.
const filterFunc = (value) => {
  const test = [...value];
  const result = test.filter((el) => {
    if (/\d/.test(el)) {
      return +el > 2;
    } else {
      return el === 'a';
    }
  });

  console.log(result);
  return result;
  //return result === Number ? result : result.join('');
};

// test if string has more than five characters or not.
const someFunc = (value) => {
  const test = [...value];
  const result = test.some((el) => {
    if (/\d/.test(el)) {
      return +el > 2;
    } else {
      return el === 'a';
    }
  });

  console.log(result);
  return result;
  //return result === Number ? result : result.join('');
};

const every = (value) => {};
