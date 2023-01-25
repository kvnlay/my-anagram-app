import './App.css';
import { useState } from 'react';

function App() {
  //state for string form fields
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');

  //function to check for anagram
  function isAnagram(str1, str2){
    let firstStr = str1.replace(/ +/g, '').toLowerCase().split('').sort().join('');
    let secondStr = str2.replace(/ +/g, '').toLowerCase().split('').sort().join('');
    
    console.log(firstStr, secondStr)
    return firstStr === secondStr;
  }

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert( ` Anagram is ${isAnagram(string1, string2)}`)
  }

  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="String 1">
            String 1
          </label>
          <input 
            value={string1} 
            name="string1" 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text" 
            placeholder="String 1" 
            onChange={e => setString1(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="String 2">
            String 2
          </label>
          <input 
            value={string2} 
            name="string1" 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text" 
            placeholder="String 2" 
            onChange={e => setString2(e.target.value)}
          />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button" 
            onClick={handleSubmit}>
            Check strings
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Netscout. All rights reserved.
      </p>
    </div>
  )
;
}

export default App;
