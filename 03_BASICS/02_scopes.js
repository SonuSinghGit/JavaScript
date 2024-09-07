let a=300

if(true)
{
    let a=30;
    //console.log("INNER ",a)
}
//console.log(a)

function one(){
    const username="sonu"
    function two()
    {
        const website=" you_tube"
       // console.log(username+website);
       console.log(username)
    }
    //console.log(website);//website not accesible outside scope

    two();//sonu
}

one()
