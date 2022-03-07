import delay from '../delay';

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

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = 7;
//step

bubbleSort(arr, n);
`
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = 7;

const bubblesort = {
    title: "bubbleSort",
    ext: "js",
    code: code,
    delay: delay,
    arr: arr,
    n: n
}

export default bubblesort;