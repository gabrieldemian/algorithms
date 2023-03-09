import { bfs } from './lib'
import type { Graph } from './types'

const graph: Graph = {
  '4': { value: '4', adjNodes: ['5'] },
  '1': { value: '1', adjNodes: ['3', '2'] },
  '3': { value: '3', adjNodes: ['4'] },
  '2': { value: '2', adjNodes: [] },
  '5': { value: '5', adjNodes: [] },
}

// 5 -> 1 3 2 4
// 4 -> 1 3
// 3 -> 1
// 2 -> 1
const node = bfs({ startNode: '1', target: '5', graph })
console.log('found node? ', node)
