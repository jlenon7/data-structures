import { Test } from '@athenna/test'

import { Sort } from '#src/Algorithms/Sort'

export class SortTest extends Test {
  #sort

  beforeEach() {
    this.#sort = Sort.of(117, 90, 88, 83, 81, 77, 74, 69, 64, 63, 51,
            50, 49, 42, 41, 34, 32, 29, 28, 22, 16, 8, 6, 5, 3, 1)
  }

  /**
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldBeAbleToExecuteSelectionSortMethod({ assert }) {
    const listSorted = this.#sort.bySelection().get()

    assert.isTrue(Sort.isSorted(listSorted))
  }

  /**
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldBeAbleToExecuteBubbleSortMethod({ assert }) {
    const listSorted = this.#sort.byBubble().get()

    assert.isTrue(Sort.isSorted(listSorted))
  }

  /**
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldBeAbleToExecuteInsertionSortMethod({ assert }) {
    const listSorted = this.#sort.byInsertion().get()

    assert.isTrue(Sort.isSorted(listSorted))
  }

  /**
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldBeAbleToExecuteMergeSortMethod({ assert }) {
    const listSorted = this.#sort.byMerge().get()

    assert.isTrue(Sort.isSorted(listSorted))
  }
}
