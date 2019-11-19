import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

let BucketList = ({ buckets }) => {
  return (
    <div className="list">
      <ul>
        {buckets.map(bucket => (
          <li key={bucket.bucketId}>
            <Link className="bucketLink" to={`/bucket/${bucket.bucketId}`}>
              <FontAwesomeIcon icon={faBookmark} />
              <span className="bucket">{bucket.name}</span>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;
