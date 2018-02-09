import React, {Component} from 'react'
import LetterheadCard from '../components/LetterheadCard'

class Letterhead extends Component {
  render() {
    return (
      <div className="container flow-text">
        <div className="row">
          <div className="col s12">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="row">
     
            <LetterheadCard
              title='Card title'
              action='Action1'
              image='https://placeimg.com/600/776/know'/>
            <LetterheadCard
              title='Card title'
              action='Action1'
              image='https://placeimg.com/600/776/tech'/>
            <LetterheadCard
              title='Card title'
              action='Action1'
              image='https://placeimg.com/600/776/arch'/>
            <LetterheadCard
              title='Card title'
              action='Action1'
              image='https://placeimg.com/600/776/winter'/>
          </div>
        </div>
       
    )
  }
}

export default Letterhead