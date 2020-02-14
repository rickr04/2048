export  class Grid {
    constructor(size){
        this.array = new Array(size*size).fill(0);
        this.add_start_tile();
    }

    RandomBasedOnWeight(input) {
        let i, sum=0, r=Math.random();
        for (i in input) {
          sum += input[i];
          if (r <= sum) return i;
        }
      }
 
    add_start_tile(){
        let stringtile = this.RandomBasedOnWeight( {2:0.9, 4:0.1} );
        let stringtile2 = this.RandomBasedOnWeight( {2:0.9, 4:0.1} );
        let tile = parseInt(stringtile, 10);
        let tile2 = parseInt(stringtile2,10);
      //  console.log(tile);
      //  console.log(tile2);


        let random_index_1 =Math.floor(Math.random() * this.array.length)
        let random_index_2 = Math.floor(Math.random() * this.array.length)
       // console.log("index" + " "+ random_index_1);
       // console.log("index" + " "+ random_index_2)

        while (random_index_1 == random_index_2){
          //  console.log("hi");
            random_index_2 = Math.floor(Math.random() * this.array.length)
        }
        if (random_index_1 == random_index_2){
            //issue here
        }
        this.array[random_index_1] = tile;
        this.array[random_index_2] = tile2;
      
    }
    add_tile(){
        let stringtile = this.RandomBasedOnWeight( {2:0.9, 4:0.1} );
        let tile = parseInt(stringtile, 10);

        let random_index =Math.floor(Math.random() * this.array.length)
        if (this.array[random_index] == 0){
            this.array[random_index] = tile;
        }else{
            //nope
        }

    }
    getGrid(){
        return this.array;
    }

}