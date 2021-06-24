class Player {

    constructor() {

        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;

    }

    getCount() {

        database.ref('playercount').on("value", (data) => {
            playerCount = data.val();
        })

    }

    updateCount(count) {
        database.ref('/').update({
            playercount: count
        })

    } 


    update() {

        var playerIndex = 'players/player' + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            rank : this.rank
        })

    }

    static getPlayerInfo() {
        var playerRef = database.ref('players');
        playerRef.on("value", (data) => {
            allPlayers = data.val();

        })

    }
    getCarsAtEnd() {
        database.ref('CarsAtEnd').on("value" ,(data) => {
            CarsAtEnd = data.val();
        })

    }
    static updateCarsAtEnd() {
        database.ref('/').update({
            CarsAtEnd: CarsAtEnd + 1
        })
        this.rank = this.rank + 1
    }
}