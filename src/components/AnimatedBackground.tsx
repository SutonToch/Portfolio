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
            key: i,
            x: `${(i+1)*smallXStep*(1.1-Math.random()*0.2)}%`,
            duration: `${80*(1.2-Math.random()*0.4)}s`,
            delay: `-${60*Math.random()}s`
        }
        movingBoxes.push(box)
    }
    for(let i=0; i<props.mediumBoxCount; i++) {
        let box = {
            class: 'medium-moving-box',
            key: i,
            x: `${(i+1)*mediumXStep*(1.1-Math.random()*0.2)}%`,
            duration: `${50*(1.2-Math.random()*0.4)}s`,
            delay: `-${35*Math.random()}s`
        }
        movingBoxes.push(box)
    }
    for(let i=0; i<props.largeBoxCount; i++) {
        let box = {
            class: 'large-moving-box',
            key: i,
            x: `${(i+1)*largeXStep*(1.1-Math.random()*0.2)}%`,
            duration: `${30*(1.2-Math.random()*0.4)}s`,
            delay: `-${20*Math.random()}s`
        }
        movingBoxes.push(box)
    }

    

    const movingBoxElements = movingBoxes.map((box) => {
        return(
            <div className={box.class} 
            style={{right: box.x, animation: `move-box ${box.duration} ${box.delay} linear infinite`}}
            key={box.class + box.key}
            />
        )
    })

  return (
    <>
        {movingBoxElements}
    </>
  )
}