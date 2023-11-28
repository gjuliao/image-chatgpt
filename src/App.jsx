import './App.css'



function App() {

 
  console.log(import.meta.env.VITE_OPENAI_API_KEY);

  return (
    <div className='container'>

      <h2>Create an Image using Chat-GPT</h2>
      <input />
      <button>Generate Image</button>
    </div>
  )
}

export default App
