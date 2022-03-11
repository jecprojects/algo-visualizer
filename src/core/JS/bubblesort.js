let arr = [6, 3, 2, 9, 1, 8, 4, 11, 5, 10, 7];
let n = 11;

const code = `// Bubble Sort Algortihm
function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bubbleSort(arr, n){
    let i, j;
    for (i = 0; i < n-1; i++){
        for (j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]){
                swap(arr,j,j+1);
                //step
            }
        }
    }
}

let arr = [${arr}];
let n = ${n};
//step

bubbleSort(arr, n);
`


const bubblesort = {
    title: "bubbleSort",
    ext: "js",
    code: code,
    arr: arr,
    n: n
}

export default bubblesort;