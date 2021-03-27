import { mount } from 'enzyme';
import Board from './Board';
import Spot from './Spot';

const DummyBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function mountComponent({ move = () => {}, children = null } = {}) {
    return mount(
        <Board board={DummyBoard} move={move}>
            {children}
        </Board>
    );
}

describe('<Board />', () => {
    it('displays 9 spots for each spot on board', () => {
        const wrapper = mountComponent();

        expect(wrapper.find(Spot).length).toEqual(9);
    });

    it('displays children', () => {
        const wrapper = mountComponent({
            children: <div id="test-component"></div>
        });

        expect(wrapper.find('#test-component').length).toEqual(1);
    });

    /**
     * I did want to leave a comment here for any potential reviewers.
     * I am simulating a click on the spot div due to the implementation
     * of handleClick in Spot.
     * 
     * You may notice that I don't shallow render anything. I don't like 
     * using shallow rendering for these reasons:
     * https://kentcdodds.com/blog/why-i-never-use-shallow-rendering
     * 
     * In my personal projects, I use React Testing Library for these reasons:
     * https://testing-library.com/docs/guiding-principles
     * 
     * My concern with calling props directly on the Spot component directly
     * is that it doesn't actually assert that what the user clicked would 
     * be called (ex. in the case I forgot to set up my onClick correctly
     * in that component.)
     * 
     * I'll elaborate a little bit more about my testing philosophy in the
     * readme document.
     */
    describe('when a spot is pressed with a null player', () => {
        it('calls the move function', () => {
            const move = jest.fn();
            const wrapper = mountComponent({ move });

            wrapper.find('.spot').first().simulate('click')

            expect(move).toHaveBeenCalled();
        });
    });
});
