import { connect } from "react-redux";
import BucketList from "../components/BucketList";

var mapStateToProps = state => {
	return {
		buckets: state
	};
};

let BucketListContainer = connect(mapStateToProps)(BucketList);

export default BucketListContainer;
