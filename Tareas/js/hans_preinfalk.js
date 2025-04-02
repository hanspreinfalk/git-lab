// Hans Preinfalk A01785043

function firstNonRepeating(str) {
    const charCount = {};
    
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  console.log('firstNonRepeating')
  console.log('input:', 'abacddbec')
  console.log('output:', firstNonRepeating('abacddbec'))
  console.log('\n')
    
  function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    
    return arr;
  }
  
  console.log('bubbleSort')
  console.log('input:', [5, 3, 8, 10, 1, 6])
  console.log('output:', bubbleSort([5, 3, 8, 10, 1, 6]))
  console.log('\n')
    
  function invertArray(arr) {
    const result = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    
    return result;
  }
  
  console.log('invertArray')
  console.log('input:', [1, 2, 3, 4, 5])
  console.log('output:', invertArray([1, 2, 3, 4, 5]))
  console.log('\n')
    
  
  function invertArrayInplace(arr) {
    const len = arr.length;
    const mid = Math.floor(len / 2);
    
    for (let i = 0; i < mid; i++) {
      [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
    }
    
    return arr;
  }
  
  console.log('invertArrayInplace')
  var invertArrayTest = [1, 2, 3, 4, 5]
  console.log('input:', invertArrayTest)
  console.log('output:', invertArrayInplace(invertArrayTest))
  console.log('\n')
    
  
  function capitalize(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  console.log('capitalize')
  console.log('input:', 'este es un texto prueba')
  console.log('output:', capitalize('este es un texto prueba'))
  console.log('\n')
    
  
  function mcd(a, b) {
    // Algoritmo de Euclides
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    
    return a;
  }
  
  console.log('mcd')
  console.log('input:', '12, 18')
  console.log('output:', mcd(12, 18))
  console.log('\n')
    
  
  function hackerSpeak(str) {
    const replacements = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      's': '5'
    };
    
    return str
      .split('')
      .map(char => replacements[char.toLowerCase()] || char)
      .join('');
  }
  
  console.log('hackerSpeak')
  console.log('input:', 'Javascript es divertido')
  console.log('output:', hackerSpeak('Javascript es divertido'))
  console.log('\n')
    
  
  function factorize(num) {
    const factors = [];
    
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    
    return factors;
  }
  
  console.log('factorize')
  console.log('input:', '12')
  console.log('output:', factorize(12))
  console.log('\n')
    
  
  function deduplicate(arr) {
    return [...new Set(arr)];
  }
  
  console.log('deduplicate')
  console.log('input:', [1, 0, 1, 1, 0, 0])
  console.log('output:', deduplicate([1, 0, 1, 1, 0, 0]))
  console.log('\n')
    
  
  function findShortestString(strings) {
    if (!strings.length) return 0;
    
    return Math.min(...strings.map(str => str.length));
  }
  
  console.log('findShortestString')
  console.log('input:', ['hola', 'mundo', 'pruebas', 'clases'])
  console.log('output:', findShortestString(['hola', 'mundo', 'pruebas', 'clases']))
  console.log('\n')
    
   
  function isPalindrome(str) {
    // Normalizar: convertir a minúsculas y eliminar caracteres no alfanuméricos
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Comparar la cadena con su inversa
    const reversed = normalized.split('').reverse().join('');
    
    return normalized === reversed;
  }
  
  console.log('isPalindrome')
  console.log('input:', 'aabba')
  console.log('output:', isPalindrome('aabba'))
  console.log('input:', 'aabbaa')
  console.log('output:', isPalindrome('aabbaa'))
  console.log('\n')
    
  
  function sortStrings(strings) {
    return [...strings].sort();
  }
  
  console.log('sortStrings')
  console.log('input:', ['hola', 'mundo', 'abc', 'test'])
  console.log('output:', sortStrings(['hola', 'mundo', 'abc', 'test']))
  console.log('\n')
    
   
  function stats(numbers) {
    // Calcular la media
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;
    
    // Calcular la moda
    const frequency = {};
    numbers.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    
    let maxFreq = 0;
    let mode = null;
    
    for (const num in frequency) {
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        mode = Number(num);
      }
    }
    
    // Si la frecuencia máxima es 1, no hay moda (todos aparecen una vez)
    if (maxFreq === 1) {
      mode = null;
    }
    
    return [mean, mode];
  }
  
  console.log('stats')
  console.log('input:', [8, 4, 2, 6, 8, 13, 17, 2, 4, 8])
  console.log('output:', stats([8, 4, 2, 6, 8, 13, 17, 2, 4, 8]))
  console.log('\n')
    
   
  function popularString(strings) {
    if (!strings.length) return null;
    
    const frequency = {};
    strings.forEach(str => {
      frequency[str] = (frequency[str] || 0) + 1;
    });
    
    let maxFreq = 0;
    let mostPopular = null;
    
    for (const str in frequency) {
      if (frequency[str] > maxFreq) {
        maxFreq = frequency[str];
        mostPopular = str;
      }
    }
    
    return mostPopular;
  }
    
  console.log('popularString')
  console.log('input:', ['hola', 'mundo', 'test', 'test', 'prueba'])
  console.log('output:', popularString(['hola', 'mundo', 'test', 'test', 'prueba']))
  console.log('\n')
  
  
  function isPowerOf2(num) {
    if (num <= 0) return false;
    
    // Un número es potencia de 2 si solo tiene un bit encendido
    // En binario, n & (n-1) elimina el bit menos significativo
    // Si n es potencia de 2, el resultado es 0
    return (num & (num - 1)) === 0;
  }
  
  console.log('isPowerOf2')
  console.log('input:', 12)
  console.log('output:', isPowerOf2(12))
  console.log('input:', 16)
  console.log('output:', isPowerOf2(16))
  console.log('\n')
    
  
  function sortDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
  }
  
  console.log('sortDescending')
  console.log('input:', [1, 4, 8, 7, 13, 11])
  console.log('output:', sortDescending([1, 4, 8, 7, 13, 11]))
  console.log('\n')