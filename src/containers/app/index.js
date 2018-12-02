import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as phonesActions from '../../actions/phones';
import App from '../../components/app';
import orderBy from 'lodash/orderBy';


const sortBy = (phones, filterBy) => {
  switch (filterBy) {
      case 'all':
          return phones;
      case 'price_high':
          return orderBy(phones, 'price', 'desc');
      case 'price_low':
          return orderBy(phones, 'price', 'asc');
      case 'name':
          return orderBy(phones, 'name', 'asc');
      default:
          return phones;
  }
};


const mapStateToProps = ({ phones }) => ({
    phones: sortBy(phones.items, phones.filterBy),
    isReady: phones.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(phonesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
