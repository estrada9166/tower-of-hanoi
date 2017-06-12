var towerOfHanoi = function(disc,src,aux,dest){
  if(disc > 0){
    towerOfHanoi(disc -1,src,dest,aux);
    console.log('Move disc '+disc+' from '+src+' to '+dest);
    towerOfHanoi(disc -1,aux,src,dest);
  }
};

towerOfHanoi(2,'src','aux','dest');