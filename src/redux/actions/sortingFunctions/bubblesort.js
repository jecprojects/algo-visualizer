const BubbleSort = (data, steps) => {

    let passIndexs = [];

    function swap(arr, xp, yp){
        var temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
    }
    
    // An optimized version of Bubble Sort
    function bubbleSort( arr, n){
        let i, j;
        for (i = 0; i < n-1; i++){
            // pass.
            steps.push(
                {
                    arr: [...arr],
                    text: `Starting pass ${i}`,
                    compare: [],
                    swap: [],
                    passIndexs: [...passIndexs]
                },
                {
                    arr: [...arr],
                    text: `For each element moving through the list.`,
                    compare: [],
                    swap: [],
                    passIndexs: [...passIndexs]
                }
            );

            for (j = 0; j < n-i-1; j++){
                steps.push(
                    {
                        arr: [...arr],
                        text: `Compare elements`,
                        compare: [j, j+1],
                        swap: [],
                        passIndexs: [...passIndexs]
                    }
                );
                if (arr[j] > arr[j+1]){
                    swap(arr,j,j+1);
                    steps.push(
                        {
                            arr: [...arr],
                            text: `Swap`,
                            compare: [],
                            swap: [j, j+1],
                            passIndexs: [...passIndexs]
                        }
                    );
                }
            }

            passIndexs.push(n-i-1);
            steps.push(
                {
                    arr: [...arr],
                    text: `Done this pass. The last element processed is now
                    is its final position`,
                    compare: [],
                    swap: [],
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
            text: 'Starting bubble sort.',
            compare: [],
            swap: [],
            passIndexs: [...passIndexs]
        },
        {
            arr: [...arr],
            text: `For each pass, we will move left ot right swapping adjacent
            elements as needed. Each pass moves the next largest element into its final
            position(these will be shown in green.)`,
            compare: [],
            swap: [],
            passIndexs: [...passIndexs]
        }
    );

    bubbleSort(arr, n);


    // After ends
    steps.push(
        {
            arr: [...arr],
            text: `Done sorting`,
            compare: [],
            swap: [],
            passIndexs: [...passIndexs, 0]
        }
    );
}

export default BubbleSort