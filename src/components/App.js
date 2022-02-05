import React from 'react';
import logo from '../images/logo.jpg';

function App() {
  const [inputData, setInputData] = React.useState('');
  const [historyData, setHistoryData] = React.useState('');

  function doMath(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '*' || arr[i] === '/') {
        if (arr[i] === '*') {
          arr[i - 1] = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
          arr.splice(i, 2);
          i--;
        } else {
          arr[i - 1] = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
          arr.splice(i, 2);
          i--;
        }
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
    return arr[0];
  }

  function handleKeypadClick(event) {
    if (event.target.innerText === '=') {
      const result = doMath(inputData);
      setInputData('');
      setHistoryData(result);
    }
    else if (event.target.innerText === '+' || event.target.innerText === '-' || event.target.innerText === '*' || event.target.innerText === '/') {
      if (inputData[inputData.length - 2] === '+' || inputData[inputData.length - 2] === '-' || inputData[inputData.length - 2] === '*' || inputData[inputData.length - 2] === '/') {
        const temp = inputData.slice(0, -3);
        setInputData(temp);
      }
      setInputData(inputData.concat(' ' + event.target.innerText + ' '));
    }
    else
      setInputData(inputData.concat(event.target.innerText));
  }

  function handleHistoryClick() {
    if (inputData === '' || inputData[inputData.length - 1] === ' ')
      setInputData(inputData.concat(historyData));
  }

  function handleCancel() {
    setInputData('');
    setHistoryData('');
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
            <button className="history" onClick={handleHistoryClick}>Result: {historyData}</button>
            <h2 className="input">Input: {inputData}</h2>
          </section>
          <section className="keypad">
            <button className="button" type="button" onClick={handleKeypadClick}>7</button>
            <button className="button" type="button" onClick={handleKeypadClick}>8</button>
            <button className="button" type="button" onClick={handleKeypadClick}>9</button>
            <button className="button" type="button" onClick={handleKeypadClick}>/</button>
            <button className="button" type="button" onClick={handleKeypadClick}>4</button>
            <button className="button" type="button" onClick={handleKeypadClick}>5</button>
            <button className="button" type="button" onClick={handleKeypadClick}>6</button>
            <button className="button" type="button" onClick={handleKeypadClick}>*</button>
            <button className="button" type="button" onClick={handleKeypadClick} >1</button>
            <button className="button" type="button" onClick={handleKeypadClick}>2</button>
            <button className="button" type="button" onClick={handleKeypadClick}>3</button>
            <button className="button" type="button" onClick={handleKeypadClick}>-</button>
            <button className="button" type="button" onClick={handleKeypadClick}>0</button>
            <button className="button" type="button" onClick={handleKeypadClick}>.</button>
            <button className="button" type="button" onClick={handleKeypadClick}>=</button>
            <button className="button" type="button" onClick={handleKeypadClick}>+</button>
            {/* <button className="button" type="button" onClick={handleKeypadClick}>&#40;</button>  */}
            {/* <button className="button" type="button" onClick={handleKeypadClick}>&#41;</button>  */}
            <button className="button" type="button" onClick={handleCancel}>C</button>
            {/* <button className="button" type="button" onClick={handleKeypadClick}>&#x2190;</button> */}
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
