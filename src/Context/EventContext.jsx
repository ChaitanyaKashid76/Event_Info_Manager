import { createContext, useState } from "react";
export const EventContext=createContext();
function EventProvider({children}){
    const [eventName, setEventName]=useState("");
    const [organizerName, setOrganizerName] = useState("");
    return(
<EventContext.Provider value={{eventName, setEventName, organizerName, setOrganizerName}} >
    {children}
</EventContext.Provider>

    )
}
export default EventProvider;
