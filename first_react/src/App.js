import { useState } from 'react';
import './App.css';



function App() {


  const [msgName, setMessage] = useState('');

  const name = event => {
    setMessage(event.target.value);
  };

  const [msgSurname, setSurnamemsg] = useState('');

  const surname = event => {
    setSurnamemsg(event.target.value);
  };


  const handleClick = event => {
    event.preventDefault();

    if (msgName.trim().length <= 0) {
      alert('Ad Alanı boş geçilemez!');
    }
    else if (msgSurname.trim().length <= 0) {
      alert('Soyad Alanı boş geçilemez!');
    }

  }


  const [rules, setRules] = useState(false)
  const [email,setEmail]=useState('')
  const [age,setAge]=useState()

  const [toggle,setToggle]=useState(false);




  return (
    <div className="App">
      <div className='container'>
      <div className='top-check'>
      <label>
        Sözleşme Koşullarını Kabul Et
      </label>
        <input type='checkbox' checked={rules} onChange={e=>setRules(e.target.checked)} onClick={()=>setToggle(!toggle)}/>
      </div>
      {toggle &&(
      <div className='bottom-form' visibled={!rules}>
        <div className='col-full'>
          <div className='col-half'>
           <label>Ad</label>
           <input type='text' onChange={name}/>
          </div>
          <div className='col-half'>
           <label>Soyad</label>
           <input type='text' onChange={surname}/>
           </div>
        </div>
        <div className='col-full'>
            <div className='col-half'>
              <label>E-Posta</label>
              <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className='col-half'>
              <label>Yaş</label>
              <input type='number' value={age} onChange={e=>setAge(e.target.value)}/>
            </div>
        </div>
        <div className='col-full'>
          <div className='button-div'>
              <button onClick={handleClick}>Kaydet</button>
          </div>
        </div>
        <div className='col-full'>
          <div className='list-div'>
              <h2>Liste:</h2>

          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  );
}

export default App;
