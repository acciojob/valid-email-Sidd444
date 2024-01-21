function validEmail(str) {
  //your JS code here.
  let indAt=-1,indDot=-1;
  for(let i=0;i<str.length;i++){
	  if(str[i]==='@') indAt=i;
	  if(str[i]==='.' && indDot===-1) indDot=i;
  }
  if(indAt===-1 || indAt===0 || indAt>=indDot) return false;
  return true;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str)); 
