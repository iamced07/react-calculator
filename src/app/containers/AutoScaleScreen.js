import React, { useEffect, useState, useRef } from 'react'

const AutoScaleScreen = ({children}) => {
    const [scale, setScale] = useState(1);
    const ref = useRef();

    useEffect(()=>{
        const node = ref.current;
        const parentNode = ref.current.parentElement;
        
        const availableWidth = parentNode.offsetWidth
        const actualWidth = node.offsetWidth
        const actualScale = availableWidth / actualWidth
        
        if (scale === actualScale)
          return;
        
        if (actualScale < 1) {
            setScale(actualScale);
        } else if (scale < 1) {
            setScale(1);
        }
    },[children]);

  return (
    <div
    className="auto-scaling-text"
    style={{ transform: `scale(${scale},${scale})` }}
    ref={ref}
  >{children}</div>
  )
}

export default AutoScaleScreen