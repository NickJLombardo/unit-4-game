var result;
var win=0;
var loss=0;

var cs= 0;


var start =function (){

    result=Math.floor(Math.random()* 111) +19;
    $('.rocks').empty()

var images = ['https://media.australianmuseum.net.au/media/dd/images/Some_image.width-1200.2b0a9fe.jpg',
              'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/PinkGranite-040-C_hjswh8.jpg',
              'https://www.rocksforkids.com/wp-content/uploads/2018/03/igneous-rocks.jpg',
             'https://geology.com/rocks/pictures/quartz-diorite.jpg',]
    for (var i=0; i<4; i++){

        
        var randomRock= Math.floor(Math.random()* 11) +1;
        console.log(randomRock)
        var rock = $("<div>");
        
            rock.attr({
                'class': 'rock',
            'random': randomRock

        });
        rock.css({
            'background-image': 'url(' + (images[i]) + '',
            'background-size': 'cover'
        });
        
        $(".rocks").append(rock);
        
        
        }
        
        
        $('#prev').html('Current Score: ' + cs)
        
        
        
        $('#result').html('Goal:' + result) 
}

start ();



$(document).on('click', ".rock", function() {




    var number = parseInt($(this).attr('random'));

    cs += number; 
    

    $('#prev').html('Current Score: ' + cs)
    if( cs > result){
        loss++;
     
     $('#loss').html( 'Losses:' + loss)

     cs = 0;

     start ();

    }

    else if( cs === result){
       
        win++

        $('#win').html('Wins:' + win)

        cs = 0;

        start ();


     
    }



});



