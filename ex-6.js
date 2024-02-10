function checkHeight(height) {
    const result = height ?? "Height is not defined";
    return result;
  }
  
  let height = undefined;
  let result = checkHeight(height);
  
  console.log(result);
  