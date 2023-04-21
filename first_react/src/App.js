import { useState } from 'react';
import './App.css';



function App() {


  const [rules, setRules] = useState(false)
  const [name,setName]=useState('')
  const [surname,setSurname]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState()



  return (
    <div className="App">
      <div className='container'>
      <div className='top-check'>
      <label>
        Sözleşme Koşullarını Kabul Et
      </label>
        <input type='checkbox' checked={rules} onChange={e=>setRules(e.target.checked)}/>
      </div>
      <div className='bottom-form' visibled={!rules}>
        <div className='col-full'>
          <div className='col-half'>
           <label>Ad</label>
           <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
          </div>
          <div className='col-half'>
           <label>Soyad</label>
           <input type='text' value={surname} onChange={e=>setSurname(e.target.value)}/>
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
              <button>Kaydet</button>
          </div>
        </div>
        <div className='col-full'>
          <div className='list-div'>
              <h2>Liste:</h2>
              
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
