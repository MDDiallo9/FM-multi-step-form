import { useState } from 'react'
import './App.css'
import PageIndicator from './components/PageIndicator'
import Form from './components/Form'

function App() {
  const [currentPage,setCurrentPage] = useState(1)
  const handleClick = () => setCurrentPage(currentPage + 1)
  const goBack = () => setCurrentPage(currentPage -1)
  return (
    <>
      <ul className='flex gap-5 my-9 text-white'>
        <PageIndicator index={1} currentPage={currentPage} />
        <PageIndicator index={2} currentPage={currentPage} />
        <PageIndicator index={3} currentPage={currentPage} />
        <PageIndicator index={4} currentPage={currentPage} />
      </ul>
      <Form currentPage={currentPage}/>
      <div className='mt-auto w-full p-4 flex justify-between bg-white items-center'>
            <p className='text-[--Cool-gray] cursor-pointer' onClick={goBack}>{currentPage > 1 ? "Go back" : null}</p>
            <input onClick={handleClick} type="submit" value="Next Step"  className='bg-[--Marine-blue] text-white text-sm p-2 rounded-md cursor-pointer shrink-0'/>
        </div>
    </>
  )
}

export default App
