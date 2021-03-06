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
                    keyElm: key,
                    sorted: false
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
                        keyElm: key,
                        sorted: false
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
                        keyElm: key,
                        sorted: false
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
                    keyElm: key,
                    sorted: false
                }
            );

            steps.push(
                {
                    arr: [...arr],
                    text: `Done processing of node ${i}`,
                    toBeSwap: null,
                    swap: [],
                    update: [],
                    keyElm: null,
                    sorted: false
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
            keyElm: null,
            sorted: false
        },
        {
            arr: [...arr],
            text: `Each time compareing and updating are shown in orange color. and key element replacing is shown by blue color.`,
            toBeSwap: null,
            swap: [],
            update: [],
            keyElm: null,
            sorted: false
        }
    );

    insertionSort(arr, n)

    steps.push(
        {
            arr: [...arr],
            text: 'Sorted.',
            toBeSwap: null,
            swap: [],
            update: [],
            keyElm: null,
            sorted: true
        }
    );
}

export default InsertionSort;