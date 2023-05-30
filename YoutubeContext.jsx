import React, { createContext, useState } from 'react'
export const songContext = createContext();

const YoutubeContext = (props) => {

    // const[subscription1,setSubscription1] = useState(true)
    // const[subscription2,setSubscription2] = useState(false)
    // const[subscription3,setSubscription3] = useState(false)
    // const[subscription4,setSubscription4] = useState(false)
    // const[subscription5,setSubscription5] = useState(false)
    // const[subscription6,setSubscription6] = useState(false);
    
    const[subscriptions,setSubscriptions]=useState([true,false,false,false,false,false]);
   
    const handleActivate=(e)=>{
        console.log(`Button id: ${e.target.id}`);
        let subId = e.target.id
        if(subscriptions[subId]){
          subscriptions[subId]=false
        }else{
          subscriptions[subId]=true
        }
        setSubscriptions(()=>([
          ...subscriptions
        ]))
        console.log(subscriptions);
        }

    //     setSubscriptions(()=>([
    //       subscription1,
    //       subscription2,
    //       subscription3,
    //       subscription4,
    //       subscription5,
    //       subscription6
    //     ]))
    //     // console.log(subscriptions);
    //     console.log(subscription1,subscription2,subscription3,subscription4,subscription5,subscription6);
    // }

  return (
    <songContext.Provider value={{setSubscriptions, subscriptions, handleActivate}}>
        {props.children}
    </songContext.Provider>
  )
}

export default YoutubeContext