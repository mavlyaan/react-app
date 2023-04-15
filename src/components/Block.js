import React from "react"

class Block extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="main">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default Block