import React, { useState } from 'react'

const useDisplay = (param) => {
    const [display, setDisplay] = useState(param)

    const setdisplay = () => {
        setDisplay(prev=>!prev)
    }
    return {display,setdisplay}
}

export default useDisplay
