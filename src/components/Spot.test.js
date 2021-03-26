import { mount } from 'enzyme';
import Spot from './Spot';
import BoardModel from '../models/Board';

function mountComponent(player, onClick = () => {}) {
    return mount(<Spot player={player} onClick={onClick} />);
}

describe('<Spot />', () => {
    describe('when player is null', () => {
        it('does not render an image', () => {
            const wrapper = mountComponent(null);
            expect(wrapper.find('img').length).toEqual(0);
        });

        it('calls the onClick function when clicked', () => {
            const onClick = jest.fn();
            const wrapper = mountComponent(null, onClick);
            wrapper.find('.spot').simulate('click');
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });

    describe('when player is x', () => {
        it('renders an image with x alt tag', () => {
            const wrapper = mountComponent(BoardModel.PLAYERS.FIRST_PLAYER);
            expect(wrapper.find('img').length).toEqual(1);
            expect(wrapper.find('img').first().props().alt).toEqual('x');
        });

        it('does not call the onClick function when clicked', () => {
            const onClick = jest.fn();
            const wrapper = mountComponent(BoardModel.PLAYERS.FIRST_PLAYER, onClick);
            wrapper.find('.spot').simulate('click');
            expect(onClick).not.toHaveBeenCalled();
        });
    });

    describe('when player is o', () => {
        it('renders an image with o alt tag', () => {
            const wrapper = mountComponent(BoardModel.PLAYERS.SECOND_PLAYER);
            expect(wrapper.find('img').length).toEqual(1);
            expect(wrapper.find('img').first().props().alt).toEqual('o');
        });

        it('does not call the onClick function when clicked', () => {
            const onClick = jest.fn();
            const wrapper = mountComponent(BoardModel.PLAYERS.SECOND_PLAYER, onClick);
            wrapper.find('.spot').simulate('click');
            expect(onClick).not.toHaveBeenCalled();
        });
    });
});
