import delay from '../delay';

const code = `// Function to sort an array using insertion sort
function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
  
// Driver program to test above functions
var arr = [64, 34, 25, 12, 22, 11, 90];
let n = 7;
insertionsort(arr, n);
`

const insertionsort = {
    title: "insertionSort",
    ext: "js",
    code: code,
    n: 7,
    ele: [64, 34, 25, 12, 22, 11, 90],
    delay: delay
}

export default insertionsort;