const brackets = ["{", "}", "[", "]", "(", ")"]
const isValid = (str: string = "") => {
    const stack = [];
    if (!brackets.includes(str[0]) || !brackets.includes(str.at(-1))) return false;
    const filteredArray = str.split("").filter((v) => brackets.includes(v))
    for (let i = 0; i < filteredArray.length; i++) {
        if (stack.at(-1) === "{" && filteredArray[i] === "}") stack.pop()
        else if (stack.at(-1) === "[" && filteredArray[i] === "]") stack.pop()
        else if (stack.at(-1) === "(" && filteredArray[i] === ")") stack.pop()
        else stack.push(filteredArray[i])
    }
    return stack.length === 0
}
