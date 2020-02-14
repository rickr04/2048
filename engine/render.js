import Game from "./game.js";
let g = new Game(4);

const set_up_new_game = function(g){

    $('.score').replaceWith('<div class=' + 'score' + '>'+g.gameState.score+'</div>');
    $('.won').replaceWith('<div class=' + 'won' + '>'+'</div>');
    $('.lost').replaceWith('<div class=' + 'lost' + '>'+'</div>');
    for (let i =0; i<g.size; i++){
        for (let j=0; j<g.size; j++){
            $('.game').append('<div class='+ 'game-cell'+i+j+'>' +g.two_d_array[i][j]+ '</div>');  
            if(g.two_d_array[i][j]== 2){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'blue; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 4){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Lime; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 8){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'orange; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 16){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'green; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 32){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'red; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 64){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'aqua; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 128){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'teal; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 256){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'navy; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 512){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Silver; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 1024){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'yellow; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
            if(g.two_d_array[i][j]== 2048){
                $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Fuchsia; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
            }
        }
    }
    
    
    
    $(document).keydown(function(x) {
        
      

        switch(x.which){
            case 37: //left
            g.move('left')
            for (let i =0; i<g.size; i++){
                for (let j=0; j<g.size; j++){          
                    $('.game-cell' +i+j).replaceWith('<div class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    if(g.two_d_array[i][j]== 2){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'blue; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 4){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Lime; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 8){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'orange; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 16){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'green; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 32){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'red; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 64){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'aqua; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 128){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'teal; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 256){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'navy; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 512){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'silver; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 1024){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'yellow; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 2048){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Fuchsia; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                }
            }
            
            $('.score').replaceWith('<div class=' + 'score' + '>'+g.gameState.score+'</div>');
            if(g.gameState.won){
              
                $('.won').replaceWith('<div class=' + 'won' + '>'+"<strong>" +"You won!" +"</strong>"+'</div>');
            }
            if(g.gameState.over){
                
                $('.lost').replaceWith('<div class=' + 'lost' + '>'+"<strong>" +"You lost :(" +"</strong>"+'</div>');
                
            }
            break;
            
            case 38: //up
            g.move('up')
            for (let i =0; i<g.size; i++){
                for (let j=0; j<g.size; j++){
                    $('.game-cell' +i+j).replaceWith('<div class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                        
                    if(g.two_d_array[i][j]== 2){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'blue; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 4){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Lime; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 8){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'orange; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 16){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'green; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 32){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'red; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 64){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'aqua; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 128){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'teal; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 256){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'navy; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 512){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Silver; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 1024){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'yellow; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 2048){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Fuchsia; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                }
            }
            $('.score').replaceWith('<div class=' + 'score' + '>'+g.gameState.score+'</div>');
            if(g.gameState.won){
              
                $('.won').replaceWith('<div class=' + 'won' + '>'+"<strong>" +"You won!" +"</strong>"+'</div>');
            }
            if(g.gameState.over){
                
                $('.lost').replaceWith('<div class=' + 'lost' + '>'+"<strong>" +"You lost :(" +"</strong>"+'</div>');
                
            }
            break;
    
            case 39: //right
            g.move('right')
            for (let i =0; i<g.size; i++){
                for (let j=0; j<g.size; j++){
                    $('.game-cell' +i+j).replaceWith('<div class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>'); 
                    
                        
                    if(g.two_d_array[i][j]== 2){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'blue; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 4){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Lime; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 8){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'orange; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 16){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'green; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 32){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'red; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 64){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'aqua; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 128){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'teal; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 256){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'navy; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 512){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Silver; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 1024){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'yellow; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 2048){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Fuchsia; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                }
            }
            $('.score').replaceWith('<div class=' + 'score' + '>'+g.gameState.score+'</div>');
            if(g.gameState.won){
              
                $('.won').replaceWith('<div class=' + 'won' + '>'+"<strong>" +"You won!" +"</strong>"+'</div>');
            }
            if(g.gameState.over){
                
                $('.lost').replaceWith('<div class=' + 'lost' + '>'+"<strong>" +"You lost :(" +"</strong>"+'</div>');
                
            }
            break;
    
            case 40: //down
            g.move('down')
            for (let i =0; i<g.size; i++){
                for (let j=0; j<g.size; j++){
                    $('.game-cell' +i+j).replaceWith('<div class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                       
                    if(g.two_d_array[i][j]== 2){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'blue; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 4){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Lime; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 8){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'orange; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 16){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'green; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 32){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'red; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 64){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'aqua; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 128){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'teal; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 256){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'navy; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 512){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Silver; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 1024){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'yellow; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                    if(g.two_d_array[i][j]== 2048){
                        $('.game-cell' +i+j).replaceWith('<div style='+'background-color:'+ 'Fuchsia; '+ 'class='+ 'game-cell'+i +j+'>' +g.two_d_array[i][j]+ '</div>');  
                    }
                }
            }
            $('.score').replaceWith('<div class=' + 'score' + '>'+g.gameState.score+'</div>');
            if(g.gameState.won){
              
                $('.won').replaceWith('<div class=' + 'won' + '>'+"<strong>" +"You won!" +"</strong>"+'</div>');
            }
            if(g.gameState.over){
                
                $('.lost').replaceWith('<div class=' + 'lost' + '>'+"<strong>" +"You lost :(" +"</strong>"+'</div>');
                
            }
            break;
        }
    })

    const handelResetPress= function(event){

        $('.game').empty();
       //always using a 4x4 grid
        event.data = new Game(4);
   
        set_up_new_game(event.data);

        
       

    }
        
$( ":button" ).on('click',null, g, handelResetPress);

}

        


 set_up_new_game(g);
 