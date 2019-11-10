import * as React from 'react';
import MainElement from '../Main/MainElement';
import Post from './Post';
import { PostType } from './types';
import { ModeEnum } from '../ModeBar/types';
import NewPost from './NewPost';

import styles = require('./styles.scss');

interface PostsProps {
  mode: ModeEnum;
}

const posts: Array<PostType> = [
  {
    id: 0,
    published: true,
    title: '',
    content: 'Failure is simply the opportunity to begin again, this time more intelligently.',
    image: '',
    author: {
      name: 'Sierra Ferguson',
      position: 'TPM',
      photo: 'assets/face00001.png',
    },
  },
  {
    id: 1,
    published: true,
    title: 'We did it!',
    content: '',
    image: '',
    author: {
      name: 'Lina Lake',
      position: 'Head of manager dept.',
      photo: 'assets/face00002.png',
    },
  },
  {
    id: 2,
    published: true,
    title: '',
    content: 'Obstacles are those frightful things you see when you take your eyes off your goal.',
    image: '',
    author: {
      name: 'George Fields',
      position: 'Head of QA dept.',
      photo: 'assets/face00003.png',
    },
  },
  {
    id: 3,
    published: true,
    title: '60% cases',
    content: 'completed ahead of schedule',
    additionalContent: '21% worse then last week',
    image: '',
    author: {
      name: 'Glen Moore',
      position: 'Head of Statistics',
      photo: 'assets/face00004.png',
    },
  },
  {
    id: 4,
    published: false,
    title: '',
    content: 'Failure is simply the opportunity to begin again, this time more intelligently.',
    image: '',
    author: {
      name: 'Sierra Ferguson',
      position: 'TPM',
      photo: 'assets/face00001.png',
    },
  },
  {
    id: 5,
    published: false,
    title: 'We did it!',
    content: '',
    image: '',
    author: {
      name: 'Lina Lake',
      position: 'Head of manager dept.',
      photo: 'assets/face00002.png',
    },
  },
  {
    id: 6,
    published: false,
    title: '',
    content: 'Obstacles are those frightful things you see when you take your eyes off your goal.',
    image: '',
    author: {
      name: 'George Fields',
      position: 'Head of QA dept.',
      photo: 'assets/face00003.png',
    },
  },
  {
    id: 7,
    published: false,
    title: '60% cases',
    content: 'completed ahead of schedule',
    additionalContent: '21% worse then last week',
    image: '',
    author: {
      name: 'Glen Moore',
      position: 'Head of Statistics',
      photo: 'assets/face00004.png',
    },
  },
  {
    id: 8,
    published: true,
    title: '',
    content: 'Failure is simply the opportunity to begin again, this time more intelligently.',
    image: '',
    author: {
      name: 'Sierra Ferguson',
      position: 'TPM',
      photo: 'assets/face00001.png',
    },
  },
  {
    id: 9,
    published: true,
    title: 'We did it!',
    content: '',
    image: '',
    author: {
      name: 'Lina Lake',
      position: 'Head of manager dept.',
      photo: 'assets/face00002.png',
    },
  },
  {
    id: 10,
    published: true,
    title: '',
    content: 'Obstacles are those frightful things you see when you take your eyes off your goal.',
    image: '',
    author: {
      name: 'George Fields',
      position: 'Head of QA dept.',
      photo: 'assets/face00003.png',
    },
  },
  {
    id: 11,
    published: true,
    title: '60% cases',
    content: 'completed ahead of schedule',
    additionalContent: '21% worse then last week',
    image: '',
    author: {
      name: 'Glen Moore',
      position: 'Head of Statistics',
      photo: 'assets/face00004.png',
    },
  },
];

const Posts: React.FC<PostsProps> = ({ mode = ModeEnum.dashboard }) => {
  const isDashboard: boolean = mode === ModeEnum.dashboard;
  const filteredPosts = isDashboard ? posts.filter(post => post.published) : posts;
  const displayPostsNumber = isDashboard ? 8 : 11;
  const postsToDisplay = filteredPosts.slice(0, displayPostsNumber);

  return (
    <MainElement title="Highlights">
      <div className={styles.posts}>
        {postsToDisplay.map(post => {
          return <Post post={post} key={post.id} />;
        })}
        {!isDashboard && <NewPost />}
      </div>
    </MainElement>
  );
};

export default Posts;
