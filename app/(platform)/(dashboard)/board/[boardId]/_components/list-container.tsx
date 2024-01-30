"use client"

import { ListWithCards } from "@/types/types"
import { ListForm } from "./list-form"

interface ListContainterProps {
  data: ListWithCards[]
  boardId: string
}

export const ListContainer = ({ boardId, data }: ListContainterProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  )
}
