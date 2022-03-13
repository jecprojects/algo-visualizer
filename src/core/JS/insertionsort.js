let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let n = 9;

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
let arr = [${arr}];
let n = ${n};
insertionsort(arr, n);
`

const insertionsort = {
    title: "insertionSort",
    ext: "js",
    code: code,
    arr: arr,
    n: n
}

export default insertionsort;