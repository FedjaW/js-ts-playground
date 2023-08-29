# Complexity O(n)

## Constant time: 1

No matter how many elements we are working with, the algorithm/operation/whatever will always take the same time.

## Logarithmic time: log(n)

You have this if doubling the number of elements you are iterating over does not double the amount of work. Always assume that searching operations are log(n)

## Linear time: n

Iterating through all elements in a colleciton of data. If you see a for loop spanning from 0 to array.lenght, you probably have n or linear runtime.

## Quasilinear time: n * log(n)

You have this if doubling the number of elements you are iterating over does not double the amount of work. Always assume that any sorting operation is n*log(n)

## Quadratic time: n ^ 2

Every element in a collection has to be compare to every other element. THe handshake problem.

## Exponential time: 2 ^ n

If you add a single element to a colleciton, the processing power required doubles.
