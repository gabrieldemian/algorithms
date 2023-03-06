import { bfs } from './lib'
import type { Graph } from './types'

const graph: Graph<number> = {
  nodes: [
    {
      value: 1,
      adjNodes: [
        {
          value: 2,
          adjNodes: [
            // index 7
            { value: 3, adjNodes: [{ value: 7, adjNodes: [] }] },
            { value: 4, adjNodes: [] },
          ],
        },
        {
          value: 3,
          adjNodes: [
            {
              value: 5,
              adjNodes: [
                {
                  value: 6,
                  adjNodes: [
                    // 7 will be the last one, index 10
                    { value: 8, adjNodes: [{ value: 7, adjNodes: [] }] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const node = bfs({ startNode: graph.nodes[0], value: 7 })
console.log('found node? ', node)
