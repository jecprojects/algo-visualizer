const InsertionSort = (data, steps) => {

    function insertionSort(arr, n) 
    { 
        let i, key, j; 

        for (i = 1; i < n; i++)
        {
            key = arr[i]; 
            j = i - 1; 

            steps.push(
                {
                    arr: [...arr],
                    text: `Starting processing of node ${i}`,
                    toBeSwap: null,
                    swap: [],
                    update: [],
                    keyElm: key
                }
            );
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && arr[j] > key){
                steps.push(
                    {
                        arr: [...arr],
                        text: `Compare with the previous node.`,
                        toBeSwap: null,
                        swap: [j, j+1],
                        update: [],
                        keyElm: key
                    }
                );
                arr[j + 1] = arr[j]; 
                steps.push(
                    {
                        arr: [...arr],
                        text: `Updating the node.`,
                        toBeSwap: null,
                        swap: [],
                        update: [j, j+1],
                        keyElm: key
                    }
                );
                j = j - 1; 
            } 
            arr[j + 1] = key; 

            steps.push(
                {
                    arr: [...arr],
                    text: `Placing key Element`,
                    toBeSwap: j+1,
                    swap: [],
                    update: [],
                    keyElm: key
                }
            );

            steps.push(
                {
                    arr: [...arr],
                    text: `Done processing of node ${i}`,
                    toBeSwap: null,
                    swap: [],
                    update: [],
                    keyElm: null
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
            text: 'Starting Insertion Sort.',
            toBeSwap: null,
            swap: [],
            update: [],
            keyElm: null
        },
        {
            arr: [...arr],
            text: `Highlighted green records to the left are always sorted. 
            We begin with the record in position 0 in the sorted portion, 
            and we will be moving the record in position 1 (in blue) to the 
            left until it is sorted.`,
            toBeSwap: null,
            swap: [],
            update: [],
            keyElm: null
        }
    );

    insertionSort(arr, n)
}

export default InsertionSort;