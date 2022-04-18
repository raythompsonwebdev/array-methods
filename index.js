// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const title = document.createElement('H1');
title.innerText = 'Enter text here';

// display result
const Answer = document.createElement('H2');
Answer.setAttribute('id', 'User');
Answer.innerText = '';

// Create a form
const form = document.createElement('FORM');
form.setAttribute('id', 'myform');

// Create an input element
const FN = document.createElement('input');
FN.setAttribute('id', 'text');
FN.setAttribute('type', 'text');
FN.setAttribute('name', 'tester');

//radio buttons
const mapfunc = document.createElement('input');
mapfunc.setAttribute('id', 'mapfunc');
mapfunc.setAttribute('type', 'radio');
mapfunc.setAttribute('name', 'arrayfunc');
const mapfunclabel = document.createElement('label');
mapfunclabel.setAttribute('for', 'mapfunc');
mapfunclabel.innerText = 'Map';

//radio buttons
const filterfunc = document.createElement('input');
filterfunc.setAttribute('id', 'filterfunc');
filterfunc.setAttribute('type', 'radio');
filterfunc.setAttribute('name', 'arrayfunc');
const filterfunclabel = document.createElement('label');
filterfunclabel.setAttribute('for', 'filterfunc');
filterfunclabel.innerText = 'Filter';

// radio buttons
const everyfunc = document.createElement('input');
everyfunc.setAttribute('id', 'everyfunc');
everyfunc.setAttribute('type', 'radio');
everyfunc.setAttribute('name', 'arrayfunc');
const everyfunclabel = document.createElement('label');
everyfunclabel.setAttribute('for', 'everyfunc');
everyfunclabel.innerText = 'Every';

// radio buttons
const somefunc = document.createElement('input');
somefunc.setAttribute('id', 'somefunc');
somefunc.setAttribute('type', 'radio');
somefunc.setAttribute('name', 'arrayfunc');
const somefunclabel = document.createElement('label');
somefunclabel.setAttribute('for', 'somefunc');
somefunclabel.innerText = 'Some';

// radio buttons feildset + legend
const radioset = document.createElement('fieldset');
const radiosetlegend = document.createElement('legend');
radiosetlegend.innerText = 'Choose a Function and see result';

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
const mapFuncRadio = document.getElementById('mapfunc');
const filterFuncRadio = document.getElementById('filterfunc');
const someFuncRadio = document.getElementById('somefunc');

formForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // initiate empty value
  let valueP = ' ';
  //get form data to get input value.
  const formData = new FormData(formForm);
  // deconstruct form data object
  const data = formData;
  //convert object to array and map over values
  const Info = Array.from(data).map((elem) => {
    //decontruct object and get value of form input
    const [name, value] = elem;
    //return value and store in Info variable.
    return value;
  });

  //deconstruct info const - assign input value & radio button value
  const [val1, val2] = [...Info];

  console.log(val2, val1, mapFuncRadio.checked);

  //check if map checkbox checked. If so apply map function to input value
  if (mapFuncRadio.checked) {
    answer(val1, mapFunc);
  }
  //check if filter checkbox checked. If so apply filter function to input value
  if (filterFuncRadio.checked) {
    answer(val1, filterFunc);
  }
  //check if some checkbox checked. If so apply some function to input value
  if (someFuncRadio.checked) {
    answer(val1, someFunc);
  }
  //check if every checkbox checked. If so apply every function to input value
  if (everyFuncRadio.checked) {
    answer(val1, everyFunc);
  }
});

// Map function
const mapFunc = (...value) => {
  const test = [...value];
  const result = test.map((el) => {
    // test if string contains number.
    if (/\d/.test(el)) {
      // if so convert value from string to number using + operator.
      return +el * 2;
    } else {
      // if not return string.
      return el.toUpperCase();
    }
  });

  //return value as string
  return result.join('');
};
// Filter function
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
};

// Some function
const someFunc = (...value) => {
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

// Every function
const everyFunc = (...value) => {
  const test = [...value];
  const result = test.every((el) => {
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

// check if string contains numbers
const hasNumber = (myString) => {
  return /\d/.test(myString);
};

//pass user input value and selected function as args then display returned value from selected function.
const answer = (value, func) => {
  // check if value has numbers using has number function.
  if (hasNumber(value)) {
    //if so return numbers
    User.innerText = func(value);
  } else {
    //return string
    User.innerText = func(value);
  }
};
