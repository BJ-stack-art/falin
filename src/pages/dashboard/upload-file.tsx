import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const UploadFileGuide = lazy(() => delayLoading(import("@/features/dashboard/upload-file")))

const UploadFilePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <UploadFileGuide />
    </Suspense>
  )
}

export default UploadFilePage
