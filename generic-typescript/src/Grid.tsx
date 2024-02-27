import { ReactNode } from 'react'

export interface ItemType {
  id: string
}

export interface GridProps<ItemT> {
  data: ItemT[]
  renderItem: (item: ItemT, index: number) => ReactNode
  getKey?: (key: keyof ItemT) => void
}

export const Grid = <T extends ItemType>({ data, renderItem }: GridProps<T>) => {
  return (
    <div>
      {data.map((item, index) => {
        return <div key={item.id}>{renderItem(item, index)}</div>
      })}
    </div>
  )
}
