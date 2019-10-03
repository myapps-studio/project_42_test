import React from 'react';
import { shallow } from 'enzyme';
import App  from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />); 
});

it('should update player score', () => {
  
  const playerScore = 1;
  const appComponent = shallow(<App/>);
/*
  const players = [{name: 'Kunegunda',  score: 5}];

  appComponent.setState({ players }); */
  const onScoreUpdate = appComponent.prop('onScoreUpdate');
  console.log(appComponent.props());
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');
  playersAfterUpdate[0].score

  expect(playerScore).toEqual(playersAfterUpdate[0].score);
});

it('should add player', () => {
  //shallow(<App />);
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[2].score).toEqual(0);
});
 
it('should remove player', () => {

  const wrapper = shallow(<App />);

  const onPlayerRemove =  wrapper.find(<PlayersList/>).prop('onPlayerRemove');
  onPlayerRemove('Kunegunda');

  const players =  wrapper.state('players');
  expect(players.length).toEqual(2);
  expect(players[0].name).toEqual('Kunegunda');
  expect(players[0].score).toEqual(5);
});