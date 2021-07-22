import React,{Component} from 'react'
import App from './App.css'

class Meme extends Component {
    constructor(){
        super()
        this.state={
            text:"",
            img:"",
            imgUrls:[]
        }
        this.printText = this.printText.bind(this)
        this.changeImg = this.changeImg.bind(this)
    }

    componentDidMount(){
        fetch(" https://api.imgflip.com/get_memes")
        .then(res=>res.json()).then(res=>{
            const {memes} =res.data
            this.setState({
                imgUrls:memes
            })
        })
    }
    printText(event) {
        const value=event.target.value
        this.setState({text:value})
    }

    changeImg(){
        const randNum = Math.floor(Math.random()
            *this.state.imgUrls.length)
            const randImg = this.state.imgUrls[randNum].url
            this.setState({img : randImg})
        
    }

    render(){
        return(
            <div className="head">
              <input className="name" type="text" placeholder="Type anything" onChange={this.printText}/>
              <button  className="click" onClick={this.changeImg}>Click here</button>
               <div className="image">
                   <img src={this.state.img} />
                   <h2>{this.state.text}</h2>
               </div>
            </div>

        )
    }
}

export default Meme