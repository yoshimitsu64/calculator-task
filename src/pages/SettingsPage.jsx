import ErrorBoundary from "@components/error-boundary";
import Header from "@components/header";
import Settings from "@components/settings";
import SettingsContainer from "@containers/FC/settings-container";

function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsContainer />
    </ErrorBoundary>
  );
}

export default SettingsPage;
