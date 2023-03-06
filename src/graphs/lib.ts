import { Node } from './types'

/** Running time: O(Vertices + Edges)
 *  or commonly O(v + e) for short.
 */
export function bfs<T>({
  startNode,
  value,
}: {
  startNode: Node<T>
  value: T
}): null | Node<T> {
  const visited: Node<T>[] = []
  const queue: Node<T>[] = [startNode]

  while (queue.length !== 0) {
    const current = queue.shift()
    if (!current) break
    if (current.value === value) return current

    visited.push(current)

    current.adjNodes.forEach((node) => {
      // if not visited
      if (visited.indexOf(node) === -1) {
        visited.push(node)
        queue.push(node)
      }
    })
  }
  return null
}
