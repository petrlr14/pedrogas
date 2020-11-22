import axios from "axios"

export async function notifyNewComment(body) {
  const { data } = await axios.post(
    `${process.env.GATSBY_backendURL}/notify-comment`,
    body
  )
  return data
}
