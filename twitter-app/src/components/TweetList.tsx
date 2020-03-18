import React from 'react'
import moment from 'moment'

const TweetList = (props: any) => {
  const { error, tweets } = props

  if (error || tweets.length > 0) {
    return (
      <>
        {error
          ? <h3>{error}</h3>
          :(
            <>
              <h3>Latest 10 tweets of {tweets[0].user.name}</h3>
              {tweets.map(
                (tweet: any) => (
                  <div className="tweet">
                    <span className="time">
                      {moment(tweet.created_at, 'ddd MMM D hh:mm:ss ZZ YYYY').format('YYYY-MM-DD hh:mm:ss A')}
                    </span>
                    <span className="text" style={{paddingLeft: "1rem"}}>
                      {tweet.text}
                    </span>
                  </div>
                )
              )}
            </>
          )
        }
      </>
    )
  } else {
    return <h3>Would display 10 latest tweets from any publicly avialble twitter user on form submission</h3>
  }
}

export default TweetList
