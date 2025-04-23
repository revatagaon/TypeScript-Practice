import { ChangeEvent, FormEvent, useState } from "react"

type AddTodoProps = {
  onTodoAdd:(todoText:string)=>void;
}

const AddTodo = ({onTodoAdd}:AddTodoProps) => {

  const [text, setText] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

   const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
    onTodoAdd(text);
    setText("");
   }

  return <form className="flex items-center justify-center gap-5 mt-10" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Write a new Todo..."
      className="rounded-md px-5 py-2 h-12 border-2 border-black
      text-base font-medium bg-white text-black placeholder-gray-400 
      focus:outline-4 focus:outline-auto focus:outline-[--webkit-focus-ring-color] 
      hover:border-[#646cff] transition-colors duration-250"
      value={text}
      onChange={handleInput}
    />
    <button className="text-black bg-white border-2 border-black hover:text-[#646cff] 
    transition-colors duration-200" type="submit">
      Let Build Todo
    </button>
  </form>
}

export default AddTodo