/**
 * First activity - Write a range function that takes two arguments,
 * start and end, and returns an array containing all the numbers
 * from start up to (and including) end.
 *
 * @author Arthur Zuliani
 * @since 20220201
 * @param start
 * @param end
 */
function rangeConstruct(start, end) {
    let array = [];

    for (let i = start; i <= end; i++) {
        array[i - start] = i;
    }

    console.log(array.toString());
}

rangeConstruct(1, 25);

/**
 * Activity 2 - Write a sum function that takes an array of numbers and
 * returns the sum of these numbers
 *
 * @author Arthur Zuliani
 * @since 20220201
 * @param nums
 */
function sumArrayElements(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    console.log(total);

}

let testArray = [1, 1, 1, 1, 1];
sumArrayElements(testArray);

/**
 * Activity 3 - Modify your range function to take an optional third argument
 * that indicates the “step” value used to build up the array.
 *
 * @author Arthur Zuliani
 * @since 20220201
 * @param start
 * @param end
 * @param step
 */
function rangeConstruct2(start, end, step) {
    let array = [];

    for (let i = 0; i <= (end - start) / step ; i++) {
        array.push((start + (i*step)));
    }
    console.log(array.toString());
}

rangeConstruct2(1, 10, 2);
rangeConstruct2(5, 2, -1);

