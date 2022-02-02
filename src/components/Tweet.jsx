import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions"

function Tweet({user, timestamp, message}) {
  return (
    <div className="tweet">
      <ProfileImage image = {user.image}/>

      <div className="body">
        <div className="top">
          <User userData={user} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
         
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
