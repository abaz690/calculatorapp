import React from "react";

const Buttons =({handleClick})=>{

return (
<>
<button onClick={handleClick} id="clear" className="two-columns border">AC</button>
<button onClick={handleClick} className='border' id="divide">/</button>
<button onClick={handleClick} className='border' id="multiply">*</button>
<button onClick={handleClick} className='border' id="seven">7</button>
<button onClick={handleClick} className='border' id="eight">8</button>
<button onClick={handleClick} className='border' id="nine">9</button>
<button onClick={handleClick} className='border' id="subtract">-</button>
<button onClick={handleClick} className='border' id="four">4</button>
<button onClick={handleClick} className='border' id="five">5</button>
<button onClick={handleClick} className='border' id="six">6</button>
<button onClick={handleClick} className='border' id="add">+</button>
<button onClick={handleClick} className='border' id="one">1</button>
<button onClick={handleClick} className='border' id="two">2</button>
<button onClick={handleClick} className='border' id="three">3</button>
<button onClick={handleClick} id="equals" className="two-rows border">=</button>
<button onClick={handleClick} id="zero" className="two-columns border">0</button>
<button onClick={handleClick} className='border' id="decimal">.</button>

</>
)
};

export default Buttons;