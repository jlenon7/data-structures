export class Sort {
  static of(...values) {
  	return new Sort(values)
  }

  #list

  constructor(list) {
  	this.#list = list
  }

  /**
   * Sort the list selecting the min value, creating a new 
   * subarray to find the next min value and replacing with
   * the first value in the list.
   * 
   * Time complexity: O(n^2)
   * 
   * @return {List}
   */
	selection() {
    const list = this.#list
    const length = list.length
        
    for (let actualIndex = 0; actualIndex < length; actualIndex++) {
        // The index of the smallest number in the subarray
        let minIndex = actualIndex

        for (let index = actualIndex; index < length; index++) {
            if (list[index] < list[minIndex]) {
                minIndex = index
            }
         }

         if (minIndex !== actualIndex) {
             // Swapping the elements using a temporary variable
             const tmp = list[actualIndex]

             list[actualIndex] = list[minIndex]
             list[minIndex] = tmp
        }
    }

    return this
  }

  /**
   * Sort the list verifing if the next value of the array
   * is smaller than the current one, if it is, we swap both.
   * 
   * Time complexity: O(n^2)
   * 
   * @return {List}
   */
  bubble() {
    const list = this.#list
    const length = list.length

    for (let i = 0; i < length; i++) {
      for (let index = 0; index < length; index++) {
        if (list[index] > list[index + 1]) {
           // Swapping the elements using a temporary variable
           const tmp = list[index]

           list[index] = list[index + 1]
           list[index + 1] = tmp
        }
      }
    }

    return this
  }

  get() {
    return this.#list
  }
}