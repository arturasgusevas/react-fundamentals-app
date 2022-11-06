const ConditionalRenderingComponent = ({isBlue}) => {

    return (
        <span>
            {!isBlue ? ('I am red') : ('I am blue')}
        </span>
    )
}

export default ConditionalRenderingComponent;