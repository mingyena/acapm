if(process.argv[2] === "init"){
    //do init stunode
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });


    var newlist = {};
    ask5keys(5);

    function ask5keys(number){
        let counter = 1;
        if(number >=1){
            rl.question(' What is the value for this json object?  ', (answer) => {
                console.log(`Thank you for your answer: ${answer}`);
                    if(number==1){
                        newlist[counter]= answer;
                        writeToFile(newlist);
                        return rl.close();
                    }
                    else{
                       
                        newlist[counter]= answer;
                        number--;
                        counter++;
                        ask5keys(number);
                    }
                });
        }
    }
    function writeToFile(theArray){
      
        var theJson=JSON.stringify(theArray);
     
        var fs = require('fs');
        fs.writeFile("package.json", theJson, function(err) {
            if(err) {
            return console.log(err);
            }

        console.log("The file was saved! Thank you for your time!");
        }); 
    }

}