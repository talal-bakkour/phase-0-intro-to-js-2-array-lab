const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    
    cats.push('Ralph');
}
function destructivelyRemoveLastCat(){
    cats.pop('Ralph');

}
function destructivelyPrependCat(name)
{
    cats.unshift('Bob');
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function removeFirstCat(){
   
    return  cats.slice(1);

}
function appendCat(Ralph) {
    return [...cats, Ralph];
  }
  function  prependCat(Bob)
  {
    return [Bob, ...cats];
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }

