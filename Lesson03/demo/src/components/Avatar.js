import React from 'react'

function Avatar(props) {
  return (
    <div>
      <img src={props.link} alt='Avatar' style={{width:"150px"}}/>
    </div>
  )
}

export default Avatar
