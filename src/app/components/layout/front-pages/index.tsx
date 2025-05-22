// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'
import Header from './Header'
import type { ChildrenType } from '@/@core/types'
import Footer from './Footer'

const FrontLayout = async ({ children }: ChildrenType) => {
  // Vars
  const mode = await getServerMode()

  return (
    <div className={frontLayoutClasses.root}>
      <Header mode={mode} />
      <div className="w-[90%] mx-auto pt-2">
        {children}
      </div>
      <Footer mode={mode} />
    </div>
  )
}

export default FrontLayout
