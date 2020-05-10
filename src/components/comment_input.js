import React, { useState } from "react"
import { Input, InputGroup, Label, Span, TextArea, Button } from "./forms"
import { Avatar, Grid } from "./containers"
import useFirebase from "../services/useFirebase"

export const CommentInput = ({ id }) => {
  /* const firebase = useFirebase() */
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")

  const saveComment = () => {
    firebase
      .database()
      .ref(`/comments/${id}`)
      .push({
        username,
        comment,
        date: new Date().toISOString(),
      })
      .then(() => {})
  }

  return (
    <>
      <h2>Deja un comentario</h2>
      <Grid>
        <Avatar src={`https://api.adorable.io/avatars/50/${username}.png`} />
        <InputGroup>
          <Label width="200px">
            <Input
              value={username}
              onChange={({ target }) => {
                setUsername(target.value)
              }}
            />
            <Span id="username">Username</Span>
          </Label>
          <Label>
            <TextArea
              value={comment}
              onChange={({ target }) => {
                setComment(target.value)
              }}
            />
            <Span id="username">Comentario</Span>
          </Label>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disabled={username === "" || comment === ""}
              onClick={saveComment}
            >
              Enviar
            </Button>
          </div>
        </InputGroup>
      </Grid>
    </>
  )
}
