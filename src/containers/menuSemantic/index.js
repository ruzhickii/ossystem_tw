import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as basketActions from '../../actions/basket';
import Menu from '../../components/menuSemantic';
import uniqBy from 'lodash/uniqBy';



const mapStateToProps = ({ basket }) => ({
    totalPrice: basket.items.reduce((total, phone) => total + phone.price, 0),
    count: basket.items.length,
    items: uniqBy(basket.items, o => o.id)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(basketActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu);

