import { FC } from 'react'
import { VaAlert, VaHeaderMinimal, VaMinimalFooter } from '@department-of-veterans-affairs/component-library/dist/react-bindings'
import './AppLanding.css'
import { Appointments } from 'components/Appointments'

const AppLanding: FC = () => {
  return (
    <>
      <div className={'header-wrapper'}>
        <VaHeaderMinimal />
      </div>
      <div className={'container'}>
        <div className={'vads-l-grid-container'}>
          <VaAlert
            status='info'
            closeBtnAriaLabel='Close notification'
            closeable
            // onCloseEvent={hideAlert}
            showIcon
            visible
            uswds
          >
            <p>If you’re filing a claim for a condition that we now consider presumptive under a new law or regulation (like the PACT Act), you can submit this form for review.</p>
          </VaAlert>
          <Appointments />
        </div>
        <VaMinimalFooter />
      </div>
    </>
  )
}

export default AppLanding
