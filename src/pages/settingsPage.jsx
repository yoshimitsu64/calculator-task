import ErrorBoundary from "@components/error-boundary"
import SettingsContainer from "@containers/FC/settingsContainer"

function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsContainer />
    </ErrorBoundary>
  )
}

export default SettingsPage
