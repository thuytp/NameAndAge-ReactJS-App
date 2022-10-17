import classes from "./UserList.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
