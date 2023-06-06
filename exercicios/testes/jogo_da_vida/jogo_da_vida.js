class gameOfLife{
    constructor(width, height){
        this.canvas = new Canvas()
        this.BoardSize =
        {Widht: width ,
        Height: height}
        this.CellSize ={ Widht: this.canvas.Widht/width,
        Height:this.canvas.Height/height}
        this.Cells= []
        this.startCells()
    }
    startCells(){
        for (var y=0; y< this.BoardSize.Height; y++){
           let Line =[]
           this.Cells.push(Line) 
           for(var x = 0; x< this.BoardSize.Widht; x++){
            let cell ={alive:0, x:x*this.CellSize.Widht, y:y*this.CellSize.Height}
            Line.push(cell)
           }

        }
    }
    render(){
        this.cells.forEach(line=>{
            line.forEach(cell =>{
                this.rendercell(cell)
            })
        })
       
    
    }
    rendercell(cell){
        this.canvas.rectangle(cell.x, cell.y, this.CellSize.Widht, this.CellSize.Height ,)
    }
    execute(){
        this.render()

    }
}
var game = new gameOfLife(10,10)
game.execute()