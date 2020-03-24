import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'

import './TextContainer.css'

const TextContainer = ({ users }) => {
  return (
    <div className='textContainer'>
      <div>
        <h1>
          Realtime Chat Application{' '}
          <span role='img' aria-label='emoji'>
            💬
          </span>
        </h1>
        <h2>
          Created with React, Express, Node and Socket.IO
          <span role='img' aria-label='emoji'>
            ❤️
          </span>
        </h2>
      </div>

      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className='activeContainer'>
            <h2>
              {users.map(user => (
                <div className='activeItem' key={user.name}>
                  <img src={onlineIcon} alt='Online Icon' /> {user.name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default TextContainer