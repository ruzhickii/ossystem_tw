import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as phonesActions from '../../actions/phones';
import App from '../../components/app';
import orderBy from 'lodash/orderBy';


const sortBy = (phones, filterBy) => {
  switch (filterBy) {
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

const filterPhones = (phones, searchQuery) =>
    phones.filter(
        o =>
            o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

const searchPhones = (phones, filterBy, searchQuery) => {
    return sortBy(filterPhones(phones, searchQuery), filterBy);
};

const mapStateToProps = ({ phones, filter }) => ({
    phones:
        phones.items &&
        searchPhones(phones.items, filter.filterBy, filter.searchQuery),
    isReady: phones.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(phonesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
