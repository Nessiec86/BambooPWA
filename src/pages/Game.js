import React, {Component} from 'react';
import Nav from '../Components/Nav';
import game from '../Snake/game';
import main from '../Snake/main';
import snake from '../Snake/snake';

class Game extends Component {
  
  

  render () {  
  
    return (
      <div className='background'>
        <Nav/>
        <canvas id="snake" width="500" height="500"></canvas>
        <div id="gameover" style="display: none">
            Game Over
        </div>
      </div>
    );
  }
}

export default Game;