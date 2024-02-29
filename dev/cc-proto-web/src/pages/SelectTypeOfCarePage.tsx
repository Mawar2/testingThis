import { FC } from 'react'
import { VaAlert, VaHeaderMinimal, VaMinimalFooter } from '@department-of-veterans-affairs/component-library/dist/react-bindings'

const SelectTypeOfCarePage: FC = () => {
  return (
    <>
      <div className={'header-wrapper'}>
        <VaHeaderMinimal />
      </div>
      <div className={'container'}>
        <div className={'vads-l-grid-container'}>
          <p>stuff to come</p>
        </div>
        <VaMinimalFooter />
      </div>
    </>
  )
}

export default SelectTypeOfCarePage
