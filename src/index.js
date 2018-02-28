module.exports = function check(str, bracketsConfig) {
  // your solution
    var stack = [];
    var fl = 0;
    for (var i = 0; i<str.length;i++) {
        if(str[i] === '|')
            if(stack[stack.length-1] === str[i]) {
                stack.pop();
                if(stack.length === 0)
                    return true;
            }
        for(var j = 0; j < bracketsConfig.length; j++) {
            if(str[i] === bracketsConfig[j][0]) {
                stack.push(bracketsConfig[j][0]);
                break;
            }
            if(str[i] === bracketsConfig[j][1]) {
                if (stack.length === 0 && i === 0)
                    return false;
                fl = stack.pop();
                for(var k =0; k<bracketsConfig.length;k++) {
                    if(bracketsConfig[k].indexOf(fl) !== -1)
                        if(bracketsConfig[k][1] !== str[i])
                            return false;
                         break;
                }

            }
        }
    }

    if(stack.length !== 0)
        return false;
    else
        return true;
}
