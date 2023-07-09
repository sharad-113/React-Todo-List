import { InputAdornment, IconButton } from "@mui/material";
import { Create } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.currentTarget.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <ListItem>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Add Todo"
          variant="filled"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
