import { mount } from 'enzyme';
import App from './App';

/**
 * For expressing intent to any potential reviewers I will be
 * treating this test as a full E2E test, so I have saved it for
 * last as a validation of my work.
 */

function mountComponent() {
    const wrapper = mount(<App />);

    /**
     * Index corresponds to this mapping:
     * 
     * 0|1|2
     * -----
     * 3|4|5
     * -----
     * 6|7|8
     */
    const clickBack = () => {
        wrapper.find('.back-button').first().simulate('click');
    };
    
     const clickSpot = (index) => {
        wrapper.find('.spot').at(index).simulate('click');
    };

    const expectXTurn = () => {
        expect(wrapper.find('h1').first().text()).toEqual('It is X\'s turn.');
    }

    const expectOTurn = () => {
        expect(wrapper.find('h1').first().text()).toEqual('It is O\'s turn.');
    }

    return {
        wrapper,
        clickBack,
        clickSpot,
        expectXTurn,
        expectOTurn,
    };
}

function playWinningGame() {
    const { wrapper, clickSpot, expectXTurn, expectOTurn } = mountComponent();
            
    expectXTurn();

    clickSpot(0);

    expectOTurn();

    clickSpot(1);

    expectXTurn();

    clickSpot(3);

    expectOTurn();

    clickSpot(4);

    expectXTurn();

    clickSpot(6);

    return wrapper;
}

describe('<App />', () => {
    describe('reset functionality', () => {
        it('resets', () => {
            const wrapper = playWinningGame();

            expect(wrapper.find('h1').first().text()).toEqual('X won the game!');
    
            wrapper.find('.play-again-overlay').first().simulate('click');
    
            expect(wrapper.find('h1').first().text()).toEqual('It is X\'s turn.');
            expect(wrapper.find('.play-again-overlay').length).toEqual(0);
        });
    });

    describe('back functionality', () => {
        it('backs up a move', () => {
            const { clickBack, clickSpot, expectXTurn, expectOTurn } = mountComponent();

            expectXTurn();

            clickSpot(0);

            expectOTurn();

            clickBack();

            expectXTurn();
        });
    });

    describe('when a game with a winner is played', () => {
        it('shows valid feedback to the user with winning text at the end of the game', () => {
            const wrapper = playWinningGame();

            expect(wrapper.find('h1').first().text()).toEqual('X won the game!');
        });
    });

    describe('when a game with a tie is played', () => {
        it('shows valid feedback to the user with tie text at the end of the game', () => {
            const { wrapper, clickSpot, expectXTurn, expectOTurn } = mountComponent();

            expectXTurn();

            clickSpot(0);

            expectOTurn();

            clickSpot(1);

            expectXTurn();

            clickSpot(2);

            expectOTurn();

            clickSpot(4);

            expectXTurn();

            clickSpot(3);

            expectOTurn();

            clickSpot(6);

            expectXTurn();

            clickSpot(5);

            expectOTurn();

            clickSpot(8);

            expectXTurn();

            clickSpot(7);

            expect(wrapper.find('h1').first().text()).toEqual('It was a tie.');
        });
    });
});
