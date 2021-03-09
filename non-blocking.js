var fs=require('fs');

fs.readFile('text.txt', function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(() => {
        console.log('MOstra depois de 2 segundos')
    }, 2000);
})

console.log('Comeca daqui')