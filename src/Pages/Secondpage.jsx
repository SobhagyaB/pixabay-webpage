import React from 'react'
import { useLocation } from 'react-router-dom'

const Secondpage = () => {
  let newimg = useLocation();
  let newimgdata = newimg.state.x;
  return (
    <div id="imageContainer">
      <img id="styledImage" src={newimgdata.webformatURL} alt="" />
    </div>
  )
}

export default Secondpage;
