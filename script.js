const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const subarrays = []; // Initialize an empty list to hold the subarrays
    let tempSubarray = []; // Initialize a temporary list to hold the current subarray
    let tempSum = 0; // Initialize a variable to hold the current sum

    // Iterate over the input array from left to right
    for (let i = 0; i < arr.length; i++) {
        // Check if adding the current element to the current sum would exceed 'n'
        if (tempSum + arr[i] > n) {
            // If it would, add the current subarray to the list of subarrays
            if (tempSubarray.length > 0) {
                subarrays.push(tempSubarray);
            }
            // Start a new subarray and sum with the current element
            tempSubarray = [arr[i]];
            tempSum = arr[i];
        } else {
            // If it wouldn't exceed 'n', add the element to the current subarray
            tempSubarray.push(arr[i]);
            // Add its value to the current sum
            tempSum += arr[i];
        }
}
	  if (tempSubarray.length > 0) {
        subarrays.push(tempSubarray);
    }

    // Return the list of subarrays
    return subarrays;
}


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
