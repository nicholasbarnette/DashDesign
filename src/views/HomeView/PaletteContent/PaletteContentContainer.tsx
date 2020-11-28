import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateTheme } from '../../../store/actions/actions';
import { RootAppState } from '../../../store/reducers';
import { PaletteContent } from './PaletteContent';
import { Theme } from '@nickbarnette/dashui';

const mapStateToProps = (state: RootAppState, ownProps: any) => {
	return {
		...ownProps,
		theme: state.themeState.theme,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateTheme: (theme: Theme) => {
		dispatch(updateTheme(theme));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContent);
