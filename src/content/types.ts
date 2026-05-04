export type Block =
  | { kind: 'p'; html: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'note'; html: string }

export interface Section {
  id: string
  title: string
  blocks: Block[]
}

export interface PageContent {
  title: string
  lastUpdatedISO: string
  intro: Block[]
  sections: Section[]
}

export type PageKey = 'privacy' | 'terms' | 'deleteAccount'
