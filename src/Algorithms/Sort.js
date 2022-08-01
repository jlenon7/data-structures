export class Sort {
  static of(...values) {
  	return new Sort(values)
  }

  static isSorted(list) {
    return list.every((v, i, a) => !i || a[i - 1] <= v);
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
	bySelection() {
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
   * Sort the list verifying if the next value of the array
   * is smaller than the current one, if it is, we swap both.
   * 
   * Time complexity: O(n^2)
   * 
   * @return {List}
   */
  byBubble() {
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

  /**
   * Sort the list verifying if the next value of the array is smaller
   * than the last one.
   * 
   * Time complexity: O(n^2)
   * 
   * @return {List}
   */
  byInsertion() {
    const list = this.#list
    const length = list.length

    for (let index = 1; index < length; index++) {
      const currentKey = list[index]
      let lastKeyIndex = index - 1

      while (lastKeyIndex >= 0 && list[lastKeyIndex] > currentKey) {
        list[lastKeyIndex + 1] = list[lastKeyIndex]

        lastKeyIndex--
      }

      list[lastKeyIndex + 1] = currentKey
    }

    return this
  }

  /**
   * Sort the list using the divide and conquer strategy,
   * dividing the list until it got only one value and then
   * join everything sorting one by one.
   * 
   * Time complexity: O(nlogn)
   * 
   * @param {number} initial
   * @param {number} final
   * @return {List}
   */
   byMerge(initial = 0, final = this.#list.length) {
     if (final - initial > 1) {
       const middle = Math.floor((final + initial) / 2)

       this.byMerge(initial, middle)
       this.byMerge(middle, final)

       // Merge process
       const leftList = this.#list.slice(initial, middle)
       const rightList = this.#list.slice(middle, final)

       let leftIndex = 0
       let rightIndex = 0

       const isLeftLessThanRight = (leftI, rightI) => {
         if (!rightList[rightI]) {
           return true
         }

         if (!leftList[leftI]) {
           return false
         }

         return leftList[leftI] < rightList[rightI]
       }

       for (let index = initial; index < final; index++) {
         if (isLeftLessThanRight(leftIndex, rightIndex)) {
           this.#list[index] = leftList[leftIndex]
           
           leftIndex++
         } else {
           this.#list[index] = rightList[rightIndex]

           rightIndex++
         }
       }
     }

     return this
  }

  get() {
    return this.#list
  }
}