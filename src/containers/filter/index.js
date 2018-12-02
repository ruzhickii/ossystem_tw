import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as filterActions from '../../actions/filter';
import Filter from '../../components/filter';



const mapStateToProps = ({ phones }) => ({
    filterBy: phones.filterBy,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(Filter);