import { mount } from 'enzyme';
import PlayAgainModal from './PlayAgainModal';

function mountComponent(shouldDisplay, resetBoard = () => {}) {
    return mount(<PlayAgainModal shouldDisplay={shouldDisplay} resetBoard={resetBoard} />);
}

describe('<PlayAgainModal />', () => {
    describe('when shouldDisplay is true', () => {
        it('displays the modal', () => {
            const wrapper = mountComponent(true);

            expect(wrapper.find('.play-again-modal').length).toEqual(1);
        });

        describe('when the modal is clicked', () => {
            it('calls the resetBoard function', () => {
                const resetBoard = jest.fn();
                const wrapper = mountComponent(true, resetBoard);

                wrapper.find('.play-again-modal').first().simulate('click');

                expect(resetBoard).toHaveBeenCalled();
            });
        });
    });

    describe('shouldDisplay is false', () => {
        it('does not display the modal', () => {
            const wrapper = mountComponent(false);

            expect(wrapper.find('.play-again-modal').length).toEqual(0);
        });
    });
});
