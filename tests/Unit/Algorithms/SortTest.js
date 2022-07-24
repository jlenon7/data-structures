import { Test } from '@athenna/test'

import { Sort } from '#src/Algorithms/Sort'

export class SortTest extends Test {
  #sort = Sort.of(2, 4, 5, 6, 9, 2, 1)

  /**
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldBeAbleToExecuteSelectionSortMethod({ assert }) {
    const listSorted = this.#sort.selection().get()

    assert.equal(listSorted[0], 1)
  }

  /**
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldBeAbleToExecuteBubbleSortMethod({ assert }) {
    const listSorted = this.#sort.bubble().get()

    assert.equal(listSorted[0], 1)
  }
}
