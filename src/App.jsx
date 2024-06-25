import './App.css'
import Buttons from './components/button.jsx'
import React from 'react'

class App extends React.Component {
constructor (props) {
  super(props)
  this.state = {
    display: '',
    expression: '',
    answer: false
  }
  this.handleClick = this.handleClick.bind(this)
}
componentDidMount () {
  document.getElementById('display').innerText = '0'
}
calculate() {
  const exp = this.state.expression;
  const regex = /[+-/*]|[-+]?\d+(\.\d+)?/g;

const matches = [];

let match;

// Use exec() method to iteratively match elements in the input string
while (match = regex.exec(exp)) {
    matches.push(match[0]);
}
while(matches.includes('-')) {
  let index=matches.indexOf('-');
  matches[index + 1] = '-'+matches[index + 1];
    matches.splice(index, 1);
}
  // while (matches.length > 1) {
    while(matches.includes('/')) {
  if (matches.includes('/')) {
    let index = matches.indexOf('/');
    let num1 = parseFloat(matches[index - 1]);
    let num2 = parseFloat(matches[index + 1]);
    let ans = num1 / num2;
    matches.splice(index - 1, 3, ans);
  }
}
while(matches.includes('*')) {
  if (matches.includes('*')) {
    let index = matches.indexOf('*');
    let num1 = parseFloat(matches[index - 1]);
    let num2 = parseFloat(matches[index + 1]);
    let ans = num1 * num2;
    matches.splice(index - 1, 3, ans);
  }
}
while(matches.includes('+')) {
  if (matches.includes('+')) {
    let index = matches.indexOf('+');
    let num1 = parseFloat(matches[index - 1]);
    let num2 = parseFloat(matches[index + 1]);
    let ans = num1 + num2;
    matches.splice(index - 1, 3, ans);
  }
}
  let sumOfMatches = matches.reduce((acc, curr) => {
    return acc + parseFloat(curr);
  }, 0);
// };
  return sumOfMatches.toString();
}

handleClick (e) {
  let display = this.state.display
  let exp = this.state.expression
  let ans=''
  let answer = this.state.answer 
  const value = e.target.innerText
  console.log(display)
  if (value === '0' && display === '0') {
    return;
  }
  if (display.includes('.') && value === '.') {
    return;
  }
  if (['+', '-', '*', '/'].some(op => display.includes(op)) || display[0]==='0') {
    display = '';
  }
  const addexp =(value)=> {
    if(exp[exp.length-1]=='-' && value==='-' && !['1','2','3','4','5','6','7','8','9'].includes(exp[exp.length-1])) {
      return;
    }
    if(['+', '*', '/'].some(op => exp[exp.length-2]===op) && value==='-' && !['1','2','3','4','5','6','7','8','9'].includes(exp[exp.length-1])) {
      return;
    }
    
    if (['+', '*', '/','-'].some(op => exp[exp.length-1]===op)) {
      if (value === '-') {
        exp += value;
      }
      else{
      exp= exp.slice(0,-1)+value;
      if(['+', '*', '/'].some(op => exp[exp.length-2]===op)){
        exp = exp.slice(0,-2)+value;
      }
      display=value;
      }
    }
    else {
      exp += value;
    }
  }
  const adddisplay = () => {
    document.getElementById('display-2').innerText = exp
      document.getElementById('display').innerText = display
  }
  switch (value) {
    case 'AC':
      exp=''
      display='0'
      adddisplay()
      answer = false
      break
    case '+':
      addexp(value)
      display= value
      adddisplay()
      answer = false
      break
    case '-':
      addexp(value)
      display= value
      adddisplay()
      answer = false
      break
    case '*':
      addexp(value)
      display= value
      adddisplay()
      answer = false
      break
    case '/':
      addexp(value)
      display= value
      adddisplay()
      answer = false
      break
    case '=':
      ans = this.calculate()
      document.getElementById('display').innerText = ans
      document.getElementById('display-2').innerText = exp + '=' + ans
      display=''
      exp=ans
      answer = true
      break
    default:
      display += value
      exp += value
      if(answer) {
        display = value
        exp = value
        answer = false
      }
      adddisplay()
      break
  }
  this.setState({ display: display , expression: exp, answer: answer})
}
render () {
  return (
    <>
      <div id='calculator'>
        <div id='display-2'></div>
        <div id='display'></div>
        <div id='buttons'>
          <Buttons handleClick={this.handleClick}/>
        </div>
      </div>
    </>
  )
}
}
export default App
