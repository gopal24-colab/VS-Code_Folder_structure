/* eslint-disable react/prop-types */
import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <span
          style={{ cursor: "pointer", display: "block" }}
          onClick={() => setExpand(!expand)}>
          {explorer.isFolder ? ">" : "-"}
          {explorer.name}
          <br />
        </span>

        <span style={{ display: expand ? "block" : "none" }}>
          {explorer?.items?.map((item) => {
            return <Folder explorer={item} key={item.name} />;
          })}
        </span>
      </>
    );
  } else {
    return (
      <>
        <span>
          {explorer.name}
          <br />
        </span>
      </>
    );
  }
};

export default Folder;
