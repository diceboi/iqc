import dynamic from "next/dynamic"

const ConfiguratorInner = dynamic(() => import('../components/ConfiguratorInner'), { ssr: false })

export default function ConfiguratorPage() {
  return (
    <div className="w-full h-[80vh]">
      <ConfiguratorInner />
    </div>
  )
}
