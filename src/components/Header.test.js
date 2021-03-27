import { mount } from 'enzyme';
import Header from './Header';
import BoardModel from '../models/Board';

function mountComponent(nextTurn, winnerOrTie) {
    return mount(<Header nextTurn={nextTurn} winnerOrTie={winnerOrTie} />);
}

describe('<Header />', () => {
    describe('when the game is a tie', () => {
        it('displays tie text', () => {
            const wrapper = mountComponent(null, BoardModel.TIE_STATE);

            expect(wrapper.find('h1').first().text()).toEqual('It was a tie.');
        });
    });

    describe('when a player wins', () => {
        it('display player win text', () => {
            const wrapper = mountComponent(null, BoardModel.PLAYERS.FIRST_PLAYER);

            expect(wrapper.find('h1').first().text()).toEqual('X won the game!');
        });
    });

    describe('when players still need to play', () => {
        it('displays player text', () => {
            const wrapper = mountComponent(BoardModel.PLAYERS.FIRST_PLAYER, null);

            expect(wrapper.find('h1').first().text()).toEqual('It is X\'s turn.');
        });
    });
});
