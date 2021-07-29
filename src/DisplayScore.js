const DisplayScore=({score,total})=>{
    return(
        <div className="score-center">
            <h1>You scored {score}/{total}.</h1>
            <a href="./App.js">Retake Test</a>
        </div>
 
    )
}

export default DisplayScore ;