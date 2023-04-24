export const drawRect = (detection , ctx) => {

    detection.forEach(prediction => {
        // Get prediction result 
        const [x,y,width,height,] = prediction['bbox']
        const text = prediction['class']

        // set  styling
        const color  = '#' + Math.floor(Math.random()*16777215).toString(16)
        ctx.strokesylt = color
        ctx.font = '18px Arial'    
        ctx.fillStyle= color

        // Draw retangles and text 
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    });

}