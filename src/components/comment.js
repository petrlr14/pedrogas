import React, { useEffect, useState } from "react"
import useFirebase from "../services/useFirebase"
import styled from "styled-components"
import { Grid, Avatar } from "./containers"

const Text = styled.div`
  display: flex;
  flex-direction: column;
  & > h5 {
    margin: 0.5em 0 0 1em;
  }
  & > small {
    margin-left: 1em;
    margin-bottom: 0.5em;
  }
  & > p {
    margin: 0;
    margin-left: 1em;
  }
`

const Container = styled(Grid)`
  border: 4px solid var(--hyper);
  margin-bottom: 2em;
`

const Comment = ({ username, date, comment }) => {
  return (
    <Container>
      <Avatar src={`https://api.adorable.io/avatars/50/${username}.png`} />
      <Text>
        <h5>{username}</h5>
        <small>
          {new Date(date).toLocaleDateString("es-SV", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </small>
        <p>{comment}</p>
      </Text>
    </Container>
  )
}

export const Comments = ({ id }) => {
  /* const firebase = useFirebase() */
  const [comments, setComments] = useState(null)
  /* useEffect(() => {
    if (!firebase) return
    firebase
      .database()
      .ref(`/comments/${id}`)
      .on("value", snap => {
        const obj = snap.val()
        let comm
        if (obj) {
          comm = Object.keys(obj).map(el => {
            return {
              id: el,
              comment: obj[el].comment,
              username: obj[el].username,
              date: obj[el].date,
            }
          })
        } else {
          comm = []
        }
        setComments(comm)
      })
  }, [firebase, id]) */
  return (
    <>
      <h2>Comentarios</h2>
      {comments ? (
        comments.length === 0 ? (
          <h4 style={{ marginBottom: "5em" }}>
            No hay nada que mostrar aún...
          </h4>
        ) : (
          comments.map(el => {
            return <Comment key={el.id} {...el} />
          })
        )
      ) : (
        <h4 style={{ marginBottom: "5em" }}>Cargando...</h4>
      )}
    </>
  )
}
