import React from 'react';
import logo from '../images/logo.jpg';

function App() {
  const [historyData, setHistoryData] = React.useState('');
  const [inputData, setInputData] = React.useState('');

  function doMath(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '*') {
        arr[i - 1] = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
        arr.splice(i, 2);
        i--;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '/') {
        arr[i - 1] = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
        arr.splice(i, 2);
        i--;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '+') {
        arr[i - 1] = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
        arr.splice(i, 2);
        i--;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '-') {
        arr[i - 1] = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
        arr.splice(i, 2);
        i--;
      }
    }
    console.log(arr[0]);
    return arr[0];
  }

  function handleClick(event) {
    if (event.target.innerText === '=') {
      setHistoryData(doMath(inputData));
      setInputData('');
    }
    else if (event.target.innerText === '+' || event.target.innerText === '-' || event.target.innerText === '*' || event.target.innerText === '/')
      setInputData(inputData.concat(' ' + event.target.innerText + ' '));
    else
      setInputData(inputData.concat(event.target.innerText));
  }


  return (
    <div className="page" >
      <div className="page__wrapper" >
        <header className="header">
          <img className="header__logo" src={logo} alt="header logo" />
          <h1 className='header__title'>Calculator</h1>
        </header>
        <main className="main">
          <section className="screen">
            <button className="history" type="button">{historyData}</button>
            <h2 className="input">{inputData}</h2>
          </section>
          <section className="keypad">
            <button className="button" type="button" onClick={handleClick}>7</button>
            <button className="button" type="button" onClick={handleClick}>8</button>
            <button className="button" type="button" onClick={handleClick}>9</button>
            <button className="button" type="button" onClick={handleClick}>/</button>
            <button className="button" type="button" onClick={handleClick}>4</button>
            <button className="button" type="button" onClick={handleClick}>5</button>
            <button className="button" type="button" onClick={handleClick}>6</button>
            <button className="button" type="button" onClick={handleClick}>*</button>
            <button className="button" type="button" onClick={handleClick} >1</button>
            <button className="button" type="button" onClick={handleClick}>2</button>
            <button className="button" type="button" onClick={handleClick}>3</button>
            <button className="button" type="button" onClick={handleClick}>-</button>
            <button className="button" type="button" onClick={handleClick}>0</button>
            <button className="button" type="button" onClick={handleClick}>.</button>
            <button className="button" type="button" onClick={handleClick}>=</button>
            <button className="button" type="button" onClick={handleClick}>+</button>
            {/* <button className="button" type="button" onClick={handleClick}>(</button> */}
            {/* <button className="button" type="button" onClick={handleClick}>)</button> */}
            {/* <button className="button" type="button" onClick={handleClick}>C</button> */}
            {/* <button className="button" type="button" onClick={handleClick}>&#x2190;</button> */}
          </section>
        </main>
        <footer className="footer">
          <h2 className="footer__title">&copy; 2022 Ilia Zaidin</h2>
        </footer>
      </div>
    </div>
  );
}

export default App;
