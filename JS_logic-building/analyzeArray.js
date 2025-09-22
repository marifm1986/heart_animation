function analyzeArray(arr) {
    const freqMap = {};
    let max = 0;

    // step 1: build frequency map and find the maximum number

    for (let num of arr) {
        if (num > max) max = num;
        freqMap[num] = (freqMap[num] || 0) + 1
    }
    console.log(freqMap)

    const missing = [];
    const recurring = {};

    //step 2 Check for missing and recurring number
    for (let i = 1; i <= max; i++) {
        if (!freqMap[i]) {
            missing.push(i);
        } else if (freqMap[i] > 1) {
            recurring[i] = freqMap[i]
        }
    }

    return { missing, recurring };
}


console.log(analyzeArray([1, 1, 2, 4, 4, 5, 5, 5, 6]))//?;
