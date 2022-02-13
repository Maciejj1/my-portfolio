import React from 'react'
import respons from '../../assets/pngegg.png'
import vscode from '../../assets/vscode.png'
const FourthPage = () => {
  return (
    <div className='fourth-page' id="skills">
      <div className='fourth-page-title'>
          <h1>Skills</h1>
      </div>
      <div className='fourth-page-what-i-do'>
          <h3>What can I do:</h3>
          <img src={respons}/>
          <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-64.png"/>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-70.png"/>
          <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-70.png"/>
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-64.png"/>
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-64.png"/>
          <img src={vscode} className="vscode"/>
          <img src="https://cdn.iconscout.com/icon/free/png-64/git-225996.png"/>
          <img src="https://cdn.iconscout.com/icon/free/png-64/webstorm-3521803-2945220.png"/>
          <img src="https://cdn.iconscout.com/icon/free/png-64/figma-3521426-2944870.png"/>
          <img src="https://cdn.iconscout.com/icon/free/png-64/trello-2-432549.png" />
      </div>
      <div className='fourth-page-what-i-learning'>
          <h3>What am I learning:</h3>
          <img src="https://cdn.iconscout.com/icon/free/png-64/typescript-3629120-3030260.png" />
          <img src="https://cdn.iconscout.com/icon/free/png-64/redux-283024.png" />
      </div>
      <div className='fourth-page-basic-knowledge'>
          <h3>Basic knowledge:</h3>
          <img src="https://cdn.iconscout.com/icon/free/png-64/python-2-226051.png"/>
          <img src="https://cdn.iconscout.com/icon/free/png-64/c-4-226082.png"/>
          </div>    
    </div>
  )
}

export default FourthPage