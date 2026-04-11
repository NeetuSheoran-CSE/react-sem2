import React from 'react'

const Ifelse = () => {

    const isAgent=false;
    let msg;

    if (isAgent){
        msg="khatam..tata..byee.."
    }

    else{
        msg="welcome to karachi"
    }

  return (
    <> //react fragment
    <div>Ifelse</div>
    <h1>{msg}</h1>
    </>
  )
}

export default Ifelse
