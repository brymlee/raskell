class Rectangle extends React.Component{
	render(){
		const style = {
			backgroundColor: 'red'
		}
		return <div 
			    class='rectangle' 
			    id={this.props.id}
			    style={style}
			    width={this.props.width} 
			    height={this.props.height} 
			    x={this.props.x}
			    y={this.props.y}
			    onKeyPress={event => console.log(event.key)}>
		       </div>
	}
}

class Canvas extends React.Component{
	render(){
		return <div id='canvas'
		            width={800} 
		            height={600}>
			       <Rectangle id={'rectangleOne'}
				          color={'red'}
					  width={50}
					  height={50}
					  x={50}
					  y={50} />
					  
		       </div>
	}
}

ReactDOM.render(<Canvas />, document.getElementById('gameRoot'))

