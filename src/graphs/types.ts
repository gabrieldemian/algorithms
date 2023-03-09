export interface Node {
  value: string
  adjNodes: string[]
}

export type Graph = Record<string, Node>
