function getSmallestNumber(n1, n2, n3) {
const result = n1<n2&&n1<n3?n1:n2<n3&&n2<n1?n2:n3
console.log(result)
}

getSmallestNumber(1, -55, -5)