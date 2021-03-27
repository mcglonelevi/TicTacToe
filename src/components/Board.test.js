import { mount } from 'enzyme';
import Board from './Board';
import Spot from './Spot';

const DummyBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function mountComponent(move = () => {}) {
    return mount(<Board board={DummyBoard} move={move} />);
}

describe('<Board />', () => {
    it('displays 9 spots for each spot on board', () => {
        const wrapper = mountComponent();

        expect(wrapper.find(Spot).length).toEqual(9);
    });

    describe('when a spot is pressed with a null player', () => {
        it('calls the move function', () => {
            const move = jest.fn();
            const wrapper = mountComponent(move);

            wrapper.find('.spot').first().simulate('click')

            expect(move).toHaveBeenCalled();
        });
    });
});
