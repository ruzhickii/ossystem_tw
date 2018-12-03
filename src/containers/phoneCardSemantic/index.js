import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as basketActions from '../../actions/basket';
import phoneCardSemantic from '../../components/phoneCardSemantic';



const mapStateToProps = ({ basket }, { id }) => ({
    addedCount: basket.items.reduce((count, phone) => count + (phone.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(basketActions, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(phoneCardSemantic);