module.exports = function check(str, bracketsConfig) {
	let del = 1;
	let find;
  
  while (del > 0 && str.length > 0) {
  	del = 0;

  	bracketsConfig.forEach(elm => {
  		find = `${elm[0]}${elm[1]}`;
  		if (str.includes(find)){ 
	  		str = str.replace(find, '');
	  		del++;
  		}
  	})
  }

  return (str.length === 0);
}
