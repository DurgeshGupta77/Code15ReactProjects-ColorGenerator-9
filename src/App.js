import React, {useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

const App = () =>{
  const [input, setInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  
  const displayInput = (e) =>{
    e.preventDefault();
    try{
      let colors = new Values(input).all(10);
      console.log(colors);
      setIsError(false);
      setList(colors);
    }
    catch(error){
      setIsError(true);
      console.log(error);
    }
  }
  
  return <React.Fragment>
    <section>
    <div className='form'>
      <form onSubmit={displayInput}>
        <label htmlFor='color'>
          Color Generator
        </label>
        <input className={`${isError ? 'error': null}`} type='text' id='color' name='color' placeholder='#f15025' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  </section>
  <section className='colors'>
    {/* <p>colors</p> */}
    {
      list.map((color,index)=>{
        return <SingleColor key={index} {...color} index = {index} hexColor={color.hex} />
      })
    }
  </section>
  </React.Fragment>
}

export default App;