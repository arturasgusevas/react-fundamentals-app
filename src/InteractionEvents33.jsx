const InteractionEvents33 = () => {

    function handleClick(){
        alert('Button was clicked')
    }

    function handleChange(e){
        console.log(e.target.value)
    }

    return (
        <>
            <button onClick={handleClick}>BUTTON</button>
            <input onChange={handleChange} type='text' />              
        </>        
    )
}

export default InteractionEvents33;
