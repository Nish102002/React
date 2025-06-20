import React, { useState } from 'react'

import Third from './Third'
import Operation from './Operation'

function ConditionalRender() {
 const [status,setstatus]=useState()
 if(status)
    return<Operation></Operation>
    else
    return<Third></Third>
}

export default ConditionalRender
