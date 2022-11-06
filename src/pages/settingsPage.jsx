import ErrorBoundary from "@components/errorBoundary";

import SettingsContainer from "@containers/functionalComponents/settingsContainer";

function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsContainer />
    </ErrorBoundary>
  );
}

export default SettingsPage;
