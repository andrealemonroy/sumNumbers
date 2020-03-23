
getAnswer = () => {
    const input = splitCommas()
    const int = randomNumber()
    console.log('random' + int)
    console.log(sumNumbers(input, parseInt(9)))
}

sumNumbers = (arr, integer) => {
    document.getElementById("did").classList.add('noShow');
    document.getElementById("didnt").classList.add('noShow');
    console.log(integer)
    let result = []
    debugger
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[i]) + parseInt(arr[j]) == integer) {
                document.getElementById("did").classList.remove('noShow');
                result = [arr[j], arr[i]]
                document.getElementById("winNumbers").innerHTML = result;
                return result
            } else {
                document.getElementById("didnt").classList.remove('noShow');
            }
        }
    }
    return result
}
randomNumber = () => {
    return Math.floor((Math.random() * 10) + 1);
}

splitCommas = () => {
    let arr = document.getElementById("numbers").value.trim().split(",")
    return arr
}
