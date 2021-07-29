import './App.css'
import React, { useState } from 'react'
import Header from './header.js'
import Footer from './footer.js'
import Definitions from './definitions'
// import Button from './buttonDarkMode'

/*
  Example respones:
  { definitions:
   [ { type: 'noun',
       definition:
        'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
       example:
        'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
       image_url:
        'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
       emoji: '🦉' } ],
  word: 'owl',
  pronunciation: 'oul' }
*/

const Feature = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center'>
      <div className='bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg'>
        <div className='max-w-xl px-6 py-12 lg:max-w-5xl'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>A modern UI for a <span className='text-indigo-600 dark:text-indigo-400'>Dictionary</span></h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

          <div className='mt-8'>
            <a href='#' className='px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700'>Start Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const App = () => {
  const token = '8d3b7dbe69dc51e7126e64381fc5a2735cc7d79c'
  const Owlbot = require('owlbot-js')

  const client = Owlbot(token)

  const [newPetition, setnewPetition] = useState('')

  const [newError, setnewError] = useState()

  const [newDefinition, setnewDefinition] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    document.activeElement.blur()
    if (newPetition !== '') {
      client.define(newPetition)
        .then(function (result) {
          setnewDefinition(result)
          setnewError('')
        })
        .catch(function () {
          setnewDefinition({})
          setnewError(
            <>
              <b>no definition for {newPetition} :(</b>
              <img className='w-32 h-32 rounded-full my-8' src='https://pbs.twimg.com/media/ETNUs_XWoAA1JBv.jpg' alt='sad cat' />
            </>
          )
        })
      setnewPetition('')
    }
  }

  const handleChange = (event) => {
    setnewPetition(event.target.value)
  }

  const changeTheme = () => {
    const htmlClasses = document.querySelector('html').classList
    if (localStorage.theme === 'dark') {
      htmlClasses.remove('dark')
      localStorage.removeItem('theme')
    } else {
      htmlClasses.add('dark')
      localStorage.theme = 'dark'
    }
  }

  return (
    <>
      <div className='font-title'>
        <Header />
      </div>

      <Feature />

      <div className='flex flex-col items-center text-left w-full bg-gray-100 dark:bg-gray-900' id='Content'>
        <form onSubmit={handleSubmit} className='mt-14 mb-8'>
          <input value={newPetition} onChange={handleChange} className='shadow appearance-none border dark:border-transparent rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none dark:bg-gray-800 dark:text-white focus:shadow-outline"' />
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 dark:border-transparent rounded shadow dark:bg-indigo-500 dark:text-white'>check!</button>
        </form>

        <p className='flex flex-col items-center text-center font-body mx-8 text-3xl dark:text-white'>
          {newError}
        </p>
        {/* Por algun motivo se rerenderiza el componente Definitions, investigar */}
        <Definitions result={newDefinition} />

      </div>

      <button onClick={changeTheme}>cambio de modo</button>

      {/* <Button /> */}

      <div id='Footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
