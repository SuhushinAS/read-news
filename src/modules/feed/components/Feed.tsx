import {TDispatch} from 'app/types';
import {actionFeedGetList} from 'modules/feed/actions';
import {FeedPageEdit} from 'modules/feed/components/FeedPageEdit';
import {FeedPageItem} from 'modules/feed/components/FeedPageItem';
import {FeedPageList} from 'modules/feed/components/FeedPageList';
import {feedPaths} from 'modules/feed/constants';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

type TProps = {
  dispatch: TDispatch;
};

export class FeedComponent extends React.Component<TProps> {
  render() {
    return (
      <div>
        <Routes>
          <Route element={<FeedPageList />} path={feedPaths.list} />
          <Route element={<FeedPageItem />} path={feedPaths.view} />
          <Route element={<FeedPageEdit />} path={feedPaths.edit} />
        </Routes>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(actionFeedGetList);
  }
}

export const Feed = connect()(FeedComponent);
