import './CSSFiles/bubblesortTheory.css';

const InsertionSortTheory = () => {
    return(
        <div className='replacement-of-visuals'>
            <h3>
                Insertion sort is a simple sorting algorithm that works similar 
                to the way you sort playing cards in your hands. The array is 
                virtually split into a sorted and an unsorted part. 
                Values from the unsorted part are picked and placed at 
                the correct position in the sorted part.
                <br></br>
                <br></br>
                <strong>Algorithm</strong>
                <br></br>
                To sort an array of size n in ascending order: 
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;1) Iterate from arr[1] to arr[n] over the array. 
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;2) Compare the current element (key) to its predecessor. 
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;3) If the key element is smaller than its predecessor, 
                compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
                <br></br>
                <br></br>
                <strong>Example</strong>
            </h3>
        
            <p>
            <strong>12</strong>, 11, 13, 5, 6
            <br></br>
            <br></br>
            Let us loop for i = 1 (second element of the array) to 4 (last element of the array)
            i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12 
            <br></br>
            <strong>11, 12</strong>, 13, 5, 6
            <br></br>
            <br></br>
            i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13 
            <br></br>
            <strong>11, 12, 13</strong>, 5, 6
            <br></br>
            <br></br>
            i = 3. 5 will move to the beginning and all other elements from 11 to 13 will 
            move one position ahead of their current position. 
            <br></br>
            <strong>5, 11, 12, 13</strong>, 6
            <br></br>
            <br></br>
            i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position. 
            <br></br>
            <strong>5, 6, 11, 12, 13 </strong>
            </p>

            <p>
                <strong>Time Complexity: </strong>O(n2) as there are two nested loops.
                <br></br>
                <strong>Auxiliary Space:</strong> O(1)
                <br></br>
                <strong>Boundary Cases:</strong> Insertion sort takes maximum time to sort if 
                elements are sorted in reverse order. And it takes minimum time (Order of n) when 
                elements are already sorted.
                <br></br>
                <strong>Algorithmic Paradigm: </strong>Incremental Approach
                <br></br>
                <strong>Stable:</strong> Yes
            </p>
        </div>
    )
}

export default InsertionSortTheory;