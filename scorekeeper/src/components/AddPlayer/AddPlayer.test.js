import AddPlayers from './AddPlayers';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<AddPlayers players={[]} />);
});

it('test', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    nameInput.value = 'Ania';
    const form = addPlayerComponent.find('form');
    form.simulate('submit');
    expect(onPlayerAdd).toBeCalledWith('Ania');
});