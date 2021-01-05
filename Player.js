class Player
{
    constructor()
    {
     this.name=null
     this.distance=0
     this.position=0   
    }
    readPlayerCount()
    {
        var gameState=database.ref("playerCount")
        gameState.on("value",function(data){
          Count=data.val()  
        })
    }
    writePlayerCount(A){
        database.ref("/")
        .update({
            "playerCount":A
            
        }) 
    }
    updateName(name)
    {
        var C="Allplayers/player"+this.position
        database.ref(C)
        .set({
            "name":this.name,
            "distance":this.distance
        })
    }
    readAllPlayers()
    {
        var cars=database.ref("Allplayers")
        cars.on("value",function(data){
          Allplayers=data.val()  
        })
    }
}