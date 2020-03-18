import React, { useState } from 'react'
import axios from 'axios'

import TweetList from './TweetList'

const HandleNameForm = () => {
  const [state, setState] = useState({value: ''})
  const [tweets, setTweets] = useState([])
  const [error, setError]: any = useState(null)

  const handleChange = (event: any) => {
    setState({value: event.target.value})
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const response = await axios.get('http://127.0.0.1:5000/timeline',
      {
        params: {
          screen_name: state.value
        }
      }
    )
    if (response.data.error) {
      setTweets([])
      setError(response.data.error)
    } else {
      setTweets(response.data)
      setError(null)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Enter Twitter handle name here</div>
          <input type="text" value={state.value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <TweetList error={error} tweets={tweets} />
    </>
  )
}

export default HandleNameForm
