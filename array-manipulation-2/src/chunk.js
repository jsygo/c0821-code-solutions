/* exported chunk */
// input: an array, 'size' which is a number that defines how large chunks should be
// output: an array of arrays, containing the number of elements specified by size, any remaining elements are put into a final array
// I can know when to create new arrays within my output array by checking if the index of the current
// iteration plus 1, is divisible by 'size'. each time this is true, push a new array literal into
// the output array. I have to have a way to track which array i am currently working with, so i know which array
// to push elements into.
