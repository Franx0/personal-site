// React
import { FunctionComponent } from 'react';

const List: FunctionComponent<Props> = ({ children }) => {
  const listItems = Object.entries(children).map(([key, val]) => {
    return (
      <li key={`child${key}`}>
        {val}
      </li>
    )
  });

  return(
    <ul>{listItems}</ul>
  );
}

export default List
