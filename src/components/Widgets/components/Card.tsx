import * as React from 'react';
import { WidgetType } from '../../../store/widgets/types';

import styles = require('./styles.scss');

type CardProps = {
  card: WidgetType;
};

const Card: React.FC<CardProps> = ({ card: { title, important, icon, content, bigImportant } }) => {
  function renderContent(cardContent: string | Array<string>): JSX.Element {
    if (typeof cardContent === 'string') {
      return (
        <span
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: cardContent.replace(/\w*\S*\d\S*/g, '<mark>$&</mark>'),
          }}
        />
      );
    }
    if (Array.isArray(cardContent)) {
      return (
        <div className={styles.contentArray}>
          {cardContent.map(element => {
            return (
              <span className={styles.contentElement} key={`${element}`}>
                {element}
              </span>
            );
          })}
        </div>
      );
    }
    return null;
  }
  return (
    <div className={styles.card}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {typeof important === 'number' && icon && (
        <div className={styles.important}>
          <img alt="" src={icon} className={styles.icon} />
          <span className={bigImportant ? styles.bigImportant : styles.number}>{important}</span>
        </div>
      )}
      {renderContent(content)}
    </div>
  );
};

export default Card;
