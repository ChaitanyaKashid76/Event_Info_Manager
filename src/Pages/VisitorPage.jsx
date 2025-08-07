
import Input from "../Components/InputBar";
import { IoPerson } from "react-icons/io5";
import styles from "../CSS/Visitor.module.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { EventContext } from "../Context/EventContext";

function Visitor() {
  const inputRef = useRef(null);
  const visitorCount = useRef(0);
  const [name, setName] = useState("");
  const [visitors, setVisitors] = useState([]);
  const [welcome, setWelcome] = useState("");
  const { eventName, organizerName } = useContext(EventContext);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (visitors.length > 0) {
      setWelcome(`Welcome, ${visitors[visitors.length - 1]}!`);
    }
  }, [visitors]);

  function handleCheckIn() {
    if (name.trim() === "") return;
    setVisitors([...visitors, name]);
    visitorCount.current += 1;
    setName("");
  }

  return (
    <div className={styles.visitor}>
      <h4>
        <IoPerson /> Enter Your name:
      </h4>
      <Input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className={styles.chckBtn} onClick={handleCheckIn}>
        Check in
      </button>

      <h4>{welcome}</h4>

      <ul type="none">
        <li>
          <strong>Event:</strong> {eventName}
        </li>
        <li>
          <strong>Total Visitors:</strong> {visitorCount.current}
        </li>
        <li>
          <strong>Visitor List:</strong>
          <ul type="none"> 
            {visitors.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Organizer:</strong> {organizerName}
        </li>
      </ul>

      <div className={styles.buttons}>
        <Link to="/event">
          <button>
            <FaArrowRight />
          </button>
        </Link>
        <p>Go to Event info</p>
      </div>
    </div>
  );
}

export default Visitor;
