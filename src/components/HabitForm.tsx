import { useState } from "react";
import Button from "./Button";

export function HabitForm() {
    const [name, setName] = useState("");
    
    return <form className="flex gap-2">
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-lg bg-zinc-800 py-2 px-4 outline-none focus-visible:ring-2 focus-visible:ring-violet-500" 
            placeholder="New habit..."
        />
        <Button variant="primary" className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>
    </form>
}