import './Button.css'



function Button (props) {
    return (
        <div className='button'>
            <button type="button" className='button__input' onClick={() => {
               const audio = new Audio ()
               audio.src = props.audioUrl
               audio.play()
            }}>
            </button>
            <p className='button__text'>DALE</p>
        </div>

    );
}

export default Button