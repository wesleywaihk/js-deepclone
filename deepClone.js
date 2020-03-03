export default const deepClone = input => {
	if (input === null){
  	return null;
  }
	
	const type = Array.isArray(input) ? 'array' : typeof input;
  
  if (type !== 'array' && type !== 'object'){
  	return input;
  }  
	let output = type === 'array' ? [] : {};

	Object.keys(input).forEach(key => {
	    output[key] = deepClone(input[key]);   
	});
  return output;
}
