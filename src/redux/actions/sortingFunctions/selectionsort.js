const SelectionSort = (data, steps) => {
    let passIndexs = [];

    function swap(arr,xp, yp){
        var temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
    }
    
    function selectionSort(arr,  n){
        let i, j, min_idx;
    
        // One by one move boundary of unsorted subarray
        for (i = 0; i < n; i++){
            // Find the minimum element in unsorted array
            min_idx = i;
            
            steps.push(
                {
                    arr: [...arr],
                    text: `Starting pass ${i}`,
                    swap: [],
                    minIndx: null,
                    compare: [],
                    passIndexs: [...passIndexs]
                },
                {
                    arr: [...arr],
                    text: `Initialize Minimum Index`,
                    swap: [],
                    minIndx: min_idx,
                    compare: [],
                    passIndexs: [...passIndexs]
                },
                {
                    arr: [...arr],
                    text: `For each element moving through the list.
                    the smallest seen so far is always orange.`,
                    swap: [],
                    minIndx: min_idx,
                    compare: [],
                    passIndexs: [...passIndexs]
                }
            );
            for (j = i + 1; j <= n; j++){
                steps.push(
                    {
                        arr: [...arr],
                        text: 'Compare the Smallest seen so far.',
                        swap: [],
                        minIndx: min_idx,
                        compare: [min_idx, j],
                        passIndexs: [...passIndexs]
                    }
                )
                if (arr[j] < arr[min_idx]){
                    min_idx = j;
                    steps.push(
                        {
                            arr: [...arr],
                            text: 'Found something smaller than before.',
                            swap: [],
                            minIndx: min_idx,
                            compare: [],
                            passIndexs: [...passIndexs]
                        }
                    )
                }
                steps.push(
                    {
                        arr: [...arr],
                        text: `Minimum element is ${arr[min_idx]}`,
                        swap: [],
                        minIndx: min_idx,
                        compare: [],
                        passIndexs: [...passIndexs]
                    }
                )
            }

            // Swap the found minimum element with the first element
            swap(arr,min_idx, i);
            steps.push(
                {
                    arr: [...arr],
                    text: 'Now swap the next smallest element into place.',
                    swap: [min_idx, i],
                    minIndx: min_idx,
                    compare: [],
                    passIndexs: [...passIndexs]
                }
            )

            passIndexs.push(i);
            steps.push(
                {
                    arr: [...arr],
                    text: `Done this pass.`,
                    swap: [],
                    minIndx: null,
                    compare: [],
                    passIndexs: [...passIndexs]
                }
            );
        }
    }
    
    // Driver program to test above functions
    let arr = [...data.values];
    let n = data.size;

    steps.push(
        {
            arr: [...arr],
            text: 'Starting selection sort.',
            swap: [],
            minIndx: null,
            compare: [],
            passIndexs: [...passIndexs]
        },
        {
            arr: [...arr],
            text: `For each pass we will move left to right looking for the next smallest value. 
            Once that is found, it will be swapped into its final position (this will be shown in green color.)`,
            swap: [],
            minIndx: null,
            compare: [],
            passIndexs: [...passIndexs]
        }
    );

    selectionSort(arr, n-1);

    // After ends
    steps.push(
        {
            arr: [...arr],
            text: `Done sorting.`,
            swap: [],
            minIndx: null,
            compare: [],
            passIndexs: [...passIndexs, parseInt(n-1)]
        }
    );
}
export default SelectionSort;