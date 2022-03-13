import './CSSFiles/bubblesortTheory.css';

const SelectionSortTheory = () => {
    return(
        <div className='replacement-of-visuals'>
            <h3>
                The selection sort algorithm sorts an array by repeatedly finding 
                the minimum element (considering ascending order) from unsorted part and 
                putting it at the beginning. 
                The algorithm maintains two subarrays in a given array.
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;1) The subarray which is already sorted. 
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;2) Remaining subarray which is unsorted.
                <br></br>
                <br></br>
                In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
                Following example explains the above steps: 
            </h3>
        
            <p>
                arr[] = 64 25 12 22 11
                <br></br>
                <br></br>
                // Find the minimum element in arr[0...4]
                <br></br>
                // and place it at beginning
                <br></br>
                <strong>11</strong> 25 12 22 64
                <br></br>
                <br></br>
                // Find the minimum element in arr[1...4]
                <br></br>
                // and place it at beginning of arr[1...4]
                <br></br>
                11 <strong>12</strong> 25 22 64
                <br></br>
                <br></br>
                // Find the minimum element in arr[2...4]
                <br></br>
                // and place it at beginning of arr[2...4]
                <br></br>
                11 12 <strong>22</strong> 25 64
                <br></br>
                <br></br>
                // Find the minimum element in arr[3...4]
                <br></br>
                // and place it at beginning of arr[3...4]
                <br></br>
                11 12 22 <strong>25</strong> 64 
                <br></br>
            </p>

            <p>
                <strong>Time Complexity: </strong>O(n2) as there are two nested loops.
                <br></br>
                <strong>Auxiliary Space:</strong> O(1)
                <br></br>
                The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation. 
            </p>
        </div>
    )
}

export default SelectionSortTheory;