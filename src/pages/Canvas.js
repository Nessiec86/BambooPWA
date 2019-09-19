import React, {Component} from 'react';
import PropTypes from 'prop-types';    
import '../../src/Roulette.css';
import { Button } from 'react-bootstrap';


class Canvas extends Component {
    constructor(props) {
      super(props);
      this.state = {
        spinAngleStart: 0,
        startAngle: 0,
        spinTime: 0,
        random: 0,
        arc: Math.PI / (props.options.length / 2),
      }
      this.spinTimer = null;
      this.handleOnClick = this.handleOnClick.bind(this);
      this.spin = this.spin.bind(this);
      this.rotate = this.rotate.bind(this);
    }
  
    static propTypes = {
      className: PropTypes.string,
      options: PropTypes.array,
      baseSize: PropTypes.number,
      spinAngleStart: PropTypes.number,
      spinTimeTotal: PropTypes.number,
      onComplete: PropTypes.func,
    };
  
    static defaultProps = {
      options:  [
        'BONO ARTESANA',
        'PRODUCTO GRATIS',
        'PRODUCTO GRATIS',
        'BOLSA ALGODÓN',
        'PRODUCTO GRATIS',
        'PRODUCTO GRATIS',
        'VALE DTO. 15%',
        'PRODUCTO GRATIS',
        'PRODUCTO GRATIS',
        'VALE DTO. 15%', /*COMIENZO*/ 
        'PRODUCTO GRATIS',
        'PRODUCTO GRATIS',
        ],
      baseSize: 400,
      spinAngleStart: Math.random() * 10 + 10,
      spinTimeTotal: Math.random() * 3 + 4 * 1000,
    };
  
    componentDidMount() {
      this.drawRouletteWheel();
    }
    //BYTE TO HEX
    byte2Hex(n) {
      const nybHexString = '0123456789ABCDEF';
      return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
    }
    
    RGB2Color(r,g,b) {
        return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    }
  
    getColor(item, maxitem) {
      const phase = 0;
      const center = 128;
      const width = 128;
      const frequency = Math.PI*2/maxitem;
  
      const red   = Math.sin(frequency*item+2+phase) * width + center;
      const green = Math.sin(frequency*item+0+phase) * width + center;
      const blue  = Math.sin(frequency*item+4+phase) * width + center;
  
      return this.RGB2Color(red,green,blue);
    }
  
    drawRouletteWheel() {
      const { options, baseSize } = this.props;
      let { startAngle, arc } = this.state;
      
      // const spinTimeout = null;
      // const spinTime = 0;
      // const spinTimeTotal = 0;
      
      let ctx;
      
      const canvas = this.refs.canvas;
      if (canvas.getContext) {
        //const outsideRadius = baseSize - 25;
        //const textRadius = baseSize - 45;
        const insideRadius = baseSize - 55;
  
        ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,600,600);

        // IMG ORIGINAL
        const img = new Image()
        img.src= 'https://firebasestorage.googleapis.com/v0/b/bamboo-ver.appspot.com/o/ruleta.png?alt=media&token=bb13dbf3-4077-4fc5-aea8-48a730012e8e';
        ctx.drawImage(img,0,0,800,800);
        

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
  
        ctx.font = '14px Helvetica, Arial';
  
        for(let i = 0; i < options.length; i++) {
          const angle = startAngle + i * arc;
          
          ctx.fillStyle = this.getColor(i, options.length);
          
          ctx.beginPath();
          ctx.arc(baseSize, baseSize, 5 /*outsideRadius*/, angle, angle + arc, false);
          ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
          ctx.fill();
  
          ctx.save();
          ctx.fillStyle = 'white';
          ctx.translate(baseSize + Math.cos(angle + arc / 2) * /*textRadius*/ 240, 
                        baseSize + Math.sin(angle + arc / 2) * /*textRadius*/ 240);
          //ctx.rotate(angle + arc / 2 + Math.PI / 2);
          ctx.rotate(angle + arc / 22.5 + Math.PI / 22.5);
          const text = options[i];
          ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
          ctx.restore();          
        }
  
        //Arrow
        ctx.fillStyle = 'red';
        ctx.beginPath();
        //ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
        //ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
        //ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
        ctx.lineTo(baseSize + 10, baseSize - (340 + 20));
        ctx.lineTo(baseSize + 0, baseSize - (340 - 5));
        ctx.lineTo(baseSize - 10, baseSize - (340 + 20));
        ctx.fill();
        ctx.stroke();
      }
    }
  
    spin() {
      //CLEAR RESULT
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0,750,1000,100);

      //SPIN FUNCTION
      this.spinTimer = null;

      // RANDOM SPIN
      const random = Math.floor(Math.random() * (30 - 15)) + 15;
      this.setState({ spinTime: 0 + 5, random: random }, () => this.rotate());
      console.log(this.state.random)
    }
  
    rotate(){
      
      const { spinAngleStart, spinTimeTotal } = this.props;
      if(this.state.spinTime > 2800) {
        clearTimeout(this.spinTimer);
        this.stopRotateWheel();
      } else {
        const spinAngle = spinAngleStart - this.easeOut(this.state.spinTime, 0, spinAngleStart, spinTimeTotal);
        this.setState({
          startAngle: this.state.startAngle + spinAngle * Math.PI / 180,
          spinTime: this.state.spinTime + this.state.random,
        }, () => {
          this.drawRouletteWheel();
          clearTimeout(this.spinTimer);
          this.spinTimer = setTimeout(() => this.rotate(), 30);
        })
        console.log(this.state.random)
      }
    }
  
    stopRotateWheel() {
      let { startAngle, arc } = this.state;
      const { options, baseSize } = this.props;
  
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext('2d');
  
      const degrees = startAngle * 180 / Math.PI + 90;
      const arcd = arc * 180 / Math.PI;
      const index = Math.floor((360 - degrees % 360) / arcd);
      ctx.save();
      ctx.font = 'bold 20px Helvetica, Arial';
      const text = options[index]
      console.log(text)
      // ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize / 3);
      ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize / 0.5);
      ctx.restore();
      // this.props.onComplete(text);
    }
  
    easeOut(t, b, c, d) {
      const ts = (t/=d)*t;
      const tc = ts*t;
      return b+c*(tc + -3*ts + 3*t);
    }
  
    handleOnClick() {
      this.spin();
    }
  
    render() {
        const { baseSize } = this.props;
        //<input type="button" value="spin" onClick={this.handleOnClick} className="button" id="spin" />
              
        return (
          <div className="roulette">
            <div className="roulette-container">
              <canvas ref="canvas" width={baseSize * 2} height={baseSize * 2} className="roulette-canvas"></canvas>
            </div>
            <div className="roulette-container">
              <Button 
                value="spin" 
                onClick={this.handleOnClick} 
                className="button"  
                style={{margin:'2rem 0 0 0'}} 
                id="spin">
                GIRAR!!
              </Button>
            </div>
          </div>
        );
      }
    }
  export default Canvas;