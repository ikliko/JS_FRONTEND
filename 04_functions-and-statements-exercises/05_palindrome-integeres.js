function solution(arr) {
    const isPalindrome = (str) => str === str.split('').reverse().join('');

    return arr.map(n => isPalindrome(`${n}`))
        .join('\n')
}