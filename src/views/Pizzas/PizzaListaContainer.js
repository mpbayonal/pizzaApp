import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchReservas,  deleteReservas } from '../../redux/actions/reservaActions';
import PizzaLista from './PizzaLista';


const mapStateToProps = (state) => {


    return {
        reservasList: state.mainReducer.reserva.reservasList


    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchReservas: () => dispatch(fetchReservas()),
        deleteReservas: (id) => dispatch(deleteReservas(id))


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaLista);
