import './CSSFiles/bubblesortTheory.css';

const BubbleSortTheory = () => {
    return(
        <div className='replacement-of-visuals'>
            <h3>
                Bubble sort is a simple sorting algorithm. 
                This sorting algorithm is comparison-based algorithm in which 
                each pair of adjacent elements is compared and the elements are 
                swapped if they are not in order. This algorithm is not suitable 
                for large data sets as its average and worst case complexity are of 
                O(n2) where n is the number of items.
            </h3>
        
            <p>
                <h2>Example:</h2>

                <h4>First Pass:</h4>
                ( <strong>5</strong> <strong>1</strong> 4 2 8 ) &#8211;&gt; 
                ( <strong>1</strong> <strong>5</strong> 4 2 8 ), 
                Here, algorithm compares the first two elements, and swaps since 5 &gt; 1.&nbsp;
                <br></br>
                ( 1 <strong>5</strong> <strong>4</strong> 2 8 ) &#8211;&gt; 
                ( 1 <strong>4</strong> <strong>5</strong> 2 8 ), 
                Swap since 5 &gt; 4&nbsp;
                <br></br>
                ( 1 4 <strong>5</strong> <strong>2</strong> 8 ) &#8211;&gt; 
                ( 1 4 <strong>2</strong> <strong>5</strong> 8 ), 
                Swap since 5 &gt; 2&nbsp;
                <br></br>
                ( 1 4 2 <strong>5</strong> <strong>8</strong> ) &#8211;&gt; 
                ( 1 4 2 <strong>5</strong> <strong>8</strong> ), 
                Now, since these elements are already in order (8 &gt; 5), algorithm does not swap them.
                <br></br>

                <h4>Second Pass:</h4>
                ( <strong>1</strong> <strong>4</strong> 2 5 8 ) &#8211;&gt; 
                ( <strong>1</strong> <strong>4</strong> 2 5 8 )&nbsp;
                <br></br>
                ( 1 <strong>4</strong> <strong>2</strong> 5 8 ) &#8211;&gt; 
                ( 1 <strong>2</strong> <strong>4</strong> 5 8 ), 
                Swap since 4 &gt; 2&nbsp;
                <br></br>
                ( 1 2 <strong>4</strong> <strong>5</strong> 8 ) &#8211;&gt;
                ( 1 2 <strong>4</strong> <strong>5</strong> 8 )&nbsp;
                <br></br>
                ( 1 2 4 <strong>5</strong> <strong>8</strong> ) &#8211;&gt; 
                ( 1 2 4 <strong>5</strong> <strong>8</strong> )&nbsp;
                <br></br>
                Now, the array is already sorted, but our algorithm does not know if it is completed. 
                The algorithm needs one <strong>whole</strong> pass without <strong>any</strong> swap to 
                know it is sorted.
                <br></br>
                <h4>Third Pass:</h4>
                ( <strong>1</strong> <strong>2</strong> 4 5 8 ) &#8211;&gt; 
                ( <strong>1</strong> <strong>2</strong> 4 5 8 )&nbsp; 
                <br></br>
                ( 1 <strong>2</strong> <strong>4</strong> 5 8 ) &#8211;&gt; 
                ( 1 <strong>2</strong> <strong>4</strong> 5 8 )&nbsp;
                <br></br> 
                ( 1 2 <strong>4</strong> <strong>5</strong> 8 ) &#8211;&gt; 
                ( 1 2 <strong>4</strong> <strong>5</strong> 8 ) &nbsp;
                <br></br>
                ( 1 2 4 <strong>5</strong> <strong>8</strong> ) &#8211;&gt; 
                ( 1 2 4 <strong>5</strong> <strong>8</strong> )&nbsp;
                <br></br>
            </p>

            <p>
                <strong>Worst and Average Case Time Complexity: </strong>O(n*n). Worst case occurs when array is reverse sorted.
                <br></br>
                <strong>Best Case Time Complexity:</strong> O(n). Best case occurs when array is already sorted.
                <br></br>
                <strong>Auxiliary Space:</strong> O(1)
                <br></br>
                <strong>Boundary Cases:</strong> Bubble sort takes minimum time (Order of n) when elements are already sorted.
                <br></br>
                <strong>Sorting In Place: </strong>Yes
                <br></br>
                <strong>Stable:</strong> Yes
            </p>
        </div>
    )
}

export default BubbleSortTheory;