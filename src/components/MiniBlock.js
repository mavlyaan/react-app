import React from 'react'

class MiniBlock extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='block'>
                <div className='title'>
                <h3>{this.props.title}</h3>
                </div>
                <div className='paragraph'>
                <p>{this.props.paragraph}</p>
                </div>
                <div className='logo'>
                <img src={this.props.img} />
                </div>
            </div>
            
        )
    }

}

export default MiniBlock