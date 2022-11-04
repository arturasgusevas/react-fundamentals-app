const ConditionalRenderingComponent = ({isBlue}) => {
    if(!isBlue){
        return <span>I am {!isBlue && "red"}</span>
    }
    return <span>I am {isBlue && "blue"}</span>
}

export default ConditionalRenderingComponent;