import Button from "./Button"
import './ButtonPanel.css';
import audio1 from './Audio/Dale_6.mp3'
import audio2 from './Audio/Dale_2.mp3'
import audio3 from './Audio/Dale_9.mp3'
import audio4 from './Audio/Dale_4.mp3'

function ButtonPanel() {
    return(
        <div className="Panel">
            <Button audioUrl = {audio1}/>
            <Button audioUrl = {audio2}/>
            <Button audioUrl = {audio3}/>
            <Button audioUrl = {audio4}/>
        </div>
    );
}

export default ButtonPanel