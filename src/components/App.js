import React from 'react';
import logo from '../images/logo.jpg';

function App() {
  const [inputData, setInputData] = React.useState([]);
  const [historyData, setHistoryData] = React.useState('');
  const [displayData, setDisplayData] = React.useState('');

  function doMath() {
    let arr = inputData;
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
      if (arr[i] === '+' || arr[i] === '-') {
        if (arr[i] === '+') {
          arr[i - 1] = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
          arr.splice(i, 2);
          i--;
        } else {
          arr[i - 1] = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
          arr.splice(i, 2);
          i--;
        }
      }
    }
    setInputData(arr[0]);
  }

  function handleKeypadClick(event) {
    if (event.target.innerText === '=') {
      doMath();
      setHistoryData(inputData);
      setInputData([]);
      setDisplayData('');
    } else {
      const temp = inputData;
      if (event.target.innerText === '+' || event.target.innerText === '-' || event.target.innerText === '*' || event.target.innerText === '/') {
        if (inputData[inputData.length - 1] === '+' || inputData[inputData.length - 1] === '-' || inputData[inputData.length - 1] === '*' || inputData[inputData.length - 1] === '/')
          temp.pop();
        temp.push(event.target.innerText);
        setInputData(temp);
        setDisplayData(inputData.join(''));
      } else {
        if (inputData.length === 0 || inputData[inputData.length - 1] === '+' || inputData[inputData.length - 1] === '-' || inputData[inputData.length - 1] === '*' || inputData[inputData.length - 1] === '/') {
          temp.push(event.target.innerText);
          setInputData(temp);
          setDisplayData(inputData.join(''));
        } else {
          temp[temp.length - 1] += event.target.innerText;
          setInputData(temp);
          setDisplayData(inputData.join(''));
        }
      }
    }
  }

  function handleHistoryClick() {
    const temp = inputData;
    temp.push(historyData);
    setInputData(temp);
    setDisplayData(inputData.join(''));
  }

  function handleCancel() {
    setInputData([]);
    setHistoryData('');
    setDisplayData('');
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
            <button className="history" onClick={handleHistoryClick}>Result(click to use): {historyData}</button>
            <h2 className="input">Input: {displayData}</h2>
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
