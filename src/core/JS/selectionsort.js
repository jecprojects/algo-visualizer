let arr = [6, 3, 2, 9, 1, 8, 4, 11, 5, 10, 7];
let n = 11;

const code = `// Selection Sort Algorithm
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
function selectionSort(arr,  n)
{
    var i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
  
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}

let arr = [${arr}];
let n = ${n};
//step

selectionSort(arr, n);
`


const selectionsort = {
    title: "selectionsort",
    ext: "js",
    code: code,
    arr: arr,
    n: n
}

export default selectionsort;