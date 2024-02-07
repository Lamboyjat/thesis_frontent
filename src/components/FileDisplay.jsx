import {useState, useRef, useEffect} from 'react'

export const FileDisplay = (props) => {
    const { handleAudioReset, file, audioStream, handleFormSubmission } = props
    const audioRef = useRef()

    useEffect(() => {
        if (!file && !audioStream) { return }
        if (file) {
            console.log('HERE FILE', file)
            audioRef.current.src = URL.createObjectURL(file)
        } else {
            console.log('EHER AUDIO', audioStream)
            audioRef.current.src = URL.createObjectURL(audioStream)
        }
    }, [audioStream, file])
    
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20 w-full max-w-prose mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'><span className='text-blue-400 bold'>Your</span> File</h1>
        <div className='flex flex-col text-left my-4'>
            <h3 className='font-semibold'>File Name:</h3>
            <p className='truncate'>{file ? file?.name : 'Sample Audio'}</p>
        </div>
        <div className='flex flex-col mb-2'>
            <audio ref={audioRef} className='w-full' controls>
                Your browser does not support the audio element.
            </audio>
        </div> 
        <div className='flex items-center justify-between gap-4'>
            <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-200'>
                Reset
            </button>
            <button onClick={handleFormSubmission} className='specialBtn px-3 p-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium'>
                <p>Transcribe</p>
                <i class="fa-solid fa-pen-nib"></i>
            </button>
        </div>
    </main>
  )
}
