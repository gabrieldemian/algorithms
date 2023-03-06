export type Nada = [nada: string]

export interface Node<T> {
  value: T
  adjNodes: Node<T>[]
}

export interface Graph<T> {
  nodes: Node<T>[]
}
