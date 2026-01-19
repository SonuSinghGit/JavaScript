// immediately invoked function expressions (iife)

(function chai(){
    // named iife
    console.log("DB CONNECTED");
})(); // note  if you write two iffe in the same file you need to put ; after first iffe 

((name)=>{
      console.log(`db connected two ${name} `)
})("sonu")

