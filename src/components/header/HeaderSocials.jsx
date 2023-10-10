import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com' target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href='http://github.com' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='http://gmail.com' target="_blank" rel="noreferrer"><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials