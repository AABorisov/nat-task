import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainElement from '../Main/MainElement';
import Toggle from '../base/Toggle/Toggle';
import { AppState } from '../../store';
import { setNotificationsSetting } from '../../store/settings/actions';
import { SetNotificationsSettingAction } from '../../store/settings/types';

interface NotificationsSettingStateProps {
  showNotifications: boolean;
}
interface NotificationsSettingDispatchProps {
  setNotifications: (showNotifications: boolean) => SetNotificationsSettingAction;
}

interface NotificationsSettingProps
  extends NotificationsSettingStateProps,
    NotificationsSettingDispatchProps {}

const NotificationsSetting: React.FC<NotificationsSettingProps> = ({
  showNotifications,
  setNotifications,
}) => {
  return (
    <MainElement title="Notifications">
      <Toggle
        active={showNotifications}
        onToggle={setNotifications}
        label="Show all notifications"
      />
    </MainElement>
  );
};

const mapStateToProps = (state: AppState): NotificationsSettingStateProps => ({
  showNotifications: state.settings.showNotifications,
});

const mapDispatchToProps = (dispatch: Dispatch): NotificationsSettingDispatchProps =>
  bindActionCreators(
    {
      setNotifications: setNotificationsSetting,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsSetting);
