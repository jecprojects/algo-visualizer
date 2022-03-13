import './CSSFiles/bubblesortTheory.css';

const AlgorithmTheory = () => {
    return(
        <div className='replacement-of-visuals'>
            <h3>
                An algorithm is a set of instructions for solving a problem 
                or accomplishing a task. One common example of an algorithm is a recipe, 
                which consists of specific instructions for preparing a dish or meal. 
                Every computerized device uses algorithms to perform its functions 
                in the form of hardware- or software-based routines.
                <br></br>
                In finance, algorithms have become important in developing automated and 
                high-frequency trading (HFT) systems, as well as in the pricing of 
                sophisticated financial instruments like derivatives. 
                <br></br>
                <br></br>
                <strong>Brute Force Algorithm: </strong>
                <br></br>
                This is the most basic and simplest type of algorithm. 
                A Brute Force Algorithm is the straightforward approach to a problem i.e., 
                the first approach that comes to our mind on seeing the problem. 
                More technically it is just like iterating every possibility available 
                to solve that problem.
                <br></br>
                <strong>For Example:</strong> If there is a lock of 4-digit PIN. 
                The digits to be chosen from 0-9 then the brute force will be trying all 
                possible combinations one by one like 0001, 0002, 0003, 0004, 
                and so on until we get the right PIN. In the worst case, 
                it will take 10,000 tries to find the right combination.
                <br></br>
                <br></br>
                <strong>Recursive Algorithm: </strong>
                <br></br>
                This type of algorithm is based on recursion. 
                In recursion, a problem is solved by breaking it into subproblems of 
                the same type and calling own self again and again until the problem 
                is solved with the help of a base condition.
                <br></br>
                Some common problem that is solved using recursive algorithms are Factorial of 
                a Number, Fibonacci Series, Tower of Hanoi, DFS for Graph, etc.
                <br></br>
                <br></br>
                <strong>Divide and Conquer Algorithm: </strong>
                <br></br>
                In Divide and Conquer algorithms, the idea is to solve the problem 
                in two sections, the first section divides the problem into subproblems 
                of the same type. The second section is to solve the smaller 
                problem independently and then add the combined result to produce 
                the final answer to the problem.
                <br></br>
                Some common problem that is solved using Divide and Conquers Algorithms 
                are Binary Search, Merge Sort, Quick Sort, Strassen’s Matrix Multiplication, etc.

                <br></br>
                <br></br>
                <strong>Dynamic Programming Algorithms: </strong>
                <br></br>
                This type of algorithm is also known as the memoization technique because in 
                this the idea is to store the previously calculated result to avoid calculating 
                it again and again. In Dynamic Programming, divide the complex problem into 
                smaller overlapping subproblems and storing the result for future use.
                <br></br>
                The following problems can be solved using Dynamic Programming algorithm 
                Knapsack Problem, Weighted Job Scheduling, Floyd Warshall Algorithm, 
                Dijkstra Shortest Path Algorithm, etc.

                <br></br>
                <br></br>
                <strong>Greedy Algorithm: </strong>
                <br></br>
                In the Greedy Algorithm, the solution is built part by part. The 
                decision to choose the next part is done on the basis that it gives 
                the immediate benefit. It never considers the choices that had taken 
                previously.
                <br></br>
                Some common problems that can be solved through the Greedy Algorithm 
                are Prim’s Algorithm, Kruskal’s Algorithm, Huffman Coding, etc.

                <br></br>
                <br></br>
                <strong>Greedy Algorithm: </strong>
                <br></br>
                In the Greedy Algorithm, the solution is built part by part. The 
                decision to choose the next part is done on the basis that it gives 
                the immediate benefit. It never considers the choices that had taken 
                previously.
                <br></br>
                Some common problems that can be solved through the Greedy Algorithm 
                are Prim’s Algorithm, Kruskal’s Algorithm, Huffman Coding, etc.
            </h3>
    
        </div>
    )
}

export default AlgorithmTheory;