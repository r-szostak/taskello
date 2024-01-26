import { createBoard } from "@/actions/create-board"
import { useAction } from "@/hooks/use-action"

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard)

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2"></div>
    </form>
  )
}
