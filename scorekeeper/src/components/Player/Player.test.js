import Player from './Player';
import React from 'react'; 
import { shallow } from 'enzyme';


it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
});
 
// test dla score 

it('renders correct score', () => {
    const playerScorePassed = 2;
    const playerComponent = shallow(<Player score={playerScorePassed} />);
  
    const playerScoreRendered = Number(playerComponent.find('.Player__score').text());
  
    expect(playerScoreRendered).toEqual(playerScorePassed);
});

// test klikniecia w przycisk +

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} onPlayerRemove={()=>{}}/>);
  
    const plusButton = playerComponent.find('.plus');
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
  });

  // test klikniecia w przycisk -

  it('should call onPlayerScoreChange with 1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} onPlayerRemove={()=>{}}/>);
  
    const minusButton = playerComponent.find('.minus');
  
    minusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
  });
