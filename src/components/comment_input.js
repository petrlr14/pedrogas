import React, { useState } from "react"
import { Input, InputGroup, Label, Span, TextArea, Button } from "./forms"
import { Avatar, Grid } from "./containers"
import useFirebase from "../services/useFirebase"
import { useMutation } from "react-query"
import { notifyNewComment } from "../services/email"
import { Loader } from "./loader"

export const CommentInput = ({ id }) => {
  const firebase = useFirebase()
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")
  const [notifyComment, { isLoading }] = useMutation(notifyNewComment)

  const saveComment = async () => {
    try {
      await firebase.database().ref(`/comments/${id}`).push({
        username,
        comment,
        date: new Date().toISOString(),
      })
      await notifyComment({ username, comment })
    } catch (e) {
      console.log(e)
    } finally {
      setUsername("")
      setComment("")
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h2 style={{ margin: 0 }}>Deja un comentario</h2>
        {isLoading && <Loader />}
      </div>

      <Grid>
        <Avatar
          src={`https://avatars.dicebear.com/v2/bottts/${username}.svg`}
          alt={
            "Generated avatar from avatars.dicebear.com, it's meant to look like a robot"
          }
        />
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
            <Span id="comment">Comentario</Span>
          </Label>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disabled={username === "" || comment === ""}
              onClick={saveComment}
            >
              Enviar
              <i className="fas fa-paper-plane" />
            </Button>
          </div>
        </InputGroup>
      </Grid>
    </>
  )
}
