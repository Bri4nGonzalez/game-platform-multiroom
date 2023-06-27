class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
       // cuando el objeto el buttom para de caer
       if(this.sides.bottom < canvas.height){
            this.position.y++
            this.sides.bottom = this.position.y + this.height
    // }
}   
    }

}
