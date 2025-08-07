import Input from "../Components/InputBar";
import { MdOutlineStars } from "react-icons/md";
import styles from "../CSS/Event.module.css"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext,useState } from "react";
import { EventContext } from "../Context/EventContext";


function Event(){
     const { setEventName, setOrganizerName, eventName, organizerName } = useContext(EventContext);
      const [newEvent, setNewEvent] = useState("");
        const [newOrganizer, setNewOrganizer] = useState("");
function handleSave(){
    setEventName(newEvent || "");
    setOrganizerName(newOrganizer || "");
    setNewEvent("");
    setNewOrganizer("");

}

function handleDelete(){
setEventName("");
setOrganizerName("");
}

    return(
        <>
        <div className={styles.event}>
            <h4> <MdOutlineStars /> Event Name:</h4>
            <Input value={newEvent} onChange={(e)=> setNewEvent(e.target.value)} />
            <h4>Organizer Name:</h4>
            <Input value={newOrganizer} onChange={(e)=>setNewOrganizer(e.target.value)}/>
            <button className={styles.saveBtn}onClick={handleSave}>Save Event Info</button>
            <ul type="none">
                <li>Event:{eventName}</li>
              
                <li>Organizer:{organizerName}</li>
            </ul>
            <button className={styles.delBtn} onClick={handleDelete}>Delete Event Info</button>
            <div className={styles.buttons}>
                <Link to="/">
                <button><FaArrowLeft /></button>
                </Link>
                <p>Back to check in</p>
            </div>
        </div>
        </>
    )
}
export default Event;