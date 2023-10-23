[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11857777&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.  
  
I used the following source in order to help create my code:  
https://www.geeksforgeeks.org/print-all-possible-permutations-of-an-array-vector-without-duplicates-using-backtracking/  

 
**Note**: Please be aware that I was slightly confused about what was being asked  
in the question. If I am missing anything (or something is wrong) please don't  
hesitate to let me know and I will fix it as soon as possible. Thank you.  
 
**ANSWER**:  
In the case for this algorithm, the best case scenario would be if the the program  
was given an already sorted graph. In this case, the complexity would only be  
$\Theta(n)$ due to the algorithm only having to go over them once to make sure that  
they were properly sorted. Next up, the worst case scenario would be if the sorted  
array was the last permutation generated. This would give the the sorting algorithm  
a complexity of $\Theta(n(n!))$, as that's how many tries it would take to find the  
correct answer multiplied by the time it would take to check each permutation to see  
if it sorted or not. $\Theta(n(n!))$ would also be the average runtime for this algorithm.  
Needless to say, this is not quick in the least.  
If the code permutated results at random, then that would be even *more* slow.  
The best case would most likely still be $\Theta(n)$, as there's always the chance  
of the algorithm getting the order right on the first try. Then, all it would have  
to do is check to make sure that all the elements are in order. The worst and average case, however  
would take a practically an infinite amount of time. For instance, assume you have a list  
of 100 unique elements. The chances of getting the correct list would be 1/100!, which  
is an incredibly slim value for such a relatively small data set. Additionally, there is  
no garuntee of *ever* finding the correct list as this is totally random. So, in the  
absolute worst case scenario, it's possible for this program to run for an infinite  
amount of time.
