import './../styles/AnimatedBackground.css'

interface AnimatedBackgroundProps {
    smallBoxCount:number
    mediumBoxCount:number
    largeBoxCount:number
}

export default function AnimatedBackground(props:AnimatedBackgroundProps) {

    const movingBoxes = [];
    const smallXStep = Math.floor(100 / props.smallBoxCount)
    const mediumXStep = Math.floor(100 / props.mediumBoxCount)
    const largeXStep = Math.floor(100 / props.largeBoxCount)
    //randomize x-axis, duration and negative animation delay
    //3 types, smaller is slower
    for(let i=0; i<props.smallBoxCount; i++) {
        let box = {
            class: 'small-moving-box',
            x: `${(i+1)*smallXStep*(1.2-Math.random()*0.4)}%`,
            duration: `${60*(1.2-Math.random()*0.4)}s`,
            delay: `-${45*Math.random()}s`
        }
        movingBoxes.push(box)
    }
    for(let i=0; i<props.mediumBoxCount; i++) {
        let box = {
            class: 'medium-moving-box',
            x: `${(i+1)*mediumXStep*(1.2-Math.random()*0.4)}%`,
            duration: `${40*(1.2-Math.random()*0.4)}s`,
            delay: `-${30*Math.random()}s`
        }
        movingBoxes.push(box)
    }
    for(let i=0; i<props.largeBoxCount; i++) {
        let box = {
            class: 'large-moving-box',
            x: `${(i+1)*largeXStep*(1.2-Math.random()*0.4)}%`,
            duration: `${25*(1.2-Math.random()*0.4)}s`,
            delay: `-${18*Math.random()}s`
        }
        movingBoxes.push(box)
    }

    

    const movingBoxElements = movingBoxes.map((box) => {
        return(
            <div className={box.class} 
            style={{right: box.x, animation: `move-box ${box.duration} ${box.delay} linear infinite`}}/>
        )
    })

  return (
    <>
        {/* <div className="moving-box" /> */}
        {movingBoxElements}
    </>
  )
}