import './App.css'
import { OpenAI } from 'openai';
import { useState } from 'react';



function App() {

  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');

  const generateImage = async () => {
    try {

      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const res = await openai.images.generate({
        model:"dall-e-2",
          prompt: prompt,
          n: 1,
          size: '1024x1024',
      });

      console.log(res);

      const image = await res.data[0].url;

      setImage(image);
    } catch (error) {
      if (error.response) {
        // The error has a response property, so you can access status and data
        console.error("Error generating image:", error.response.status, error.response.data);
      } else {
        // The error does not have a response property, handle it accordingly
        console.error("Error generating image:", error.message);
      }
    }
  };

  return (
    <div className='container'>

      <h1>Create an Image using Chat-GPT</h1>
      <input className='user-input' onChange={(e) => setPrompt(e.target.value)} placeholder='Describe what you want to generate' />
      <button className='btn' onClick={generateImage}>Generate Image</button>
      {image.length > 0 ? <img className='gen-image' src={image} alt="Generated image" /> : <h2>Write your input to view image here!</h2>}
    </div>
  )
}

export default App
