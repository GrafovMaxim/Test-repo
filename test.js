// 1. Функция для сложения двух чисел
function addNumbers(a, b) {
    return a + b;
}

// Пример использования:
console.log(addNumbers(5, 3)); // Выведет 8

// 2. Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Пример использования:
console.log(isPalindrome("А роза упала на лапу Азора")); // Выведет true