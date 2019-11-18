import * as React from 'react';
import cx from 'classnames';
import Select from 'react-select';
import BaseModal from '../../base/BaseModal/BaseModal';
import { AuthorType, PostType } from '../../../store/posts/types';
import Footer from '../../base/BaseModal/Footer';
import Toggle from '../../base/Toggle/Toggle';
import GroupWrapper from './GroupWrapper';

import styles = require('./styles.scss');

interface NewPostModalProps {
  onNewPostPublish: (post: PostType) => void;
  onModalClose: () => void;
  authors: Array<AuthorType>;
}

const NewPostModal: React.FC<NewPostModalProps> = ({ onNewPostPublish, onModalClose, authors }) => {
  const [newPost, setPost] = React.useState<PostType>({
    id: new Date().getTime(),
    title: {
      title: '',
    },
    image: '',
    published: false,
    content: '',
    author: {
      name: '',
      position: '',
      photo: '',
    },
  });

  const selectAuthors = authors.map(author => {
    return {
      label: author.name,
      value: author,
      id: author.name,
    };
  });

  const [errors, setErrors] = React.useState({
    title: false,
    content: false,
    author: false,
  });

  function validateNewPost(post: PostType): boolean {
    let title = false;
    let content = false;
    let author = false;
    if (!post.title.title.trim()) {
      title = true;
    }
    if (!post.content.trim()) {
      content = true;
    }
    if (!post.author.name.trim() || !post.author.position.trim() || !post.author.photo.trim()) {
      author = true;
    }
    setErrors({
      title,
      content,
      author,
    });
    return !(title || content || author);
  }

  function onPublish(): void {
    if (validateNewPost(newPost)) {
      onNewPostPublish(newPost);
      onModalClose();
    }
  }

  function onActionClick(onAction: Function): (event: React.MouseEvent<HTMLButtonElement>) => void {
    return (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      onAction();
    };
  }

  function onInstancePublishToggle(checked: boolean): void {
    setPost(value => ({
      ...value,
      published: checked,
    }));
  }
  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const title = event.currentTarget.value;
    setPost(prevState => ({
      ...prevState,
      title: {
        title,
      },
    }));
  }
  function onContentChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    const content = event.currentTarget.value;
    setPost(prevState => ({
      ...prevState,
      content,
    }));
  }

  function onImageChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', fileEvent => {
      const image = new Image();

      image.addEventListener(
        'load',
        (): void => {
          const result = image.src;

          setPost(prevState => ({
            ...prevState,
            image: result,
          }));
        },
        false
      );
      image.src = fileEvent.target.result.toString();
    });
    reader.readAsDataURL(file);
  }

  function onAuthorChange(author: { value: AuthorType }): void {
    setPost(prevState => ({
      ...prevState,
      author: author.value,
    }));
  }

  function footerRender(): JSX.Element {
    return (
      <Footer className={styles.newPostFooter}>
        <Toggle
          active={newPost.published}
          onToggle={onInstancePublishToggle}
          label="Instant publish"
        />
        <div>
          <button type="button" onClick={onActionClick(onModalClose)} className={styles.cancelBtn}>
            Cancel
          </button>
          <span className={styles.spanOr}>or</span>
          <button type="button" onClick={onActionClick(onPublish)} className={styles.footerBtn}>
            Publish
          </button>
        </div>
      </Footer>
    );
  }

  return (
    <BaseModal headerTitle="New post" onModalClose={onModalClose} footerRender={footerRender}>
      <div className={styles.newPostModalContent}>
        <GroupWrapper title="MESSAGE">
          <input
            type="text"
            name="title"
            className={cx(styles.inputBox, styles.title, { [styles.error]: errors.title })}
            placeholder="Title"
            onChange={onTitleChange}
          />
          <textarea
            name="content"
            placeholder="Content"
            className={cx(styles.inputBox, styles.content, { [styles.error]: errors.content })}
            onChange={onContentChange}
          />
        </GroupWrapper>
        <GroupWrapper title="PHOTO">
          <input
            type="file"
            name="image"
            accept="image/png, image/tiff, image/jpg, image"
            placeholder="Select an image"
            className={cx(styles.inputBox, styles.photo)}
            onChange={onImageChange}
          />
        </GroupWrapper>
        <GroupWrapper title="AUTHOR">
          <Select
            name="author"
            placeholder="Who said?"
            className={cx(styles.inputBox, styles.author, { [styles.error]: errors.author })}
            options={selectAuthors}
            onChange={onAuthorChange}
          />
        </GroupWrapper>
      </div>
    </BaseModal>
  );
};

export default NewPostModal;
