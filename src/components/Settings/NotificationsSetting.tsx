import * as React from 'react';
import MainElement from '../Main/MainElement';
import Toggle from '../base/Toggle/Toggle';

// interface NotificationsSettingProps {}

const NotificationsSetting: React.FC<{}> = () => {
  return (
    <MainElement title="Notifications">
      <Toggle />
    </MainElement>
  );
};

export default NotificationsSetting;
