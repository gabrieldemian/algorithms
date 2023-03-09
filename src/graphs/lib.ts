import { Graph } from './types'

/** Running time: O(Vertices + Edges)
 *  or commonly O(v + e) for short.
 */
export function bfs({
  graph,
  startNode,
  target,
}: {
  graph: Graph
  startNode: string
  target: string
}): string[] | null {
  const visited: Set<string> = new Set([])
  const queue: string[] = [startNode]
  while (queue.length > 0) {
    const currentValue = queue.shift()
    if (!currentValue) break
    if (visited.has(currentValue)) continue

    visited.add(currentValue)

    for (const adjNode of graph[currentValue].adjNodes) {
      if (adjNode === target) return [...visited]
      if (!visited.has(adjNode)) queue.push(adjNode)
      console.log('adj node ', adjNode)
    }
  }
  return null
}
